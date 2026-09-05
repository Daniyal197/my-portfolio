# Daniyal — Portfolio
(i have built it from scrath) 
A responsive portfolio site built with React + Vite + Tailwind CSS, styled around
a terminal / security-log aesthetic to match a cybersecurity focus.

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
