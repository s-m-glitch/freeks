// Vercel serverless function for "Request to Book" submissions.
//
// Two side effects on success:
//   1. Adds the person to Beehiiv as a subscriber, tagged with the
//      trip name via custom fields (so you can segment in Beehiiv).
//   2. Sends a notification email to you via Resend so you can reply
//      personally without checking a dashboard.
//
// Env vars required:
//   BEEHIIV_PUBLICATION_ID
//   BEEHIIV_API_KEY
//   RESEND_API_KEY
//   NOTIFY_EMAIL          (where to send booking notifications)
//   RESEND_FROM           (optional; from address. Defaults to onboarding@resend.dev)
//
// If only one of Beehiiv/Resend is configured, the function still
// succeeds as long as that one works. Returns 502 only if both fail.

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

  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  const beehiivKey = process.env.BEEHIIV_API_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;
  const fromAddress = process.env.RESEND_FROM || 'onboarding@resend.dev';

  const channelResults = await Promise.allSettled([
    publicationId && beehiivKey
      ? subscribeToBeehiiv({ publicationId, beehiivKey, cleanName, cleanEmail, cleanPhone, cleanTrip })
      : Promise.reject(new Error('beehiiv-not-configured')),
    resendKey && notifyEmail
      ? notifyByEmail({ resendKey, notifyEmail, fromAddress, cleanName, cleanEmail, cleanPhone, cleanMessage, cleanTrip })
      : Promise.reject(new Error('resend-not-configured')),
  ]);

  const failures = channelResults.filter(r => r.status === 'rejected');
  if (failures.length === channelResults.length) {
    console.error('All channels failed for booking request', failures.map(f => f.reason && f.reason.message));
    return res.status(502).json({ error: 'Could not record request' });
  }

  return res.status(200).json({ ok: true });
}

async function subscribeToBeehiiv({ publicationId, beehiivKey, cleanName, cleanEmail, cleanPhone, cleanTrip }) {
  const customFields = [
    { name: 'First Name', value: cleanName },
    { name: 'Booking Interest', value: cleanTrip },
  ];
  if (cleanPhone) customFields.push({ name: 'Phone', value: cleanPhone });

  const r = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${beehiivKey}`,
      },
      body: JSON.stringify({
        email: cleanEmail,
        reactivate_existing: true,
        send_welcome_email: false,
        utm_source: '34rh-book-request',
        utm_medium: cleanTrip,
        custom_fields: customFields,
      }),
    }
  );

  if (!r.ok) {
    const text = await r.text().catch(() => '');
    throw new Error(`beehiiv-${r.status}: ${text.slice(0, 200)}`);
  }
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

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
