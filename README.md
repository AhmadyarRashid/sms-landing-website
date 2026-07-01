# SMS Services — Website

Marketing website for **SMS Services** (Smart Infrastructure, Security & Cloud — a member of the Pathfinder Group), rebuilt as a modern **Next.js (App Router) + Tailwind CSS v4** project.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.js                 # root layout (Navbar + Footer, fonts, metadata)
  globals.css               # Tailwind + theme tokens
  page.js                   # Home
  about/                    # About
  services/                 # Services overview
  solutions/[slug]/         # One page per solution (data-driven, SSG)
  community/  media/  gallery/  blog/  video/  contact/
  not-found.js              # 404
components/
  Navbar.js  Footer.js  PageHeader.js  CTASection.js  ContactForm.js
data/
  site.js                   # contact info, socials, logos
  solutions.js              # all 7 solution pages' content
  content.js                # blog posts, videos, gallery images
public/images/              # all image/logo/SVG assets
```

## Editing content

- **Solutions** (Smart Safety, BMS, Manufacturing, Agriculture, Cybersecurity, Retail, ERP):
  edit `data/solutions.js`. Adding an entry automatically creates its page, and adds it
  to the navbar dropdown, the Services page, and the footer.
- **Contact details / social links:** `data/site.js`.
- **Blog posts, videos, gallery:** `data/content.js`.

## Contact form

`components/ContactForm.js` currently shows a success message on submit but is **not**
wired to a backend. To actually send messages, add a Next.js Route Handler
(`app/api/contact/route.js`) or connect an email service (Resend, Formspree, etc.)
and post the form data to it.

## Maintenance mode

The whole site is currently gated behind a full-screen **maintenance page**
(`app/maintenance/page.js`). While maintenance mode is ON, `middleware.js`
redirects every route to `/maintenance`.

**To bring the full site back online**, do either:

- Open `middleware.js` and change `MAINTENANCE_MODE` — set the env var
  `MAINTENANCE_MODE=false` (e.g. in `.env.local` or your host's settings), **or**
- Hard-disable it by editing the first line's logic in `middleware.js`.

Then redeploy (or restart `npm run dev`). To turn maintenance back ON, remove the
env var (it defaults to ON) or set `MAINTENANCE_MODE=true`.

> Static assets (`/images`, `/_next`) are excluded from the redirect so the
> maintenance page's logo and styles load normally.

## Pages / routes

`/` · `/about` · `/services` · `/solutions/<slug>` · `/community` · `/media` ·
`/gallery` · `/blog` · `/video` · `/contact`

---

## ⚠️ Security notice

The original static site in this folder was **compromised** — it contained PHP webshells,
a distributed remote-access executable, DNS-based backdoors, and phishing pages (a
Booking.com clone and a redirect kit). Those malicious files were removed during this
rebuild. **However, deleting the local copies does not clean a live server.** If this
site is/was hosted, you should:

1. Change all hosting / cPanel / FTP / SSH / database passwords.
2. Notify your hosting provider that the account was compromised.
3. Have them scan `public_html` and restore from a known-clean backup.
4. Review the server for unknown cron jobs, admin users, and modified files.
