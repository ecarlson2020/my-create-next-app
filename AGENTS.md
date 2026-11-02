# Development Notes

## Stack

- **Frontend:** Next.js (pages router) in `src/`, TypeScript strict. MUI with a
  theme in `src/theme.ts` where the repo uses it; zustand for global state.
- **API:** Express in `api/src/` (`server.ts` entry, `env.ts` first import).
  MariaDB through raw SQL: `sql<RowType>(query, params)` from
  `api/src/utils/coreUtils.ts`, with a `RowDataPacket` interface per query.
- **Shared:** `shared/` (`@shared/*`) holds constants, types and utils used by
  both sides, including `shared/constants/sharedConstants.ts`, which derives
  `IS_DEV`/`IS_PROD`, `PORT`, `API_URL` and `API_URL_ABSOLUTE` from `MY_ENV`.
- **Aliases:** `@/*` → `src/*`, `@shared/*` → `shared/*`.

## Principles

- **DRY.** Pull repeated logic into a hook, component or util.
- **Type safety.** Interfaces, discriminated unions, `satisfies`.
- **Prices are integer cents**, formatted by one shared util.
- **Soft delete** (`is_deleted`) rather than `DELETE FROM`.
- **The API shapes data for the UI** so components only render.
- **Fail fast on config.** Never fall back to a default secret or mode (see
  Environment).

## Directory Structure

Nested, never flat. A directory of dozens of loose files is a bug: split it.

### `src/components/` mirrors the render tree

- A component lives in the directory of the component that renders it:
  `Home` → `MainContent` → `Cart` → `CartRow` is
  `Home/MainContent/Cart/CartRow.tsx`.
- A component that renders others or owns a hook or helper is a directory,
  `Name/Name.tsx`. A leaf (the component plus at most its styles) is a file
  beside its parent.
- Shared code lives in the nearest directory holding all its users. Several
  shared components go in that directory's `common/`, several hooks in
  `hooks/`. `src/components/common/` is the same rule for the whole app.
- Pages in `src/pages/` are thin: routing, SEO, and one top-level component.
- Imports inside a subtree are relative. Use `@/` for anything three or more
  levels up.

```
src/components/
  common/                  used across features
  Home/
    Home.tsx
    Home.styles.ts
    shared.styles.ts       used by 2+ of Home's components
    TopMenu/
      TopMenu.tsx
      SearchBar.tsx        leaf
      AccountDrawer/
    MainContent/
      Cart/
        Cart.tsx
        CartRow.tsx
        useCartTotals.ts   Cart's and CartRow's
```

### Styles

MUI repos use `sx` objects exported from `Name.styles.ts`, as plain inferred
objects with no `SxProps<Theme>`. Repos without MUI use CSS Modules
(`Name.module.css`). Either way:

1. Styles used by exactly one component go in its own file beside it.
2. Styles used by 2+ components go in `shared.styles.ts` / `shared.module.css`
   at the nearest folder holding them all. Never import another component's
   styles file.
3. A component with no styles of its own gets no file.

### Everything else

`src/hooks/`, `src/utils/`, `src/config/` and `shared/` group by feature
(`src/hooks/queries/cart/`). Two or more `<family>.<part>.ts` files get a
`<family>/` directory, and any new member joins it.

## API Endpoints

New routes follow this layout. Some older repos still have flat
`routes/<feature>.ts` files: move a file into the layout when you change it.

- **One handler per file**, a named `export const`. A `GET` and a `PUT` on the
  same path are two files.
- **Path mirrors URL.** Directories are camelCase, URL segments kebab-case.
  Name the file for its HTTP verb (`get.ts`, `post.ts`), or for its action
  when one path has several (`create.ts`, `delete.ts`).
- **Singular directories hold one item, plural ones the collection:**
  `coupon/create.ts` vs `coupons/get.ts`.
- **The export name is the path in camelCase:** `admin/coupon/create.ts` →
  `adminCouponCreate`.
- **Helpers sit beside their routes** as `<feature>.utils.ts`, `.types.ts`,
  `.database.ts`, `.middleware.ts`. They can export as many things as they
  need. A family of helpers gets its own directory. Helpers every feature
  uses go in `api/src/utils/`.
- **Register every route in `server.ts`**, under its comment banner, as
  `app.<method>(path, ...middleware, handler)`. `errorHandler` is registered
  after all of them. Protected routes take `requireAuth` before the handler.

```
api/src/routes/
  admin/
    admin.middleware.ts      requireAuth
    coupon/create.ts         POST   /api/admin/coupon
    coupon/delete.ts         DELETE /api/admin/coupon
    coupons/get.ts           GET    /api/admin/coupons
  booking/
    booking.utils.ts
    availableTimes/month.ts  GET    /api/booking/available-times/month
  checkout/success/
    get.ts                   GET    /api/checkout/success
    checkoutSuccess.email.ts
```

**Handler shape:** `async (req: Request, res: Response): Promise<void>`.
Validate inputs first: `400 { error: "<field> is required" }`. Wrap the body
in `try/catch`, and on error `console.error` it and send
`500 { error: e instanceof Error ? e.message : "Failed to <x>" }`.

## How the API Is Served

Apache terminates TLS and proxies `https://<domain>/api/*` to
`127.0.0.1:<prodPort>/*`, stripping the `/api` prefix. Staging is proxied the
same way. So:

- Register **bare** paths (`app.get("/coupons", …)`). The public URL is
  `/api/coupons`.
- The server binds `IS_DEV ? "0.0.0.0" : "127.0.0.1"`, speaks plain HTTP and
  reads no certs. CORS is enabled only `if (IS_DEV)`.
- `API_URL` is `"/api"` outside dev. Anything a third party fetches (a Stripe
  `success_url`, an email link) must use `API_URL_ABSOLUTE`.
- A `secure` session cookie needs `app.set("trust proxy", 1)`. Without it,
  logins fail silently.
- The vhost is `~/sites-enabled/<domain>.com.conf`, generated by `ras.sh`.
  Prod logs append to `~/logs/<PRODUCTION_WEBSITE>.log`, and each deploy starts
  at a `===== deploy … =====` marker.

## Environment

- Repo-only secrets live in a gitignored `.env` at the root. Only secrets
  shared across repos stay in `~/pw/`: the MariaDB password (`pw/0`) and the
  shared mailbox passwords.
- Read secrets with `requireEnv("NAME")` (`api/src/utils/requireEnv.ts`;
  copy it from `my-create-next-app` if missing) at **module scope**, never
  inside a handler, so a missing value crashes at boot. If a secret is needed
  in only some modes, use `IS_PROD ? requireEnv("X") : null`. A fresh
  template lists `requireEnv.ts` in `knip.json` `ignoreFiles`: remove it once
  something imports the file.
- `api/src/env.ts` loads `.env` and refuses to start on an unknown `MY_ENV`,
  because an unset `MY_ENV` silently means dev. `next.config.js` makes the
  same check for builds.
- `.env.example` is the list `scripts/validate-env.mjs` checks before `ui`,
  `e2e` and deploys. A `# @marker` line scopes every variable below it:
  `@all`, `@development-only`, `@non-production`, `@non-development`,
  `@production-only`, `@test-only` or `@optional`. Pick the narrowest true
  one. The leading `#` is required.

## Commands

- `npm run fix` after any code change runs prettier, lint, `tsc`, `knip`, the
  API lint/test/build, then e2e. Add `-- --skip-e2e` for a quick pass.
- `knip` covers both workspaces (`.` and `api`). If a dependency or script is
  used only from `scripts.sh`, list it in that workspace's
  `ignoreDependencies` or `entry`.
- `npm run e2e` runs Playwright (`e2e/`, helpers in `e2e/helpers/`) against
  `http://localhost:5001`. Add a few tests with each new feature, and keep
  the total at 100 or fewer by cutting the least valuable ones.
- **This Pi is the production server.** `fix` skips e2e here unless you run
  `FORCE_E2E=1 npm run fix`, so a change made on the Pi is not e2e-tested
  until you run it elsewhere. Say so when that's the case.

## Code Reviews

List findings as issues grouped by severity.
