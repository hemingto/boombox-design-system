# Boombox 10.0 File Structure

This document outlines the complete file structure of the boombox-10.0 directory, which appears to be a Next.js application for a moving and storage service platform.

## Root Directory

```
boombox-10.0/
├── docs/                           # Documentation directory
├── image-requirements.csv          # Image requirements specification
├── INVENTORY_MANAGEMENT_SUMMARY.md # Inventory management documentation
├── jest.config.cjs                 # Jest testing configuration
├── jest.setup.js                   # Jest setup file
├── next-env.d.ts                   # Next.js TypeScript environment definitions
├── next.config.mjs                 # Next.js configuration
├── prisma/                         # Database schema and migrations
├── public/                         # Static assets
├── scripts/                        # Utility scripts
├── src/                            # Source code
├── tests/                          # Test files
├── types/                          # TypeScript type definitions
├── package.json                    # Node.js dependencies and scripts
├── package-lock.json               # Locked dependency versions
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── .env files                      # Environment variables
```

## Documentation (`docs/`)

```
docs/
├── workflows/                      # Business process workflows
│   ├── admin/                      # Admin-specific workflows
│   │   ├── Assign Storage Unit/
│   │   │   ├── overview.md
│   │   │   ├── user-flow.md
│   │   │   └── technical-spec.md
│   │   ├── Storage Unit Return/
│   │   │   ├── overview.md
│   │   │   ├── user-flow.md
│   │   │   └── technical-spec.md
│   │   └── Update Warehouse Location/
│   │       ├── overview.md
│   │       ├── user-flow.md
│   │       └── technical-spec.md
│   ├── cron-jobs/
│   │   └── expired-mover-changes-setup.md
│   ├── driver/                     # Driver-specific workflows
│   │   ├── Add New Moving Partner Driver/
│   │   │   ├── overview.md
│   │   │   ├── user-flow.md
│   │   │   └── technical-spec.md
│   │   ├── Add New Vehicle (Driver)/
│   │   │   ├── overview.md
│   │   │   ├── user-flow.md
│   │   │   └── technical-spec.md
│   │   ├── Driver Job Cancelation/
│   │   │   ├── overview.md
│   │   │   └── user-flow.md
│   │   ├── New Boombox Driver Approval/
│   │   │   ├── overview.md
│   │   │   ├── user-flow.md
│   │   │   └── technical-spec.md
│   │   ├── New Boombox Driver Sign Up/
│   │   │   ├── overview.md
│   │   │   ├── user-flow.md
│   │   │   └── technical-spec.md
│   │   ├── New Moving Partner Driver Approval/
│   │   │   ├── overview.md
│   │   │   ├── user-flow.md
│   │   │   └── technical-spec.md
│   │   └── New Storage Unit Pickup Appointment/
│   │       ├── overview.md
│   │       └── user-flow.md
│   ├── important workflows/        # Critical business workflows
│   │   ├── Customer Payment Logic/
│   │   │   ├── overview.md
│   │   │   └── technical-spec.md
│   │   ├── Driver and Mover Availability/
│   │   │   └── overview.md
│   │   ├── Driver Assignment Logic/
│   │   │   └── overview.md
│   │   └── [6 additional directories]
│   ├── mover/                      # Mover-specific workflows
│   │   └── [3 directories]
│   └── user/                       # User-specific workflows
│       └── [4 directories]
```

## Database (`prisma/`)

```
prisma/
├── migrations/                     # Database migration files
│   ├── 20250620233452_init/
│   │   └── migration.sql
│   ├── 20250623191308_add_packing_supply_order_cancellation/
│   │   └── migration.sql
│   ├── 20250623210235_make_driver_id_nullable_in_packing_supply_route/
│   │   └── migration.sql
│   ├── 20250624000736_add_packing_supply_feedback/
│   │   └── migration.sql
│   ├── 20250625214353_add_packing_supply_order_prepped_fields/
│   │   └── migration.sql
│   ├── 20250626214705_add_notification_system/
│   │   └── migration.sql
│   └── migration_lock.toml
└── schema.prisma                   # Database schema definition
```

## Public Assets (`public/`)

```
public/
└── img/
    ├── berkeley.png
    ├── golden-gate.png
    ├── logo.png
    └── [4 additional PNG files]
```

## Scripts (`scripts/`)

```
scripts/
├── process-payouts.ts             # Payout processing script
├── test-inventory-management.js   # Inventory management testing
├── test-route-payouts.mjs         # Route payout testing
└── [1 additional JS file]
```

## Source Code (`src/`)

```
src/
├── app/                           # Next.js App Router directory
│   ├── actions/                   # Server actions
│   │   └── [4 TypeScript files]
│   ├── admin/                     # Admin dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── [15 subdirectories]
│   ├── api/                       # API routes
│   │   └── [33 subdirectories]
│   ├── blog/
│   │   └── page.tsx
│   ├── blog-post/
│   │   └── page.tsx
│   ├── careers/
│   │   └── page.tsx
│   ├── checklist/
│   │   └── page.tsx
│   ├── components/                # Reusable components
│   │   └── [35 subdirectories]
│   ├── context/
│   │   └── [1 TypeScript file]
│   ├── customer/
│   │   └── [1 subdirectory]
│   ├── data/
│   │   └── [9 TypeScript files]
│   ├── datepicker.css            # Custom CSS for datepicker
│   ├── driver/
│   │   └── [2 subdirectories]
│   ├── driver-accept-invite/
│   │   └── page.tsx
│   ├── driver-account-page/
│   │   └── [1 subdirectory]
│   ├── driver-signup/
│   │   └── page.tsx
│   ├── favicon.ico               # Site favicon
│   ├── feedback/
│   │   └── [1 subdirectory]
│   ├── getquote/
│   │   └── page.tsx
│   ├── globals.css               # Global CSS styles
│   ├── help-center/
│   │   └── page.tsx
│   ├── howitworks/
│   │   └── page.tsx
│   ├── insurance/
│   │   └── page.tsx
│   ├── lib/                      # Utility libraries
│   │   ├── [14 TypeScript files]
│   │   └── [4 subdirectories]
│   ├── locations/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── mover-account-page/
│   │   └── [1 subdirectory]
│   ├── mover-signup/
│   │   └── page.tsx
│   ├── packing-supplies/
│   │   ├── page.tsx
│   │   └── [2 subdirectories]
│   ├── sitemap/
│   │   └── page.tsx
│   ├── storage-calculator/
│   │   └── page.tsx
│   ├── storage-guidelines/
│   │   └── page.tsx
│   ├── storage-unit-prices/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── tracking/
│   │   └── [1 subdirectory]
│   ├── types/
│   │   └── [1 TypeScript file]
│   ├── user-page/
│   │   └── [1 subdirectory]
│   ├── vehicle-requirements/
│   │   └── page.tsx
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Home page
│   └── loading.tsx               # Loading component
├── cron/                         # Scheduled job functions
│   ├── daily-dispatch.ts
│   └── packing-supply-payouts.ts
├── lib/                          # Core library functions
│   ├── database/                 # Database utilities
│   ├── payments/                 # Payment processing
│   │   └── [2 TypeScript files]
│   ├── services/                 # External service integrations
│   │   └── [4 TypeScript files]
│   └── utils/                    # General utilities
│       └── [3 TypeScript files]
├── middleware/
│   └── prisma.ts                 # Prisma middleware
├── middleware.ts                 # Next.js middleware
└── types/
    ├── onfleet.d.ts             # Onfleet service types
    └── packing-supply.ts        # Packing supply types
```

## Tests (`tests/`)

```
tests/
└── integration/                  # Integration test files
```

## Types (`types/`)

```
types/
└── next-auth.d.ts               # NextAuth.js type definitions
```

## Configuration Files

- **`jest.config.cjs`** - Jest testing framework configuration
- **`jest.setup.js`** - Jest setup and global test configurations
- **`next.config.mjs`** - Next.js application configuration
- **`next-env.d.ts`** - Next.js TypeScript environment types
- **`package.json`** - Node.js project dependencies and scripts
- **`package-lock.json`** - Locked dependency versions for reproducible builds
- **`tsconfig.json`** - TypeScript compiler configuration
- **`tailwind.config.js`** - Tailwind CSS framework configuration

## Key Features

Based on the file structure, this appears to be a comprehensive moving and storage service platform with:

1. **Multi-role Support**: Admin, driver, mover, and customer interfaces
2. **Storage Management**: Storage unit assignment, returns, and warehouse location management
3. **Logistics**: Driver assignment, vehicle management, and route optimization
4. **Payments**: Payout processing and customer payment logic
5. **Inventory**: Packing supply orders and inventory management
6. **Notifications**: System-wide notification handling
7. **Documentation**: Extensive workflow documentation for business processes
8. **Testing**: Comprehensive test coverage with integration tests
9. **Database**: PostgreSQL with Prisma ORM and migration system
10. **API**: RESTful API endpoints for all major functionality

The application uses modern web technologies including:
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Prisma** for database management
- **Tailwind CSS** for styling
- **Jest** for testing
- **Various integrations** (Onfleet for logistics, payment providers, etc.) 