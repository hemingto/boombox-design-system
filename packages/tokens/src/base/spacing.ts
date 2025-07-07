/**
 * Boombox Design System - Spacing Tokens
 * 
 * Spacing values extracted from boombox-10.0 application codebase analysis.
 * 
 * Files analyzed for spacing extraction:
 * - boombox-10.0/src/app/components: Component-level spacing patterns
 * - boombox-10.0/src/app/admin: Admin dashboard layouts and forms
 * - boombox-10.0/src/app/api: API route layouts
 * - boombox-10.0/tailwind.config.ts: Custom spacing configurations
 * - boombox-10.0/src/app/globals.css: Base typography and spacing rules
 * 
 * Analysis Logic:
 * 1. Extracted all Tailwind spacing classes (p-*, m-*, gap-*, space-*, px-*, py-*, etc.)
 * 2. Identified most frequently used patterns across 200+ component files
 * 3. Grouped by semantic purpose: component internals, layout structure, grid systems
 * 4. Mapped to Tailwind spacing scale (4px base unit) for consistency
 * 5. Prioritized responsive patterns (lg:px-16 px-6, sm:mb-48 mb-24)
 * 
 * Key Patterns Found:
 * - Container: lg:px-16 px-6 (most common - 40+ occurrences)
 * - Section: sm:mb-48 mb-24 (consistent across landing pages)
 * - Component: p-4, py-2.5 px-6, p-12 (buttons, cards, forms)
 * - Grid: gap-2, gap-4, gap-6, gap-8 (flexbox and grid layouts)
 * - Stack: space-y-2 through space-y-8 (vertical element spacing)
 * - Inline: space-x-2, space-x-3, space-x-4 (horizontal element spacing)
 */

export const spacing = {
  // Component spacing - internal padding within UI elements
  // Used for: buttons, cards, form inputs, badges, chips
  component: {
    xs: '0.25rem',   // 1 - tight component padding (badges, small buttons)
    sm: '0.5rem',    // 2 - small component padding (compact buttons, inputs)
    md: '1rem',      // 4 - default component padding (standard buttons, cards)
    lg: '1.5rem',    // 6 - large component padding (prominent buttons, hero cards)
    xl: '2rem',      // 8 - extra large component padding (feature cards)
    '2xl': '3rem',   // 12 - oversized component padding (login forms, modals)
  },

  // Layout spacing - margins and padding for page structure
  // Used for: section spacing, page margins, container spacing
  layout: {
    xs: '1rem',      // 4 - tight section spacing
    sm: '2rem',      // 8 - small section spacing
    md: '3rem',      // 12 - default section spacing (mt-12 sm:mt-24 pattern)
    lg: '4rem',      // 16 - large section spacing
    xl: '6rem',      // 24 - extra large section spacing (mb-24 pattern)
    '2xl': '12rem',  // 48 - oversized section spacing (sm:mb-48 pattern)
  },

  // Grid spacing - gaps between grid and flex items
  // Used for: CSS Grid gap, Flexbox gap, card grids, form layouts
  grid: {
    xs: '0.25rem',   // 1 - minimal grid gap
    sm: '0.5rem',    // 2 - small grid gap (gap-2 pattern)
    md: '1rem',      // 4 - default grid gap (gap-4 pattern - most common)
    lg: '1.5rem',    // 6 - large grid gap (gap-6 pattern)
    xl: '2rem',      // 8 - extra large grid gap (gap-8 pattern)
    '2xl': '3rem',   // 12 - oversized grid gap (gap-12 pattern)
    '3xl': '4rem',   // 16 - maximum grid gap (gap-16 pattern)
    '4xl': '5rem',   // 20 - ultra-wide grid gap (gap-20 pattern)
  },

  // Stack spacing - vertical spacing between stacked elements
  // Used for: form fields, list items, content sections
  stack: {
    xs: '0.5rem',    // 2 - tight vertical spacing (space-y-2 pattern)
    sm: '1rem',      // 4 - small vertical spacing (space-y-4 pattern)
    md: '1.5rem',    // 6 - default vertical spacing (space-y-6 pattern)
    lg: '2rem',      // 8 - large vertical spacing (space-y-8 pattern)
  },

  // Inline spacing - horizontal spacing between inline elements
  // Used for: button groups, breadcrumbs, navigation items
  inline: {
    xs: '0.5rem',    // 2 - tight horizontal spacing (space-x-2 pattern)
    sm: '0.75rem',   // 3 - small horizontal spacing (space-x-3 pattern)
    md: '1rem',      // 4 - default horizontal spacing (space-x-4 pattern)
  },

  // Container spacing - responsive container padding
  // Used for: page containers, section wrappers, responsive layouts
  container: {
    // Mobile-first responsive container padding
    mobile: '1.5rem',    // 6 - px-6 pattern (mobile default)
    desktop: '4rem',     // 16 - lg:px-16 pattern (desktop default)
    
    // Specific responsive patterns found in codebase
    responsive: {
      // Most common pattern: lg:px-16 px-6
      standard: {
        base: '1.5rem',  // 6 - px-6
        lg: '4rem',      // 16 - lg:px-16
      },
      // Admin pattern: px-4 sm:px-6 lg:px-8
      admin: {
        base: '1rem',    // 4 - px-4
        sm: '1.5rem',    // 6 - sm:px-6
        lg: '2rem',      // 8 - lg:px-8
      },
      // Compact pattern: px-4 py-5 sm:p-6
      compact: {
        base: '1rem',    // 4 - px-4
        sm: '1.5rem',    // 6 - sm:p-6
      },
    },
  },

  // Responsive spacing - breakpoint-specific spacing overrides
  // Used for: responsive margins, adaptive layouts, mobile-first design
  responsive: {
    // Section margin patterns
    section: {
      // sm:mb-48 mb-24 pattern (most common)
      bottom: {
        base: '6rem',    // 24 - mb-24
        sm: '12rem',     // 48 - sm:mb-48
      },
      // mt-12 sm:mt-24 pattern
      top: {
        base: '3rem',    // 12 - mt-12
        sm: '6rem',      // 24 - sm:mt-24
      },
    },
    
    // Gap patterns for responsive grids
    gap: {
      // gap-2 sm:gap-4 lg:gap-6 pattern
      adaptive: {
        base: '0.5rem',  // 2 - gap-2
        sm: '1rem',      // 4 - sm:gap-4
        lg: '1.5rem',    // 6 - lg:gap-6
      },
      // gap-4 lg:gap-6 pattern
      standard: {
        base: '1rem',    // 4 - gap-4
        lg: '1.5rem',    // 6 - lg:gap-6
      },
    },
  },

} as const;

// Type exports for TypeScript usage
export type SpacingTokens = typeof spacing;
export type ComponentSpacing = typeof spacing.component;
export type LayoutSpacing = typeof spacing.layout;
export type GridSpacing = typeof spacing.grid;
export type StackSpacing = typeof spacing.stack;
export type InlineSpacing = typeof spacing.inline;
export type ContainerSpacing = typeof spacing.container;
export type ResponsiveSpacing = typeof spacing.responsive;

// Helper function to get spacing value by path
export function getSpacing(path: string): string {
  const keys = path.split('.');
  let value: any = spacing;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      throw new Error(`Spacing path "${path}" not found`);
    }
  }
  
  if (typeof value !== 'string') {
    throw new Error(`Spacing path "${path}" does not resolve to a string value`);
  }
  
  return value;
}

// Utility functions for common spacing patterns
export const spacingUtils = {
  // Get container padding for responsive design
  getContainerPadding: (breakpoint: 'mobile' | 'desktop' = 'mobile') => {
    return spacing.container[breakpoint];
  },
  
  // Get section spacing for consistent layout
  getSectionSpacing: (position: 'top' | 'bottom' = 'bottom', breakpoint: 'base' | 'sm' = 'base') => {
    return spacing.responsive.section[position][breakpoint];
  },
  
  // Get grid gap for responsive grids
  getGridGap: (size: keyof typeof spacing.grid) => {
    return spacing.grid[size];
  },
  
  // Get component padding for consistent UI elements
  getComponentPadding: (size: keyof typeof spacing.component) => {
    return spacing.component[size];
  },
} as const;

// Export default spacing object
export default spacing;
