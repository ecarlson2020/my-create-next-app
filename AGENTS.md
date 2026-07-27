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
   `ui`, `e2e`, `deploy-ui`, and `deploy-api`. A `# @marker` comment scopes every
   variable below it until the next marker, so related variables can share one:

   ```
   # @production-only
   SMTP_PASSWORD=
   STRIPE_LIVE_SECRET_KEY=
   ```

   The leading `#` is required. Without it the line is silently ignored and the
   scope falls back to `@all`, which makes those variables required in *every*
   mode — production still works, but `npm run ui` starts demanding live
   secrets. Pick the narrowest accurate marker: `@production-only` for a secret
   prod needs and local work does not.

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

## Code Formatting

After making any code modifications, run:

```bash
npm run fix
```

This ensures all code is properly formatted and linted according to the project's standards.
