// Vercel serverless function for "Request to Book" submissions.
//
// Two side effects on success:
//   1. Sends a notification email to NOTIFY_EMAIL via Resend (reply-to
//      is set to the requester so you can hit reply directly).
//   2. Appends a row to a Google Sheet via an Apps Script webhook.
//
// Both channels run in parallel; succeeds if at least one succeeds.
// Returns 502 only if both fail.
//
// Env vars:
//   RESEND_API_KEY        — Resend API key
//   NOTIFY_EMAIL          — where to send booking notifications
//   SHEETS_WEBHOOK_URL    — Apps Script web app deployment URL
//   RESEND_FROM           — optional from address. Defaults to onboarding@resend.dev

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message, trip } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Name required' });
  }

  const cleanName = String(name).trim().slice(0, 200);
  const cleanEmail = String(email).trim().slice(0, 200);
  const cleanPhone = phone ? String(phone).trim().slice(0, 60) : '';
  const cleanMessage = message ? String(message).trim().slice(0, 2000) : '';
  const cleanTrip = trip ? String(trip).trim().slice(0, 200) : 'Unknown trip';

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;
  const sheetsUrl = process.env.SHEETS_WEBHOOK_URL;
  const fromAddress = process.env.RESEND_FROM || 'onboarding@resend.dev';

  const results = await Promise.allSettled([
    resendKey && notifyEmail
      ? notifyByEmail({ resendKey, notifyEmail, fromAddress, cleanName, cleanEmail, cleanPhone, cleanMessage, cleanTrip })
      : Promise.reject(new Error('resend-not-configured')),
    sheetsUrl
      ? appendToSheet({ sheetsUrl, cleanName, cleanEmail, cleanPhone, cleanMessage, cleanTrip })
      : Promise.reject(new Error('sheets-not-configured')),
  ]);

  const failures = results.filter(r => r.status === 'rejected');
  if (failures.length === results.length) {
    console.error('All channels failed for booking request', failures.map(f => f.reason && f.reason.message));
    return res.status(502).json({ error: 'Could not record request' });
  }

  return res.status(200).json({ ok: true });
}

async function notifyByEmail({ resendKey, notifyEmail, fromAddress, cleanName, cleanEmail, cleanPhone, cleanMessage, cleanTrip }) {
  const subject = `Booking request — ${cleanTrip}`;
  const textBody = [
    `New booking request from ${cleanName}.`,
    '',
    `Trip:    ${cleanTrip}`,
    `Name:    ${cleanName}`,
    `Email:   ${cleanEmail}`,
    cleanPhone ? `Phone:   ${cleanPhone}` : null,
    cleanMessage ? `\nNote:\n${cleanMessage}` : null,
  ].filter(Boolean).join('\n');

  const htmlBody = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:14px;line-height:1.55;color:#222;max-width:560px">
      <p style="margin:0 0 16px">New booking request from <strong>${escapeHtml(cleanName)}</strong>.</p>
      <table style="border-collapse:collapse;font-size:14px">
        <tr><td style="padding:4px 18px 4px 0;color:#666">Trip</td><td><strong>${escapeHtml(cleanTrip)}</strong></td></tr>
        <tr><td style="padding:4px 18px 4px 0;color:#666">Email</td><td><a href="mailto:${escapeHtml(cleanEmail)}" style="color:#8a4a31">${escapeHtml(cleanEmail)}</a></td></tr>
        ${cleanPhone ? `<tr><td style="padding:4px 18px 4px 0;color:#666">Phone</td><td>${escapeHtml(cleanPhone)}</td></tr>` : ''}
      </table>
      ${cleanMessage ? `<div style="margin-top:18px;padding:14px 16px;background:#f5f1e6;border-left:3px solid #8a4a31"><div style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#666;margin-bottom:8px">Note</div><div style="white-space:pre-wrap">${escapeHtml(cleanMessage)}</div></div>` : ''}
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

async function appendToSheet({ sheetsUrl, cleanName, cleanEmail, cleanPhone, cleanMessage, cleanTrip }) {
  const r = await fetch(sheetsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      kind: 'booking',
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      message: cleanMessage,
      trip: cleanTrip,
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
