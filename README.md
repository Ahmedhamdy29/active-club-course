# The Active Club — Course Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Arabic / RTL. No backend.

## 1) Install
```bash
npm install
```
## 2) Run locally
```bash
npm run dev      # http://localhost:3000
```
## 3) Where the assets are
```
public/images/logo.png                 academy logo (cropped)
public/images/brand-cover.jpg          social preview (Open Graph)
public/images/trainer/mansour-hero.png hero image  ← low-res (317×273); replace with a higher-res photo, same filename
public/images/trainer/portrait.jpg     photo from the CV
public/images/trainer/*.jpg            award / lecture photos from the CV
public/images/testimonials/t1..t5.jpg  student review screenshots
```
To add a review: drop the image in `public/images/testimonials/` and add a line to `reviews` in `lib/content.ts`.

## 4) Change the Salla link
`lib/site.ts` → `SALLA_URL`. Every purchase button uses it (`components/CTAButton.tsx`).

## 5) Edit content
All copy lives in `lib/content.ts` (course title, curriculum, trainer, audience, reviews). Social links and phone: `lib/site.ts`.

## 6) Production build
```bash
npm run build
npm run start
```
Deploys as-is to Vercel or any Node host.

## Items to confirm (marked TODO in code)
- Course title (`course.title`) — not stated in the materials; derived from the curriculum slides.
- Order/labels of the 5 curriculum groups — the slides are unnumbered.
- Slide text "أنواع المتدربات" is copied as written; it may be a typo for "التمرينات".
- Phone 0541989060 comes from the review graphics; remove in `lib/site.ts` if not wanted.
- No social links were provided, so none are shown. No favicon yet (the logo is wide) — add `app/icon.png` (square).
