# Jacoutot on Law — Project Reference

## What This Is
Personal website for **Bryan F. Jacoutot**, litigation attorney at Clark Hill PLC in Atlanta, Georgia. Focuses on election law, cryptocurrency/Bitcoin law, and general civil litigation.

## Tech Stack
- **Pure static HTML/CSS/JS** — no framework, no build step, no Node
- Converted from a WordPress theme (PHP files still present in the directory but ignored — not deployed)
- Local dev server: `python3 serve.py` → http://localhost:3000

## Hosting & Deployment
- **Hosting:** Vercel (free tier)
- **GitHub repo:** https://github.com/bjacoutot/jacoutot-law (user: bjacoutot)
- **Custom domain:** jacoutotonlaw.com (registered on GoDaddy)
- **DNS:** A record `@` → `76.76.21.21`, CNAME `www` → Vercel DNS
- **Deploy process:** Push to `main` branch → Vercel auto-deploys. No CLI needed.
- **gh CLI** is installed at `/tmp/gh_2.65.0_macOS_arm64/bin/gh`

## Site Structure
```
/                          → index.html (home)
/about/                    → about/index.html
/practice-areas/           → practice-areas/index.html
/legal-blog/               → legal-blog/index.html
/beyond-law/               → beyond-law/index.html
/bitcoin/                  → bitcoin/index.html
/contact/                  → contact/index.html
/blog/bitcoin-compensation-compliance/
/blog/basics-of-bitcoin-mining/
/blog/lummis-amendment-bitcoin/
/blog/adam-smith-bitcoin-wealth-of-worlds/
/publications/georgia-election-law-mercer-law-review.pdf
/images/headshot.png
/images/hero-placeholder.jpg
/style.css
/js/theme.js
```

## Key Design Decisions
- **Colors:** Navy (`#12233a`), Gold (`#b8922a`), Cream (`#faf8f4`), Charcoal (`#1a1a2e`)
- **Fonts:** Cormorant Garamond (display), Libre Baskerville (body), Montserrat (sans/labels) — loaded from Google Fonts
- **CSS vars** defined in `:root` in `style.css` — use these, never hardcode colors
- All pages share the same nav/footer HTML (copy from an existing page when adding new ones)
- `vercel.json` sets `cleanUrls: true` and `trailingSlash: false`

## Content Rules
- **Only publish content Bryan actually wrote** — no placeholder or AI-generated blog posts
- **No COVID-related content**
- Legal disclaimer in footer on every page: "Attorney advertising. The content of this website is provided for informational purposes only..."
- Contact email: bjacoutot@clarkhill.com

## Contact Form
- Currently using a **Web3Forms** placeholder (`YOUR_FORM_ID` in contact/index.html)
- Needs a real Web3Forms access key — user goes to web3forms.com, enters email, gets key instantly
- Target emails: bjacoutot@clarkhill.com and bjacoutot@gmail.com

## Featured Publication
- **Mercer Law Review, Vol. 77, No. 1, 2025**
- "State Constitutional Law: Developments in Georgia Election Law"
- Co-authors: Bryan Tyson, Bryan F. Jacoutot, Diane LaRoss
- Bryan's contribution: Georgia constitutional standing section
- PDF hosted at `/publications/georgia-election-law-mercer-law-review.pdf`
- Featured on: home page, about page, legal blog

## Blog Articles (Real, Published by Bryan)
| Title | Category | Date | URL |
|-------|----------|------|-----|
| Bitcoin Compensation Compliance: Navigating Murky Waters | Legal Blog | Oct 2019 | /blog/bitcoin-compensation-compliance/ |
| The Lummis Amendment May Not Be Enough | Legal Blog | Aug 2021 | /blog/lummis-amendment-bitcoin/ |
| The Basics of Bitcoin Mining | Beyond Law | Mar 2022 | /blog/basics-of-bitcoin-mining/ |
| On Adam Smith, Bitcoin, and the Wealth of Worlds | Beyond Law | Nov 2019 | /blog/adam-smith-bitcoin-wealth-of-worlds/ |

## Adding New Content
1. Create `new-page/index.html` using an existing page as template
2. Copy the nav/footer verbatim, update `current-menu-item` class on the right nav link
3. `git add` → `git commit` → `git push` — Vercel deploys automatically
4. For blog posts: create under `/blog/slug/index.html`, add to legal-blog or beyond-law index, and update home page writing strip if warranted

## Bryan's Background (for writing copy)
- Atlanta, Georgia
- Clark Hill PLC (national firm, 600+ attorneys, 20+ offices)
- Admitted: Georgia; USDC N.D., M.D. Ga.; Eleventh Circuit; U.S. Supreme Court
- Education: B.A. in History, Auburn University (2011); J.D., Georgia State University College of Law (2014)
- Election law: redistricting, campaign finance, ballot access, constitutional litigation
- Bitcoin/crypto: studied since early years, wrote for Bitcoin Magazine, Howey Test analysis
- General litigation: commercial disputes, constitutional claims, appellate practice
