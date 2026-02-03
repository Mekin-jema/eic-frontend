# EIC Frontend

Public-facing site for the Invest in Ethiopia event. Provides the marketing experience, event highlights, and the full attendee registration flow.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Hook Form + Zod (validation)

## Functional Overview (What This App Does)

### 1) Landing Page Experience

- Hero section with video and motion effects.
- Theme section, banners, and content blocks.
- Image gallery slider and countdown timer.
- Calls-to-action that route users into registration.

### 2) Attendee Registration (3-Step Form)

The registration flow collects attendee information in three steps:

**Step 1: Personal Details**
- First name, last name, email, phone number.

**Step 2: Professional Background**
- Organization, job title, country, registrant category.
- Sector interest for investors.
- Company details + business license upload if company exists.

**Step 3: Attendance & Preferences**
- Attendance day selection.
- Visa assistance + passport copy upload if required.
- Special requirements.
- Communication preferences (email/phone/both).

On successful submission, the user is redirected to a success page.

### 3) Success Experience

- Confirmation screen and navigation back to the home page.

## API Integration

The form submits a `multipart/form-data` payload to the backend endpoint:

- `POST /api/attendee/attendee-registration`

The frontend uses RTK Query hooks from [redux/features/attendeeApiSlice.ts](redux/features/attendeeApiSlice.ts).

## Key Pages

- [app/page.tsx](app/page.tsx) — landing page with hero, banners, gallery, countdown
- [app/register/page.tsx](app/register/page.tsx) — multi-step registration form
- [app/register/success/page.tsx](app/register/success/page.tsx) — confirmation screen

## Key Components

- [components/header.tsx](components/header.tsx) — top navigation
- [components/footer.tsx](components/footer.tsx) — footer links and socials
- [components/landing](components/landing) — landing page sections (hero, banners, gallery, countdown)
- [components/registration](components/registration) — registration steps and UI

## Local Development

From the frontend folder:

```bash
pnpm install
pnpm dev
```

The app runs on port `3001` per the `dev` script.

## Scripts

- `pnpm dev` — start development server (port 3001)
- `pnpm build` — build production bundle
- `pnpm start` — run production server
- `pnpm lint` — run ESLint
