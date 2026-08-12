# Development Notes

## Core Principles

- **DRY (Don't Repeat Yourself):** Always strive for code reusability and avoid duplication. Consolidate repetitive logic into shared hooks, components, or utility functions.
- **Type Safety First:** Leverage TypeScript strictly. Use interfaces, discriminated unions, and the `satisfies` operator to ensure data integrity across the stack.
- **Shared Codebase:** Place constants, enums, and types that are used by both the frontend and backend in the `shared/` directory to maintain a single source of truth.
- **State Management with Zustand:** Prefer `zustand` for global state management. Keep stores focused and type-safe.
- **Currency Handling:** Always store and process prices as integers in cents to avoid floating-point errors. Use centralized utility functions for formatting and calculations.
- **Modular API Design:** Organize Express routes into separate files within `api/src/routes/`. Use middleware like `requireAuth` for consistent security across protected endpoints.
- **Component-Driven UI:** Utilize Material UI (`@mui/material`) with a centralized theme (`src/theme.ts`) for consistent styling and interactive feedback.
- **Separation of Concerns:** Keep business logic, configuration, and UI rendering distinct. Use `src/config/` for feature-specific logic and `src/utils/` for pure helper functions.
- **SQL-First Backend:** Interact with the database using raw SQL queries for transparency and performance. Use a centralized `sql` utility with a connection pool and type-safe row interfaces.
- **Soft Deletion Pattern:** Prefer "soft deletes" (e.g., `is_deleted` flag) over hard deletions to preserve data history and simplify recovery.
- **Environment-Aware Logic:** Use explicit `IS_DEV`, `IS_STAGING`, and `IS_PROD` flags to handle environment-specific configurations (e.g., database credentials, Stripe keys, and session security).
- **Fail Fast on Configuration:** Read every secret through `requireEnv` at module scope so a missing variable stops the process at boot. A misconfigured deploy must never reach a customer as a 500, a silently unsent email, or a connection to the wrong database. See "Environment Variables" below.
- **Admin Authentication:** Secure admin routes using a robust session-based `requireAuth` middleware and implement rate-limiting/lockout logic for failed login attempts to prevent brute-force attacks.
- **Consistent UI Feedback:** Use Framer Motion for smooth, consistent animations and interactive feedback (e.g., hover effects, page transitions) across the application.
- **Data Transformation Layer:** Transform complex database results into frontend-friendly formats within the API layer to keep the client-side logic lean and focused on presentation.
- **Colocated Styles with Shared Extraction:** All styles use MUI `sx` props (no CSS modules). Style objects are plain inferred objects (no `SxProps<Theme>` annotation) exported from `.styles.ts` files. Three rules govern placement: (1) styles used by exactly one component live in `ComponentName.styles.ts` alongside that component; (2) styles used by 2+ components in the same folder live in `shared.styles.ts` at that folder level — no component may import from another component's `.styles.ts`, only from its own and `shared.styles.ts`; (3) if a component only uses shared styles and has none of its own, no dedicated `.styles.ts` is created for it.

## Component Structure

The React components are structured in a modular and hierarchical way within `src/components/`.

### Organization Principles

- **Directory-Based Components:** When a component grows beyond a single file or has sub-components used only within it, it's organized as a directory.
  - Example: `src/components/About/` contains `About.tsx` (the main component) along with `AboutHeroSection.tsx`, `AboutUsSection.tsx`, and `PartnersSection.tsx`.
- **Main Component File:** The primary entry point for a directory-based component usually has the same name as the directory (e.g., `About.tsx` inside `src/components/About/`).
- **Sub-Components:** Small, internal sub-components that are not needed elsewhere are kept in the same directory as the main component.
- **Common Components:** Shared components used across multiple features are located in `src/components/common/`. These also follow the directory-based structure when complex (e.g., `src/components/common/BookingPage/`).
- **Page-Component Separation:** Files in `src/pages/` are thin wrappers responsible for routing, SEO metadata, and rendering a single top-level component from `src/components/`.

## API Endpoints

The backend is an Express app under `api/src/`. Follow these conventions when adding or modifying endpoints.

### File & Route Organization

This layout is required, not a suggestion. Follow it for every new endpoint.

- **One route handler per file.** Each endpoint gets its own file exporting exactly one handler. Never put two handlers in one file — a `GET` and a `PUT` on the same path are two files, not one.
- **Directory structure mirrors the URL.** `admin/blockedDay/add.ts` serves `POST /api/admin/blocked-days`. Directories are camelCase; the URL segments they map to are kebab-case.
- **The filename is the HTTP verb** when a path has one obvious action: `gallery/picnic/get.ts`, `inquiry/glamping/post.ts`, `admin/appointment/delete.ts`. When a path family has several actions, the filename becomes the action instead: `admin/coupon/create.ts` + `admin/coupon/delete.ts`, or `admin/gallery/upload.ts` + `admin/gallery/delete.ts` + `admin/gallery/updateCategory.ts`.
- **Singular vs plural separates item from collection**, as sibling directories. `admin/coupons/get.ts` serves the list (`GET /api/admin/coupons`); `admin/coupon/create.ts` and `admin/coupon/delete.ts` serve the single-resource writes. Same split for `appointments/` vs `appointment/` and `inquiries/` vs `inquiry/`.
- **The export name is the file path flattened to camelCase.** `admin/coupon/create.ts` exports `adminCouponCreate`; `gallery/picnic/get.ts` exports `galleryPicnicGet`. Always a named `export const` — no default exports. A handler's name should tell you its file and its URL without looking either up.
- **Helpers sit beside the routes they serve, named for their feature:** `<feature>.utils.ts`, `<feature>.types.ts`, `<feature>.middleware.ts` — e.g. `booking/booking.utils.ts`, `admin/admin.middleware.ts`. Split further when one file gets broad: `checkout/success/` holds a single route (`get.ts`) beside `checkoutSuccess.database.ts`, `checkoutSuccess.email.ts`, `checkoutSuccess.types.ts`, and `checkoutSuccess.utils.ts`. Helper files may export as many symbols as they need — the one-per-file rule applies to route handlers only.
- **Central registration in `server.ts`:** Every route is wired up in `api/src/server.ts` (imported at the top, registered with `app.<method>(path, ...middleware, handler)`). Keep the registrations grouped with the existing comment banners (`// API endpoints`, `// Admin endpoints`).
- **Protected routes use `requireAuth`:** Admin endpoints take the session-based `requireAuth` middleware before the handler (e.g. `app.get("/api/admin/coupons", requireAuth, adminCouponsGet)`).
- **Path naming:** All routes are prefixed with `/api`. Use `/api/<feature>/<action>` and `:id` params (e.g. `/api/inquiry/glamping`, `/api/admin/appointment/:id`). The HTTP verb conveys intent: `GET` to read, `POST` to create, `PATCH`/`PUT` to update, `DELETE` to remove.

A representative slice:

```
api/src/routes/
  admin/
    admin.middleware.ts          requireAuth and friends
    admin.types.ts
    admin.utils.ts
    appointment/delete.ts        DELETE /api/admin/appointment/:id
    appointment/update.ts        PATCH  /api/admin/appointment
    appointments/get.ts          GET    /api/admin/appointments
    coupon/create.ts             POST   /api/admin/coupon
    coupon/delete.ts             DELETE /api/admin/coupon
    coupons/get.ts               GET    /api/admin/coupons
    blockedDay/add.ts            POST   /api/admin/blocked-days
  booking/
    booking.types.ts
    booking.utils.ts
    applyCoupon.ts               POST   /api/booking/apply-coupon
    availableTimes/date.ts       GET    /api/booking/available-times/date
    availableTimes/month.ts      GET    /api/booking/available-times/month
  gallery/
    picnic/get.ts                GET    /api/gallery/picnic
    slumberParty/get.ts          GET    /api/gallery/slumber-party
  inquiry/
    glamping/post.ts             POST   /api/inquiry/glamping
    potion-party/post.ts         POST   /api/inquiry/potion-party
```

### Handler Shape

- **Signature:** `export const fooBar = async (req: Request, res: Response): Promise<void> => { ... }` using `Request`/`Response` from `express`.
- **Wrap the whole body in `try/catch`.** On error, `console.error` the exception and respond with a `500` JSON error. The standard message-extraction idiom is:
  ```ts
  const message = e instanceof Error ? e.message : "Failed to <do thing>";
  res.status(500).json({ error: message });
  return;
  ```
- **Validate inputs up front** and return `400` with `{ error: "<field> is required" }` for missing/invalid params or body fields.
- **Status codes:** `200` success, `201` resource created, `400` bad request, `401` unauthenticated, `403` forbidden, `404` not found, `500` server error.

## How the API is Served

The API is **not** exposed on a public port. Apache terminates TLS for the site
and proxies `/api/` through to the Express server over the loopback interface,
so every browser call is same-origin:

```
https://<domain>/api/contact  ->  Apache  ->  127.0.0.1:<prodPort>/contact
```

That is why `api/src/server.ts` binds `IS_PROD ? "127.0.0.1" : "0.0.0.0"`,
speaks plain HTTP, and reads no certificate: nothing outside the box can reach
the port. Only Apache reads `~/cert/*`. An absolute `https://<domain>:<port>`
— what this used to be — is unreachable from any network that allows only
80/443, such as corporate wifi, guest wifi, and some mobile carriers, and it
fails there silently.

The matching block lives in `~/sites-enabled/<domain>.com.conf` inside its
`:443` VirtualHost. `ras.sh <site> <api-port>` generates it for a new site:

```apache
ProxyPreserveHost On
RequestHeader set X-Forwarded-Proto https
ProxyPass        /api/ http://127.0.0.1:<prodPort>/
ProxyPassReverse /api/ http://127.0.0.1:<prodPort>/
```

**The public URL is always `/api/...`** — that is what the route tables above
describe. How Express *mounts* those routes is a separate choice, and the vhost
must mirror it:

- **Strip** (the default, and what the template does): Express mounts bare
  paths (`app.post("/contact", …)`), and the trailing slashes above strip the
  prefix, so a request for `/api/contact` arrives as `/contact`.
- **Pass through**: Express mounts under `/api` (`app.post("/api/contact", …)`)
  and the upstream must end in `/api/` as well —
  `http://127.0.0.1:<prodPort>/api/`.

Mismatch either way and every route 404s.

Three consequences to know before adding anything:

- **`API_URL` is relative in production** — `"/api"`, or `""` in a repo whose
  routes are already mounted under `/api`. Anything building a URL that a
  *third party* will fetch (a Stripe `success_url`, a link in an outgoing
  email) must use **`API_URL_ABSOLUTE`** instead. Stripe rejects a relative
  `success_url` outright with `url_invalid`.
- **CORS applies only off production.** Same-origin requests never trigger it,
  so the middleware is wrapped in `if (!IS_PROD)`. Dev, staging, and the e2e
  suite run the frontend and the API on different ports and still need it.
- **`express-session` with a `secure` cookie needs `app.set("trust proxy", 1)`.**
  The request reaches Express over plain HTTP, so `req.secure` is false and
  express-session silently refuses to set the cookie — logins fail with nothing
  in any log. The vhost sets `X-Forwarded-Proto` for exactly this.

The API's stdout and stderr land in `~/logs/<PRODUCTION_WEBSITE>.log`, appended
across deploys and stamped with the local time; each restart begins at a
`===== deploy … =====` marker. It appends rather than truncates because
redeploying is the first thing you reach for while investigating an error, and
truncating destroyed the trace you were about to read.

## Environment Variables

Secrets live in `.env` at the repository root (gitignored). Only secrets shared
across several repos stay in `/home/ecarlson10/pw/` — currently the MariaDB
password (`pw/0`) and the shared mailbox passwords — because rotating one of
those should be a single edit rather than one per repo. Anything used by this
repo alone belongs in `.env` with a real name.

Three pieces enforce this, and all three ship with the template:

1. **`api/src/utils/requireEnv.ts`** — reads a variable or throws. Call it at
   **module scope**, never inside a request handler:

   ```ts
   import { requireEnv } from "../utils/requireEnv";

   const smtpPassword = requireEnv("SMTP_PASSWORD");
   ```

   `server.ts` imports the whole route/util graph at startup, so a module-scope
   call turns a missing variable into an immediate non-zero exit before the port
   is bound. Called lazily, the same misconfiguration would instead surface as a
   500 on the first customer request that happened to touch it.

   When a secret is only needed in some modes, resolve it to `null` in the
   others and branch on that — it keeps the boot check *and* lets TypeScript
   narrow the value without a non-null assertion:

   ```ts
   const gmailPassword = IS_ETHEREAL ? null : requireEnv("GMAIL_PASSWORD");
   ```

   This file is listed in `api/.unimportedrc.json` under `ignoreUnimported`
   because a fresh project has no secrets yet. Remove that entry once something
   imports it.

2. **`api/src/env.ts`** — the first import in `server.ts`. Loads `.env` and
   rejects an unrecognized `MY_ENV`. This matters more than it looks: an unset
   `MY_ENV` makes `IS_DEV` true, which would silently select the dev database
   with dev credentials, sign sessions with a committed literal, and divert mail
   to a sandbox while still reporting success. `next.config.js` carries the same
   check for builds, since `MY_ENV` is inlined into the static export.

3. **`.env.example`** — the manifest `scripts/validate-env.mjs` checks before
   `ui`, `e2e`, `deploy-ui`, `deploy-api`, and `deploy-staging`. A `# @marker`
   comment scopes every variable below it until the next marker, so related
   variables can share one:

   ```
   # @production-only
   SMTP_PASSWORD=
   STRIPE_LIVE_SECRET_KEY=
   ```

   The leading `#` is required. Without it the line is silently ignored and the
   scope falls back to `@all`, which makes those variables required in *every*
   mode — production still works, but `npm run ui` starts demanding live
   secrets.

   Pick the narrowest accurate marker. The two `non-` scopes mirror the guards
   the code uses, which is what lets staging be expressed at all:
   `@non-development` matches `!IS_DEV` (a real secret rather than a dev
   literal — session secrets, admin passwords, SMTP), and `@non-production`
   matches `!IS_PROD` (a sandbox key rather than the live one). A live API key
   is `@production-only`; its test counterpart is `@non-production`.

`deploy-api` validates **before** `kill-prod`, so a deploy that cannot start
never takes the running API down first, and then blocks until the port is
actually listening rather than reporting success for a daemonized process that
died on startup.

## E2E Testing

This project uses [Playwright](https://playwright.dev/) for end-to-end tests. Tests live in `e2e/`, helpers in `e2e/helpers/`, and the config is `playwright.config.ts`.

**When adding a new feature, add a few e2e tests for it** in a new or existing spec file under `e2e/`. Keep the total number of e2e tests at or under 100. If adding new tests would push the count over 100, remove less important tests first (e.g. redundant coverage, narrow edge cases already covered by other tests, or tests for deprecated flows).

Run tests with:

```bash
npm run e2e
```

The test suite targets `http://localhost:5001`, which should be running locally whenever you interact with this repo.

**e2e does not run on the Raspberry Pi.** That Pi is the production web server,
and a full Playwright run competes with the live sites for CPU and memory. The
`fix` function in `scripts.sh` detects it by reading `/proc/device-tree/model`
and skips the suite, printing a notice instead. Run e2e on a dev machine, or
override deliberately with:

```bash
FORCE_E2E=1 npm run fix
```

Calling `npm run e2e` directly is never skipped — the guard lives only in `fix`.
So a change made on the Pi has *not* been e2e-tested unless you say so
explicitly; verify it somewhere else before treating it as covered.

## Code Formatting

After making any code modifications, run:

```bash
npm run fix
```

This ensures all code is properly formatted and linted according to the project's standards. It runs prettier, `next lint --fix`, `tsc`, `unimported`, the API lint/test/build, and then the e2e suite — except on the Pi, where e2e is skipped (see "E2E Testing" above).

## Code Reviews

When reviewing code, hunting for bugs, or looking for refactoring opportunities,
output the findings as a list of issues categorized by severity.
