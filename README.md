# Deekshith Poojary — Portfolio

A dark, animated single-page portfolio built with **Vite + React + Tailwind CSS v4**,
ready to deploy on **Netlify**.

Sections: Hero · About (with Education & Achievements) · Skills · Experience timeline ·
Projects · Certifications · Contact form · Footer.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

> **Note:** Node is installed on this machine at `~/.local/node`, not system-wide.
> Add it to your PATH before running npm:
>
> ```bash
> export PATH="$HOME/.local/node/bin:$PATH"
> ```
>
> To make that permanent: `echo 'export PATH="$HOME/.local/node/bin:$PATH"' >> ~/.bashrc`

---

## Editing your content

**Everything on the site comes from one file: [`src/data/profile.js`](src/data/profile.js).**
You should not need to touch any component to change the content.

| What you want to change | Where |
|---|---|
| Name, role, summary, email, phone, location | `profile` |
| Rotating hero taglines | `profile.taglines` |
| The four stat boxes in the hero | `profile.stats` |
| GitHub / LinkedIn / email links | `profile.socials` |
| Skill groups and tags | `skills` |
| Jobs and internships | `experience` |
| Projects (incl. repo/demo links) | `projects` |
| Certifications (images, badges, verify links) | `certifications` |
| Degrees and CGPA | `education` |
| Awards | `achievements` |
| Navbar items | `navLinks` |

### Certificate images

Certificate scans and Credly badges live in `public/certificates/`. See that
folder's `README.md` for the filename map and how to add another credential.

### Adding project links

Fill in the `links` object on any project and the icon buttons appear on the card:

```js
links: { repo: 'https://github.com/DeekshithPoojary/skybook', demo: 'https://…' }
```

### Replacing the résumé

Drop the new PDF at `public/Deekshith-Poojary-Resume.pdf` (same filename), or change
`profile.resume` to point at a different file in `public/`.

---

## Deploying to Netlify

### Option A — connect a Git repo (recommended; auto-deploys on every push)

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/DeekshithPoojary/portfolio.git
git push -u origin main
```

Then on [app.netlify.com](https://app.netlify.com): **Add new site → Import an existing
project → GitHub → pick the repo**. `netlify.toml` already sets the build settings, so
just click **Deploy**:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option C — drag and drop

Run `npm run build`, then drag the whole `dist` folder onto
[app.netlify.com/drop](https://app.netlify.com/drop).

> Drag-and-drop **does not register the contact form** — Netlify only detects forms
> from a Git or CLI deploy. Use Option A or B if you want the form working.

### Pointing it at your existing URL

You already have `deekshithpoojary-portfolio.netlify.app`. To reuse it, deploy this
site as a new Netlify site, then in the old site's **Site settings → Change site name**,
free up the name and assign it to the new one. Also update the `og:url` and `canonical`
tags in `index.html` and the URLs in `public/sitemap.xml` if the domain changes.

---

## The contact form

Uses **Netlify Forms** — no backend, no API key, free tier included.

Two pieces make it work, and both must stay in place:

1. The hidden static `<form name="contact" netlify>` at the bottom of `index.html`.
   Netlify parses the built HTML at deploy time to discover forms; it never runs your
   React. **Delete this and submissions will 404.**
2. The real React form in `src/components/Contact.jsx`, which POSTs url-encoded data
   to `/` with `form-name=contact`.

If you add or rename a field in the React form, add the same field to the hidden form
in `index.html` or that field won't be saved.

**Reading submissions:** Netlify dashboard → your site → **Forms → contact**.
To get emailed on each one: **Site settings → Forms → Form notifications → Add
notification → Email notification**.

**Locally the form will fail** — there is no Netlify backend on `localhost`, so you'll
see the "that didn't send" fallback. That's expected. Test it on the deployed site, or
run `netlify dev` instead of `npm run dev`.

Spam protection is via a honeypot field (`bot-field`). For heavier filtering, enable
reCAPTCHA in the Netlify Forms settings.

---

## Notes on how it's built

- **No animation or icon libraries.** Scroll reveals use `IntersectionObserver`
  (`src/hooks/useReveal.js`); icons are inline SVGs in `src/components/Icon.jsx`.
  Total JS is ~59 kB gzipped.
- **Design tokens** live in the `@theme` block at the top of `src/index.css` —
  change `--color-accent` there and the whole site's accent colour follows.
- **Accessibility:** skip link, visible focus rings, labelled icon buttons, and full
  `prefers-reduced-motion` support (all animation is disabled when the OS asks).
- **SEO:** title, description, canonical, Open Graph and Twitter card tags in
  `index.html`, plus `robots.txt` and `sitemap.xml` in `public/`.
- `netlify.toml` also sets a SPA redirect, security headers and long-lived caching
  for hashed assets.

### Recommended next step

Add a real Open Graph preview image: put a 1200×630 PNG at `public/og-image.png` and
add `<meta property="og:image" content="/og-image.png" />` to `index.html`. Without it,
links shared on LinkedIn/WhatsApp show no thumbnail.
