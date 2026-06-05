# freeks — Landing Page

A single-file static site. Just `index.html`, no build step.

---

## Deploy to Vercel — three ways, pick one

### 1. Drag and drop (easiest, ~30 seconds)
1. Go to https://vercel.com/new
2. Drag this entire `34-rabbit-holes` folder onto the page
3. Click **Deploy**

You'll get a URL like `34-rabbit-holes-xyz.vercel.app` immediately. Custom domains can be added from the project's Domains tab.

### 2. Vercel CLI
```bash
npm i -g vercel        # one-time install
cd 34-rabbit-holes
vercel                 # follow prompts → preview URL
vercel --prod          # promote to production
```

### 3. GitHub auto-deploy
```bash
cd 34-rabbit-holes
git init
git add .
git commit -m "Initial commit"
gh repo create 34-rabbit-holes --public --source=. --push
```
Then connect the repo at https://vercel.com/new and Vercel will redeploy on every push.

---

## Custom domain

In the Vercel dashboard → Project → Settings → Domains → add your domain. Vercel will give you the DNS records to point at it (typically an A record to `76.76.21.21` or a CNAME to `cname.vercel-dns.com`).

---

## What's in the file

- All CSS is inline (single `<style>` block)
- Fonts loaded from the Fontshare CDN (Switzer)
- Background photos loaded from Unsplash CDN
- ~15 lines of vanilla JS at the bottom for hero hover swap, chip toggling, and scroll reveal
- No build step, no dependencies, no framework

If Unsplash images ever feel like a long-term risk, swap them for self-hosted versions in a `/img` folder and update the URLs.

---

## Before going live, you'll probably want to

- **OG image**: add a hero screenshot at `og.jpg` (1200×630px) and reference it in the `<meta property="og:image">` tag in the head
- **Analytics**: add Vercel Analytics, Plausible, or Fathom — one-line script in the head
- **Form backend**: the waitlist form currently fakes the submission. To capture emails, swap the `onsubmit` handler for a POST to Formspree, Tally, ConvertKit, or your own endpoint
- **Domain**: point a real domain at it before sharing publicly
