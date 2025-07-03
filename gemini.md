# Design System Project Context

This repository is dedicated to building a reusable, production-ready design system.
I am referencing an existing Next.js project (the "rough draft") located at `/Users/calvinhemington/boombox-10.0` for inspiration, existing component patterns, and current styling.

**Rough Draft Project Details:**
- **Root Path:** `/Users/calvinhemington/boombox-10.0`
- **Components Path:** `/Users/calvinhemington/boombox-10.0/src/app/components`
- **Pages Path:** `/Users/calvinhemington/boombox-10.0/src/app`
- **Styling:** Uses Tailwind CSS.
- **Tailwind Config Path:** `/Users/calvinhemington/boombox-10.0/tailwind.config.ts`

**Design System Goals:**
- Create a new, dedicated `packages/components/` and `packages/tokens/` (and other relevant packages) for all design system assets, following the detailed structure provided below.
- Organize components within `packages/components/src/` by atomic design principles (primitives, patterns, layouts, forms, navigation, feedback).
- **Utilize Storybook extensively for component development, documentation, and visual testing.** This includes creating `.stories.tsx` files for all components.
- Each component should have its own folder containing:
    - `index.tsx` (the component itself)
    - `[ComponentName].module.css` (for CSS Modules, *if needed for specific styles not covered by Tailwind*)
    - `[ComponentName].types.ts` (TypeScript types for props)
    - `[ComponentName].stories.tsx` (Storybook stories)
    - `README.md` (component documentation, **including a reference to the original rough draft file path it was based on**).
- Establish clear naming conventions aligned with the attached file structure.
- Ensure accessibility best practices.
- Document all components thoroughly with usage examples.
- Define a consistent color palette, typography, spacing, and other design tokens.
- **Integrate Tailwind CSS for styling within the design system, leveraging tokens defined in `packages/tokens/` in a Tailwind-compatible way.**

**Proposed Design System Folder Structure (based on "Complete Design System File Structure" PDF /Users/calvinhemington/Desktop/Complete Design System File Structure.pdf):**

/boombox-design-system
├── .github/
│   └── workflows/
│       ├── ci.yml
│       ├── visual-regression.yml
│       ├── publish.yml
│       └── storybook-deploy.yml
├── .storybook/
│   ├── main.js
│   ├── preview.js
│   ├── theme.js
│   └── manager.js
├── apps/
│   ├── storybook/
│   ├── documentation/
│   └── playground/
├── packages/
│   ├── tokens/
│   │   ├── src/
│   │   │   ├── base/
│   │   │   │   ├── colors.ts
│   │   │   │   ├── typography.ts
│   │   │   │   ├── spacing.ts
│   │   │   │   ├── borders.ts
│   │   │   │   ├── shadows.ts
│   │   │   │   ├── breakpoints.ts
│   │   │   │   └── z-index.ts
│   │   │   ├── semantic/
│   │   │   │   ├── theme-light.ts
│   │   │   │   ├── theme-dark.ts
│   │   │   │   └── brand-variants.ts
│   │   │   ├── platform/
│   │   │   │   ├── web.ts
│   │   │   │   ├── email.ts
│   │   │   │   ├── mobile.ts
│   │   │   │   └── print.ts
│   │   │   └── utils/
│   │   │       ├── token-transformer.ts
│   │   │       ├── css-variables.ts
│   │   │       └── validators.ts
│   │   │       └── index.ts
│   │   └── build/
│   │       ├── tailwind.config.js
│   │       ├── css-variables.css
│   │       ├── scss-variables.scss
│   │       └── figma-tokens.json
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── README.md
│   ├── components/
│   │   ├── src/
│   │   │   ├── primitives/
│   │   │   │   └── Button/
│   │   │   │       ├── Button.tsx
│   │   │   │       ├── Button.stories.tsx
│   │   │   │       ├── Button.test.tsx
│   │   │   │       ├── Button.module.css
│   │   │   │       ├── variants.ts
│   │   │   │       └── index.ts
│   │   │   │   └── Input/
│   │   │   │   └── Typography/
│   │   │   │   └── Icon/
│   │   │   │   └── Avatar/
│   │   │   │   └── Badge/
│   │   │   │   └── Checkbox/
│   │   │   │   └── Radio/
│   │   │   │   └── Switch/
│   │   │   │   └── Slider/
│   │   │   │   └── Progress/
│   │   │   │   └── Spinner/
│   │   │   ├── patterns/
│   │   │   │   └── Card/
│   │   │   │   └── Modal/
│   │   │   │   └── Dropdown/
│   │   │   │   └── Tabs/
│   │   │   │   └── Accordion/
│   │   │   │   └── Table/
│   │   │   │   └── Pagination/
│   │   │   │   └── Breadcrumbs/
│   │   │   │   └── Alert/
│   │   │   │   └── Toast/
│   │   │   │   └── Tooltip/
│   │   │   ├── layouts/
│   │   │   │   └── Grid/
│   │   │   │   └── Stack/
│   │   │   │   └── Container/
│   │   │   │   └── Flex/
│   │   │   │   └── Sidebar/
│   │   │   │   └── AppShell/
│   │   │   ├── forms/
│   │   │   │   └── FormField/
│   │   │   │   └── FormGroup/
│   │   │   │   └── FormLabel/
│   │   │   │   └── FormError/
│   │   │   │   └── FormValidation/
│   │   │   │   └── FieldArray/
│   │   │   ├── navigation/
│   │   │   │   └── Header/
│   │   │   │   └── Footer/
│   │   │   │   └── Navigation/
│   │   │   │   └── Menu/
│   │   │   │   └── Stepper/
│   │   │   │   └── Pagination/
│   │   │   ├── feedback/
│   │   │   │   └── EmptyState/
│   │   │   │   └── LoadingState/
│   │   │   │   └── ErrorBoundary/
│   │   │   │   └── SkeletonLoader/
│   │   │   ├── hooks/
│   │   │   │   ├── useTheme.ts
│   │   │   │   ├── useBreakpoint.ts
│   │   │   │   ├── useDisclosure.ts
│   │   │   │   ├── useLocalStorage.ts
│   │   │   │   └── useMediaQuery.ts
│   │   │   ├── providers/
│   │   │   │   ├── ThemeProvider/
│   │   │   │   ├── BreakpointProvider/
│   │   │   │   └── ToastProvider/
│   │   │   └── utils/
│   │   │       ├── cn.ts
│   │   │       ├── variants.ts
│   │   │       ├── theme.ts
│   │   │       ├── accessibility.ts
│   │   │       └── validation.ts
│   │   │       └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tailwind.config.js
│   │   └── README.md
│   ├── email/
│   │   └── src/
│   │       ├── components/
│   │       │   ├── primitives/
│   │       │   └── patterns/
│   │       ├── layouts/
│   │       ├── templates/
│   │       │   ├── transactional/
│   │       │   ├── marketing/
│   │       │   └── lifecycle/
│   │       ├── utils/
│   │       ├── themes/
│   │       └── index.ts
│   │   ├── build/
│   │   ├── package.json
│   │   └── README.md
│   ├── content/
│   │   └── src/
│   │       ├── locales/
│   │       ├── constants/
│   │       ├── schemas/
│   │       ├── utils/
│   │       ├── hooks/
│   │       └── providers/
│   │   ├── build/
│   │   ├── tools/
│   │   ├── package.json
│   │   └── README.md
│   ├── icons/
│   │   └── src/
│   │       ├── components/
│   │       ├── icons/
│   │       ├── utils/
│   │       └── index.ts
│   │   ├── assets/
│   │   ├── build/
│   │   ├── tools/
│   │   ├── package.json
│   │   └── README.md
│   └── utils/
│       └── src/
│           ├── animation/
│           ├── accessibility/
│           ├── validation/
│           ├── formatting/
│           ├── dom/
│           └── styling/
│           └── index.ts
│       ├── package.json
│       └── README.md
├── tools/
│   ├── build/
│   ├── scripts/
│   ├── mcp-configs/
│   ├── testing/
│   └── templates/
│       ├── component-template/
│       ├── story-template/
│       └── test-template/
├── ISSUE_TEMPLATE/
│   ├── component-request.md
│   ├── bug-report.md
│   └── enhancement.md
├── pull_request_template.md
├── package.json
├── lerna.json
├── nx.json
├── tsconfig.json
├── tailwind.config.js
└── .eslintrc
