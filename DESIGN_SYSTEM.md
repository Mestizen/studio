# Mestizen Studio — Design System
> **For AI-assisted development:** Always reference this file when building new pages or components for Mestizen Studio. Every decision here is intentional. Follow it strictly to maintain visual and brand consistency.

---

## Brand Identity

**Studio name:** Mestizen Studio  
**Tagline:** Creativity Without Borders  
**Location:** Berlin & Everywhere 🌎  
**Founded:** 2024  
**Origin:** Venezuelan + Italian roots. "Mestizen" comes from "Mestizo" — mixed heritage.  
**Brand voice:** Direct, confident, anti-beige, culturally aware, honest. No corporate jargon. No "passion for innovation." Think: a smart, slightly irreverent creative studio that means business.

---

## File Structure

```
mestizen-studio/
├── index.html              ← Homepage
├── work.html               ← Portfolio / case studies
├── about.html              ← Extended about page
├── contact.html            ← Contact / booking page
├── services.html           ← Services detail page
├── partials/
│   ├── nav.html            ← Shared navigation (injected via fetch)
│   └── footer.html         ← Shared footer (injected via fetch)
├── styles/
│   ├── tokens.css          ← ALL design tokens (colors, type, spacing) — import FIRST
│   ├── components.css      ← Shared UI components — import SECOND
│   └── [page-name].css     ← Page-specific styles only (optional)
└── scripts/
    └── main.js             ← Shared JS: partials loader, GSAP animations, nav
```

**Every new HTML page must:**
1. Import `styles/tokens.css` then `styles/components.css` in `<head>`
2. Include `<div id="nav-partial"></div>` before page content
3. Include `<div id="footer-partial"></div>` after page content
4. Include `<script src="scripts/main.js"></script>` before `</body>`
5. Add page-specific `<style>` block or a separate CSS file for unique styles

---

## Color Palette

| Token            | Value       | Usage                                              |
|------------------|-------------|-----------------------------------------------------|
| `--mint`         | `#00F5A0`   | Primary accent. CTAs, highlights, active states, links hover |
| `--dark`         | `#1a1a2e`   | Primary background. Most sections default to this  |
| `--purple`       | `#7B2FBE`   | Secondary accent. About section, gradients, pills  |
| `--coral`        | `#FF6B6B`   | Tertiary accent. Hero text, work card gradients    |
| `--yellow`       | `#FFD93D`   | Tertiary accent. Decorative, work cards            |
| `--cream`        | `#f5f0e8`   | Light background. About section only               |
| `--white`        | `#ffffff`   | Text on dark backgrounds                           |
| `--near-black`   | `#060612`   | Footer background, deepest dark                    |
| `--surface`      | `#0f0f1e`   | Services section background                        |
| `--work-bg`      | `#0a0a1a`   | Work/portfolio section background                  |

**Semantic color tokens** (use these in components, not raw hex):
- `--color-text-primary` → white
- `--color-text-secondary` → rgba(255,255,255,0.55)
- `--color-text-muted` → rgba(255,255,255,0.35)
- `--color-text-on-light` → var(--dark)
- `--color-border-subtle` → rgba(255,255,255,0.07)
- `--color-surface-card` → rgba(255,255,255,0.04)

**Never** use raw hex values in page files — always reference CSS variables.

---

## Typography

### Fonts
- **Display / Headlines:** `Bricolage Grotesque` — Loaded from Google Fonts. Use for all headings, logo, bold statements, manifesto lines, card titles.
- **Body / UI:** `Manrope` — Use for body copy, buttons, labels, nav links, footer.

```css
font-family: var(--font-display); /* headlines */
font-family: var(--font-body);    /* everything else */
```

### Type Scale
| Token         | Size                          | Usage                            |
|---------------|-------------------------------|----------------------------------|
| `--text-xs`   | `0.72rem`                     | Tags, categories, service-tag    |
| `--text-sm`   | `0.85rem`                     | Nav, footer, labels              |
| `--text-base` | `1rem`                        | Default body                     |
| `--text-lg`   | `1.1rem`                      | Larger body / lead copy          |
| `--text-xl`   | `1.25rem`                     | Sub-headlines                    |
| `--text-2xl`  | `1.4rem`                      | Work titles, card headings       |
| `--text-3xl`  | `clamp(1.8rem, 3.5vw, 2.8rem)`| Manifesto                        |
| `--text-4xl`  | `clamp(2.2rem, 4vw, 3.5rem)`  | Section titles (`section-title`) |
| `--text-5xl`  | `clamp(2.5rem, 5vw, 4.5rem)`  | CTA headline                     |
| `--text-hero` | `clamp(3.5rem, 8vw, 7rem)`    | Hero headline only               |

### Font Weights
- Regular: `400` (`--weight-regular`)
- Medium: `500` (`--weight-medium`)
- Semibold: `600` (`--weight-semibold`)
- Bold: `700` (`--weight-bold`)
- Black: `800` (`--weight-black`) ← used for all display/headline text

---

## Spacing

All spacing uses `--space-N` tokens based on a 4px grid:

```
--space-1: 0.25rem   --space-2: 0.5rem    --space-3: 0.75rem
--space-4: 1rem      --space-6: 1.5rem    --space-8: 2rem
--space-10: 2.5rem   --space-12: 3rem     --space-16: 4rem
--space-20: 5rem     --space-24: 6rem     --space-28: 7rem
--space-32: 8rem
```

**Section padding:**
- `--section-padding: var(--section-padding-y) var(--section-padding-x)` → `7rem 4rem`
- Responsive: tablet → `5rem 2rem`, mobile → `4rem 1.5rem`

---

## Border Radius

| Token          | Value    | Usage                         |
|----------------|----------|-------------------------------|
| `--radius-sm`  | `8px`    | Small elements, inner shapes  |
| `--radius-md`  | `14px`   | Service icons                 |
| `--radius-lg`  | `20px`   | Cards (service, work)         |
| `--radius-xl`  | `24px`   | Large visual blocks (why card)|
| `--radius-pill`| `100px`  | Buttons, tags, pills, badges  |

---

## Components

### Buttons

**Three sizes, all use `border-radius: var(--radius-pill)`:**

```html
<!-- Medium (default) — hero, inline CTAs -->
<button class="btn-primary">CTA Label</button>
<button class="btn-ghost">Secondary Label</button>

<!-- Large — CTA section only -->
<button class="btn-big primary">Primary Large</button>
<a href="#" class="btn-big ghost">Ghost Large</a>

<!-- Small — nav only -->
<button class="nav-cta">Let's Talk →</button>
```

- `.btn-primary`: mint background, dark text, hover: lift + mint glow
- `.btn-ghost`: transparent, white border, hover: mint border + mint text
- Never use inline `style=""` to override button colors — extend with modifier classes

### Section Label
Always used above section titles to indicate the section topic:
```html
<div class="section-label">What we do</div>
```
Renders as: small mint uppercase text with a mint line prefix. Auto-added via CSS `::before`.

### Section Title
```html
<h2 class="section-title">Services that<br>actually move things.</h2>
```
Use `<br>` for intentional line breaks. Use `<span style="color:var(--mint)">word</span>` for mint accent words inline.

### Service Card
```html
<div class="service-card" data-reveal>
  <div class="service-icon">🔥</div>
  <h3>Card Title</h3>
  <p>Description copy here.</p>
  <div class="service-tag">Tag · Tag · Tag</div>
</div>
```

### Work Card
```html
<div class="work-card work-card-N" data-reveal>
  <div class="work-bg"><!-- SVG or image --></div>
  <div class="work-overlay">
    <div class="work-cat">Category</div>
    <div class="work-title">Project Name →</div>
  </div>
</div>
```
Work card gradients map to brand colors:
- Card 1: `var(--purple)` → `var(--coral)`
- Card 2: `var(--mint)` → `var(--surface)`
- Card 3: `var(--yellow)` → `var(--coral)`
- Card 4: `var(--dark)` → `var(--purple)`

### Pills / Tags
```html
<span class="pill pill-purple">🌎 Multicultural</span>
<span class="pill pill-mint">Strategy</span>
```

### Page Hero (inner pages only — not index)
```html
<section class="page-hero">
  <div class="page-hero-eyebrow">Page Category</div>
  <h1 class="page-hero-title">Page Headline<br>Here</h1>
  <p class="page-hero-sub">Supporting description copy.</p>
</section>
```

### CTA Section (reusable at bottom of every page)
```html
<section id="cta" class="section-cta">
  <div class="cta-glow"></div>
  <div class="section-label" style="justify-content:center">Ready?</div>
  <h2 class="cta-headline">Let's build something<br><span>worth talking about.</span></h2>
  <p class="cta-sub">Got a bold idea? Book a free discovery call.<br>No pitch, no pressure — just a real conversation.</p>
  <div class="cta-actions">
    <button class="btn-big primary">📅 Book a Free Call</button>
    <a href="mailto:hello@mestizen.studio" class="btn-big ghost">Send us a message →</a>
  </div>
</section>
```

---

## Animations

All animations use **GSAP + ScrollTrigger** (loaded via CDN).

**Shared behaviors (auto-initialized via `main.js`):**
- `[data-reveal]` — fade up on scroll (opacity 0→1, y 60→0)
- `.blob` — breathing scale animation (infinite)
- `#floatLeaf1`, `#floatLeaf2` — floating y + rotation (infinite)
- `.cursor-glow` — follows mouse
- `.cta-glow` — pulsing scale (infinite)
- Nav scroll — adds `.scrolled` class after 60px

**Page-specific animations** go in a `<script>` block at the bottom of each page.
Use helper functions from `main.js`:
- `initHeroEntrance()` — staggered hero entrance
- `initStaggerReveal(selector, triggerSelector)` — grid stagger on scroll

**Easing standards:**
- Entrances: `power3.out`
- Subtle: `power2.out`
- Organic: `sine.inOut`

---

## Page Templates

### New Page Boilerplate
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mestizen Studio — [Page Name]</title>
  <link rel="stylesheet" href="styles/tokens.css">
  <link rel="stylesheet" href="styles/components.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <style>
    /* Page-specific styles only */
  </style>
</head>
<body>

<div class="cursor-glow" id="cursorGlow"></div>
<div id="nav-partial"></div>

<!-- PAGE HERO -->
<section class="page-hero">
  <div class="page-hero-eyebrow">[Category]</div>
  <h1 class="page-hero-title">[Page Title]</h1>
  <p class="page-hero-sub">[Supporting copy]</p>
</section>

<!-- PAGE CONTENT -->


<!-- CTA -->
<section id="cta" class="section-cta">
  <div class="cta-glow"></div>
  <div class="section-label" style="justify-content:center">Ready?</div>
  <h2 class="cta-headline">Let's build something<br><span>worth talking about.</span></h2>
  <p class="cta-sub">Got a bold idea? Book a free discovery call.<br>No pitch, no pressure — just a real conversation.</p>
  <div class="cta-actions">
    <button class="btn-big primary">📅 Book a Free Call</button>
    <a href="mailto:hello@mestizen.studio" class="btn-big ghost">Send us a message →</a>
  </div>
</section>

<div id="footer-partial"></div>

<script src="scripts/main.js"></script>
<script>
  // Page-specific animations here
</script>
</body>
</html>
```

---

## Section Background Sequence

When building multi-section pages, follow this rhythm to create visual contrast:

1. Hero → `var(--dark)` `#1a1a2e`
2. Light break → `var(--cream)` `#f5f0e8` ← text color flips to `--dark`
3. Dark surface → `var(--surface)` `#0f0f1e`
4. Dark base → `var(--dark)`
5. Deeper dark → `var(--work-bg)` `#0a0a1a`
6. Brand pop → `var(--mint)` ← text flips to `--dark` (manifesto style)
7. CTA → `var(--dark)`
8. Footer → `var(--near-black)` `#060612`

---

## Do's and Don'ts

**DO:**
- Use CSS variables for every color and spacing value
- Add `data-reveal` to any element that should animate in on scroll
- Use `<br>` in headlines for intentional line breaks
- Keep page-specific styles in a `<style>` block or separate CSS file — never in `components.css`
- Use the `.section-label` + `.section-title` combo to open every section
- End every page with the CTA section before the footer

**DON'T:**
- Add inline `style="color: #00F5A0"` — use `style="color: var(--mint)"` instead
- Modify `tokens.css` or `components.css` for one-off page styles
- Use fonts other than Bricolage Grotesque and Manrope
- Use pure black (`#000000`) — use `var(--near-black)` or `var(--dark)`
- Remove the cursor glow or nav partial from any page
- Use `border-radius` values not in the token set

---

## Running Locally

### Option A — VS Code Live Server (recommended)
Install the **Live Server** extension in VS Code, right-click `index.html` → **Open with Live Server**. Partials will load perfectly at `http://127.0.0.1:5500`.

### Option B — Python (any machine)
```bash
# From inside the mestizen-studio/ folder:
python3 -m http.server 8000
# Then open: http://localhost:8000
```

### Option C — Node
```bash
npx serve .
```

> ⚠️ **Do NOT open HTML files directly as `file://` in Chrome.** Chrome blocks `fetch()` on the `file://` protocol, which prevents partials (nav/footer) from loading. Always use a local server.
