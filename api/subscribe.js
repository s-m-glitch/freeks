// Vercel serverless function that proxies waitlist signups to Beehiiv.
// Reads BEEHIIV_PUBLICATION_ID and BEEHIIV_API_KEY from environment variables.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  const apiKey = process.env.BEEHIIV_API_KEY;

  if (!publicationId || !apiKey) {
    console.error('Missing BEEHIIV_PUBLICATION_ID or BEEHIIV_API_KEY env vars');
    return res.status(500).json({ error: 'Server not configured' });
  }

  try {
    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: '34o-landing',
          custom_fields: name
            ? [{ name: 'First Name', value: String(name).trim() }]
            : [],
        }),
      }
    );

    if (!beehiivRes.ok) {
      const text = await beehiivRes.text();
      console.error('Beehiiv API error', beehiivRes.status, text);
      return res.status(502).json({ error: 'Subscription failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Subscribe handler error', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
