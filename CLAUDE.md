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

## Code Formatting

After making any code modifications, run:

```bash
npm run fix
```

This ensures all code is properly formatted and linted according to the project's standards.
