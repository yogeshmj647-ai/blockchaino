# Rootline — Organic Traceability Site

A static, no-build website for an organic-food traceability network: problem framing, how-it-works, an interactive "trace a product" QR demo, role-based data views, a growers section, and a join form.

## Files

```
index.html    — page structure and content
styles.css    — all styling (no framework, no build step)
script.js     — trace demo + tabs + form behavior
```

Everything is plain HTML/CSS/JS, so it runs as-is with no `npm install` or build process.

## Put it on GitHub

1. Create a new repository on GitHub (e.g. `rootline-site`).
2. From this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/rootline-site.git
   git push -u origin main
   ```

## Turn on GitHub Pages (free hosting)

1. In your repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. GitHub gives you a live URL, typically:
   ```
   https://YOUR-USERNAME.github.io/rootline-site/
   ```
   It can take a minute or two to go live after the first push.

## Customizing

- **Batch/product data**: edit the `batches` array at the top of `script.js` — each entry is one traceable product with its farm-to-shelf steps.
- **Colors**: all defined as CSS variables at the top of `styles.css` (`:root { --forest, --sienna, --soil, --gold, ... }`).
- **Copy**: all text lives directly in `index.html`, organized by `<section>` (hero, problem, how-it-works, trace, views, members, join).
- **Join form**: currently front-end only (shows a confirmation message on submit). To actually collect submissions, connect it to a form service (e.g. Formspree, Getform) by setting the form's `action` attribute, or wire it to your own backend.

## Notes

- No external JS dependencies — only Google Fonts (Fraunces, Work Sans) are loaded from a CDN.
- Fully responsive down to mobile widths.
