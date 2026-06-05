// Vercel serverless function for "Stay Updated" waitlist submissions.
//
// Two side effects on success:
//   1. Sends a notification email to NOTIFY_EMAIL via Resend.
//   2. Appends a row to a Google Sheet via an Apps Script webhook.
//
// Both channels run in parallel; succeeds if at least one succeeds.
// Returns 502 only if both fail.
//
// Env vars:
//   RESEND_API_KEY        — Resend API key
//   NOTIFY_EMAIL          — where to send notifications
//   SHEETS_WEBHOOK_URL    — Apps Script web app deployment URL
//   RESEND_FROM           — optional from address. Defaults to onboarding@resend.dev

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, interests, suggestion } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const cleanName = name ? String(name).trim().slice(0, 200) : '';
  const cleanEmail = String(email).trim().slice(0, 200);
  const cleanInterests = interests ? String(interests).trim().slice(0, 500) : '';
  const cleanSuggestion = suggestion ? String(suggestion).trim().slice(0, 500) : '';

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;
  const sheetsUrl = process.env.SHEETS_WEBHOOK_URL;
  const fromAddress = process.env.RESEND_FROM || 'onboarding@resend.dev';

  const results = await Promise.allSettled([
    resendKey && notifyEmail
      ? notifyByEmail({ resendKey, notifyEmail, fromAddress, cleanName, cleanEmail, cleanInterests, cleanSuggestion })
      : Promise.reject(new Error('resend-not-configured')),
    sheetsUrl
      ? appendToSheet({ sheetsUrl, cleanName, cleanEmail, cleanInterests, cleanSuggestion })
      : Promise.reject(new Error('sheets-not-configured')),
  ]);

  const failures = results.filter(r => r.status === 'rejected');
  if (failures.length === results.length) {
    console.error('All channels failed for waitlist submission', failures.map(f => f.reason && f.reason.message));
    return res.status(502).json({ error: 'Could not record signup' });
  }

  return res.status(200).json({ ok: true });
}

async function notifyByEmail({ resendKey, notifyEmail, fromAddress, cleanName, cleanEmail, cleanInterests, cleanSuggestion }) {
  const displayName = cleanName || cleanEmail;
  const subject = `New waitlist signup — ${displayName}`;
  const textBody = [
    `New 'Stay Updated' signup.`,
    '',
    `Name:       ${cleanName || '(not provided)'}`,
    `Email:      ${cleanEmail}`,
    cleanInterests ? `Interests:  ${cleanInterests}` : null,
    cleanSuggestion ? `Suggestion: ${cleanSuggestion}` : null,
  ].filter(Boolean).join('\n');

  const htmlBody = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:14px;line-height:1.55;color:#222;max-width:560px">
      <p style="margin:0 0 16px">New <strong>Stay Updated</strong> signup.</p>
      <table style="border-collapse:collapse;font-size:14px">
        <tr><td style="padding:4px 18px 4px 0;color:#666">Name</td><td><strong>${escapeHtml(cleanName || '(not provided)')}</strong></td></tr>
        <tr><td style="padding:4px 18px 4px 0;color:#666">Email</td><td><a href="mailto:${escapeHtml(cleanEmail)}" style="color:#8a4a31">${escapeHtml(cleanEmail)}</a></td></tr>
        ${cleanInterests ? `<tr><td style="padding:4px 18px 4px 0;color:#666;vertical-align:top">Interests</td><td>${escapeHtml(cleanInterests)}</td></tr>` : ''}
        ${cleanSuggestion ? `<tr><td style="padding:4px 18px 4px 0;color:#666;vertical-align:top">Suggestion</td><td>${escapeHtml(cleanSuggestion)}</td></tr>` : ''}
      </table>
    </div>`;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [notifyEmail],
      reply_to: cleanEmail,
      subject,
      text: textBody,
      html: htmlBody,
    }),
  });

  if (!r.ok) {
    const text = await r.text().catch(() => '');
    throw new Error(`resend-${r.status}: ${text.slice(0, 200)}`);
  }
}

async function appendToSheet({ sheetsUrl, cleanName, cleanEmail, cleanInterests, cleanSuggestion }) {
  const r = await fetch(sheetsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      kind: 'waitlist',
      name: cleanName,
      email: cleanEmail,
      interests: cleanInterests,
      suggestion: cleanSuggestion,
      source: 'Stay Updated',
    }),
  });

  if (!r.ok) {
    const text = await r.text().catch(() => '');
    throw new Error(`sheets-${r.status}: ${text.slice(0, 200)}`);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
