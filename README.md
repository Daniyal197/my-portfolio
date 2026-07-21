# Daniyal — Portfolio
(i have built it from scrath) 
A responsive portfolio site built with React + Vite + Tailwind CSS, styled around
a terminal / security-log aesthetic to match a cybersecurity focus.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with `npm run preview`.

## Deploy (free options)

**Vercel** (easiest)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Leave build settings as default. Deploy.

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add to `package.json`: `"homepage": "https://Daniyal197.github.io/<repo-name>"`
   and a script: `"deploy": "vite build && gh-pages -d dist"`
3. In `vite.config.js`, set `base: '/<repo-name>/'`
4. `npm run deploy`

## Structure

```
src/
  components/
    Nav.jsx        fixed terminal-prompt navbar
    Hero.jsx        typing boot-sequence intro
    About.jsx       bio + neofetch-style info panel
    Skills.jsx      grouped skill tags
    Projects.jsx     project "log entries"
    Experience.jsx   timeline
    Contact.jsx      contact channels
    Footer.jsx
  index.css        theme tokens + terminal effects
  App.jsx
```

All colors and fonts are defined once in `src/index.css` under `@theme` —
change them there to re-theme the whole site.
