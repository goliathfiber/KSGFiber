# KSG Fiber Website Migration Report

## Architecture

The merged website retains ZIP File 1's Vite, React 18, TypeScript, React Router, Tailwind CSS, React Helmet, and Netlify deployment model. ZIP File 2's dark navy/orange design, rural fiber imagery, technician artwork, visual depth, fixed navigation treatment, cards, and interaction styling have been applied to that working application rather than replacing it with the incomplete PHP prototype.

## Migration inventory

| ZIP File 1 capability | ZIP File 2 counterpart | Merged location | Status |
| --- | --- | --- | --- |
| Homepage and all calls to action | Dark rural-America landing page | `/` | Integrated; real modal actions replace demo buttons |
| Residential service details, plan, FAQs | Residential service card | `/services/residential` | Preserved and restyled |
| Business service details, plan, FAQs | Business service card | `/services/business` | Preserved and restyled |
| About/company story and team | About/community sections | `/about` | Preserved and restyled |
| Fiber education | Why Fiber concept cards | `/resources/what-is-fiber` | Preserved and restyled |
| Streaming guide | Cord-cutting concept card | `/resources/streaming-guide` | Preserved and restyled |
| Smart home guide | Smart Home & IoT concept card | `/resources/smart-home` | Preserved and restyled |
| Remote work guide | No dedicated design page | `/resources/remote-work` | Newly styled in ZIP File 2's system |
| Cybersecurity guide | Security concept card | `/resources/cybersecurity` | Preserved and restyled |
| Wisconsin location page | Rural regional imagery | `/locations/wisconsin` | Preserved and restyled |
| Minnesota location page | No dedicated design page | `/locations/minnesota` | Newly styled in ZIP File 2's system |
| Iowa location page | Rural regional imagery | `/locations/iowa` | Preserved and restyled |
| Illinois location page | No dedicated design page | `/locations/illinois` | Newly styled in ZIP File 2's system |
| Michigan location page | No dedicated design page | `/locations/michigan` | Newly styled in ZIP File 2's system |
| Availability/contact modal | ZIP File 2 ZIP box and contact form | Shared modal, every CTA | Real ZIP File 1 submission workflow retained |
| My Account portal | ZIP File 2 demo portal URL | Header and footer | ZIP File 1 portal retained and upgraded to HTTPS |
| Mobile menu and dropdown navigation | Desktop-only prototype navigation | Global header | Working responsive navigation retained and restyled |
| SEO, sitemap, robots, JSON-LD | None | Every existing route and `public/` | Preserved |
| Unknown route handling | None | Catch-all route | Accessible 404 page added |

## Conflicts and decisions

- ZIP File 2's three demo prices conflict with ZIP File 1's authoritative KSG Gig plan. The merged site retains the ZIP File 1 offer: 1 Gbps symmetrical service for $89.95/month.
- ZIP File 2's account URL was a design-host demo. The merged site retains ZIP File 1's customer portal URL.
- ZIP File 2 references missing PHP pages, a missing form processor, a missing coverage-map implementation, and an incomplete PDO connection. Those placeholders were not substituted for working ZIP File 1 behavior.
- ZIP File 2 contained a plaintext database password. It was not copied into the merged project. Rotate that exposed credential before reusing the original PHP prototype.
- ZIP File 1 is the source of truth for company contact details and location wording. ZIP File 2 contributes appearance and imagery only where content conflicts.

## Files added

- `.env.example`
- `MIGRATION_REPORT.md`
- `src/pages/NotFoundPage.tsx`
- `public/design/*` (24 supplied design assets)

## Files modified

- `src/App.tsx`
- `src/index.css`
- `src/components/ContactModal.tsx`
- `src/components/Footer.tsx`
- `src/components/Header.tsx`
- `src/components/Logo.tsx`
- `src/pages/HomePage.tsx`
- Existing About, service, resource, and location page components (design-system restyle only)

## Files removed

None.

## Environment and integrations

No client-side environment variables are required. Contact and availability requests use the existing Netlify Forms workflow and require Netlify Forms to be enabled for the deployed site. No database, authentication provider, payment service, upload service, mapping API, analytics key, email API, or SMS API is present in ZIP File 1.

## Local installation

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. For a production build:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Deployment

The existing `netlify.toml`, SPA redirect, hidden Netlify form declaration, `robots.txt`, and sitemap are retained. Deploy the repository root to Netlify using the existing build configuration.

## Verification limits

- A live contact submission cannot be verified locally; Netlify must process it on a deployed site.
- The external customer portal can be link-checked but requires a separate account and is outside this codebase.
- The ZIP File 2 database lookup could not be verified because its connection code is incomplete and its credential was embedded unsafely. It is not part of ZIP File 1's authoritative behavior.
- Third-party Pexels images require network access at runtime; the principal new-design artwork is bundled locally.

## Test results

| Check | Result |
| --- | --- |
| Clean dependency installation | Passed |
| TypeScript type-check | Passed |
| ESLint | Passed with 3 pre-existing Fast Refresh warnings and no errors |
| Production build | Passed with Vite 8.2.1; 1,492 modules transformed |
| All 14 application routes | Returned successfully from the production preview server |
| Unknown-route fallback | Returned the application shell and rendered by the catch-all 404 route |
| Logo, hero, technician, and Netlify form assets | Returned successfully |

Vite and its React plugin were updated to current compatible releases to resolve a Node 24/Rollup build crash in the source archive. The application architecture and API contracts were not changed.

## Recommended follow-up work

- Rotate the database password exposed in ZIP File 2, even if the PHP prototype is retired.
- Add dedicated Privacy Policy and Terms of Service content; ZIP File 1 currently routes both labels to About.
- Add automated browser tests for navigation and form validation after selecting the final production host.
- Replace remaining third-party editorial images with owned KSG Fiber photography when available.
