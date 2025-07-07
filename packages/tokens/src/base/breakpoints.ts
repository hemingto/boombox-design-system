/**
 * Boombox Design System - Breakpoint Tokens
 * 
 * Breakpoint system extracted from boombox-10.0 application codebase analysis.
 * 
 * Files analyzed for breakpoint extraction:
 * - boombox-10.0/tailwind.config.ts: Default Tailwind breakpoint configuration
 * - boombox-10.0/src/app/globals.css: Custom media query at 640px for h1 typography
 * - boombox-10.0/src/app/components: 200+ component files with responsive patterns
 * - boombox-10.0/src/app/admin: Admin dashboard responsive layouts
 * - boombox-10.0/src/app/mover-account-page: User dashboard responsive patterns
 * - boombox-10.0/src/app/driver-account-page: Driver interface responsive layouts
 * - boombox-10.0/src/app/customer: Customer interface responsive patterns
 * - boombox-10.0/src/app/api: Email template responsive layouts
 * 
 * Analysis Logic:
 * 1. Extracted all Tailwind responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
 * 2. Identified most frequently used patterns across 200+ component files
 * 3. Analyzed container padding patterns (lg:px-16 px-6 - 40+ occurrences)
 * 4. Mapped grid system usage (grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3)
 * 5. Determined layout direction changes (flex-col sm:flex-row)
 * 6. Grouped semantic usage (mobile-first responsive design)
 * 7. Prioritized Tailwind's default breakpoint system for consistency
 * 
 * Key Patterns Found:
 * - Container: lg:px-16 px-6 (most common responsive container pattern)
 * - Section: sm:mb-48 mb-24 (consistent section spacing across landing pages)
 * - Layout: flex-col sm:flex-row (mobile-first layout direction)
 * - Grid: grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 (responsive grid systems)
 * - Typography: text-3xl sm:text-4xl lg:text-5xl (responsive text scaling)
 * - Visibility: hidden sm:flex (mobile menu patterns)
 * - Max-widths: max-w-5xl, max-w-4xl, max-w-2xl (responsive containers)
 * - Admin: px-4 sm:px-6 lg:px-8 (admin dashboard responsive padding)
 */

export const breakpoints = {
  // Core screen breakpoints - based on Tailwind CSS default breakpoint system
  // These are the fundamental breakpoints used throughout the application
  screens: {
    sm: '640px',      // Small devices (landscape phones) - 640px and up
    md: '768px',      // Medium devices (tablets) - 768px and up
    lg: '1024px',     // Large devices (laptops/desktops) - 1024px and up
    xl: '1280px',     // Extra large devices (large laptops/desktops) - 1280px and up
    '2xl': '1536px',  // 2X large devices (larger desktops) - 1536px and up
  },

  // Container max-widths at each breakpoint - responsive container system
  // Based on max-w-* patterns found in codebase
  containers: {
    sm: '640px',      // Container max-width at sm breakpoint
    md: '768px',      // Container max-width at md breakpoint
    lg: '1024px',     // Container max-width at lg breakpoint
    xl: '1280px',     // Container max-width at xl breakpoint
    '2xl': '1536px',  // Container max-width at 2xl breakpoint
    
    // Semantic container sizes found in codebase
    content: {
      xs: '320px',    // max-w-xs - minimal content width
      sm: '384px',    // max-w-sm - small content width (login forms)
      md: '448px',    // max-w-md - medium content width (modals)
      lg: '512px',    // max-w-lg - large content width (forms)
      xl: '576px',    // max-w-xl - extra large content width (hero content)
      '2xl': '672px', // max-w-2xl - 2x large content width (signup forms)
      '3xl': '768px', // max-w-3xl - 3x large content width
      '4xl': '896px', // max-w-4xl - 4x large content width (admin tasks)
      '5xl': '1024px', // max-w-5xl - 5x large content width (user dashboards)
    },
  },

  // Grid system responsive patterns - based on grid-cols-* usage
  // Extracted from component grid layouts throughout the application
  grid: {
    // Column patterns at different breakpoints
    columns: {
      mobile: 1,        // grid-cols-1 - single column on mobile
      tablet: 2,        // grid-cols-2 - two columns on tablet
      desktop: 3,       // grid-cols-3 - three columns on desktop
      wide: 4,          // grid-cols-4 - four columns on wide screens
    },
    
    // Responsive grid patterns found in codebase
    patterns: {
      // Most common: grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3
      standard: {
        base: 1,        // grid-cols-1 (mobile)
        lg: 2,          // lg:grid-cols-2 (desktop)
        '2xl': 3,       // 2xl:grid-cols-3 (wide)
      },
      
      // Admin dashboard: grid-cols-2 md:grid-cols-4
      admin: {
        base: 2,        // grid-cols-2 (mobile)
        md: 4,          // md:grid-cols-4 (tablet+)
      },
      
      // Security section: grid-cols-1 sm:grid-cols-2
      features: {
        base: 1,        // grid-cols-1 (mobile)
        sm: 2,          // sm:grid-cols-2 (tablet+)
      },
      
      // Mover coverage: grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
      coverage: {
        base: 2,        // grid-cols-2 (mobile)
        sm: 3,          // sm:grid-cols-3 (tablet)
        lg: 4,          // lg:grid-cols-4 (desktop)
      },
    },
  },

  // Typography responsive scaling - based on text-* responsive patterns
  // Extracted from heading and text scaling patterns
  typography: {
    // Heading responsive scaling patterns
    headings: {
      // Hero headings: text-5xl sm:text-6xl
      hero: {
        base: '3rem',     // text-5xl (48px) mobile
        sm: '3.75rem',    // text-6xl (60px) desktop
      },
      
      // Section headings: text-2xl sm:text-4xl
      section: {
        base: '1.5rem',   // text-2xl (24px) mobile
        sm: '2.25rem',    // text-4xl (36px) desktop
      },
      
      // Subsection headings: text-xl sm:text-2xl
      subsection: {
        base: '1.25rem',  // text-xl (20px) mobile
        sm: '1.5rem',     // text-2xl (24px) desktop
      },
    },
    
    // Body text responsive scaling
    body: {
      // Default body: text-sm sm:text-base
      default: {
        base: '0.875rem', // text-sm (14px) mobile
        sm: '1rem',       // text-base (16px) desktop
      },
      
      // Large body: text-base sm:text-lg
      large: {
        base: '1rem',     // text-base (16px) mobile
        sm: '1.125rem',   // text-lg (18px) desktop
      },
    },
  },

  // Spacing responsive patterns - based on margin/padding responsive usage
  // Extracted from section spacing and container padding patterns
  spacing: {
    // Container padding patterns - most common responsive pattern
    container: {
      // Standard pattern: lg:px-16 px-6 (most common - 40+ occurrences)
      standard: {
        base: '1.5rem',   // px-6 (24px) mobile
        lg: '4rem',       // lg:px-16 (64px) desktop
      },
      
      // Admin pattern: px-4 sm:px-6 lg:px-8
      admin: {
        base: '1rem',     // px-4 (16px) mobile
        sm: '1.5rem',     // sm:px-6 (24px) tablet
        lg: '2rem',       // lg:px-8 (32px) desktop
      },
      
      // Compact pattern: px-4 py-5 sm:p-6
      compact: {
        base: '1rem',     // px-4 (16px) mobile
        sm: '1.5rem',     // sm:p-6 (24px) tablet+
      },
    },
    
    // Section spacing patterns
    section: {
      // Bottom margin: sm:mb-48 mb-24 (consistent across landing pages)
      bottom: {
        base: '6rem',     // mb-24 (96px) mobile
        sm: '12rem',      // sm:mb-48 (192px) desktop
      },
      
      // Top margin: mt-12 sm:mt-24
      top: {
        base: '3rem',     // mt-12 (48px) mobile
        sm: '6rem',       // sm:mt-24 (96px) desktop
      },
      
      // Combined margin: mb-12 sm:mb-24
      combined: {
        base: '3rem',     // mb-12 (48px) mobile
        sm: '6rem',       // sm:mb-24 (96px) desktop
      },
    },
    
    // Gap patterns for responsive layouts
    gap: {
      // Standard gap: gap-4 lg:gap-6
      standard: {
        base: '1rem',     // gap-4 (16px) mobile
        lg: '1.5rem',     // lg:gap-6 (24px) desktop
      },
      
      // Small gap: gap-2 sm:gap-4
      small: {
        base: '0.5rem',   // gap-2 (8px) mobile
        sm: '1rem',       // sm:gap-4 (16px) tablet+
      },
      
      // Large gap: gap-6 lg:gap-8
      large: {
        base: '1.5rem',   // gap-6 (24px) mobile
        lg: '2rem',       // lg:gap-8 (32px) desktop
      },
    },
  },

  // Layout responsive patterns - flex direction and visibility changes
  // Based on flex-col/flex-row and hidden/block patterns
  layout: {
    // Flex direction patterns
    direction: {
      // Standard: flex-col sm:flex-row (mobile-first approach)
      standard: {
        base: 'column',   // flex-col (mobile)
        sm: 'row',        // sm:flex-row (tablet+)
      },
      
      // Reverse: flex-row sm:flex-col (less common)
      reverse: {
        base: 'row',      // flex-row (mobile)
        sm: 'column',     // sm:flex-col (tablet+)
      },
    },
    
    // Visibility patterns
    visibility: {
      // Mobile menu: hidden sm:flex
      desktop: {
        base: 'hidden',   // hidden (mobile)
        sm: 'flex',       // sm:flex (tablet+)
      },
      
      // Mobile content: block sm:hidden
      mobile: {
        base: 'block',    // block (mobile)
        sm: 'hidden',     // sm:hidden (tablet+)
      },
      
      // Responsive block: hidden md:block
      responsive: {
        base: 'hidden',   // hidden (mobile)
        md: 'block',      // md:block (tablet+)
      },
    },
    
    // Basis patterns for flex layouts
    basis: {
      // Half columns: basis-1/2
      half: {
        base: '100%',     // full width (mobile)
        md: '50%',        // basis-1/2 (tablet+)
      },
      
      // Third columns: basis-1/3
      third: {
        base: '100%',     // full width (mobile)
        lg: '33.333333%', // basis-1/3 (desktop+)
      },
      
      // Quarter columns: basis-1/4
      quarter: {
        base: '100%',     // full width (mobile)
        xl: '25%',        // basis-1/4 (extra large+)
      },
    },
  },

  // Navigation responsive patterns - mobile/desktop navigation
  // Based on navigation component responsive behavior
  navigation: {
    // Mobile menu patterns
    mobile: {
      // Hamburger menu breakpoint
      hamburger: {
        show: '0px',      // Show on mobile
        hide: '768px',    // Hide on tablet+ (md breakpoint)
      },
      
      // Mobile menu overlay
      overlay: {
        show: '0px',      // Show on mobile
        hide: '1024px',   // Hide on desktop+ (lg breakpoint)
      },
    },
    
    // Desktop navigation patterns
    desktop: {
      // Main navigation
      main: {
        show: '768px',    // Show on tablet+ (md breakpoint)
        hide: '0px',      // Hide on mobile
      },
      
      // Secondary navigation
      secondary: {
        show: '1024px',   // Show on desktop+ (lg breakpoint)
        hide: '0px',      // Hide on mobile/tablet
      },
    },
    
    // Navigation container patterns
    container: {
      // Header padding: lg:px-16 px-6
      header: {
        base: '1.5rem',   // px-6 (24px) mobile
        lg: '4rem',       // lg:px-16 (64px) desktop
      },
      
      // Navigation height
      height: {
        mobile: '4rem',   // h-16 (64px) mobile
        desktop: '5rem',  // h-20 (80px) desktop
      },
    },
  },

  // Component responsive patterns - specific component breakpoints
  // Based on component-specific responsive behavior
  components: {
    // Button responsive patterns
    button: {
      // Button padding: py-2.5 px-6 sm:py-3 sm:px-8
      padding: {
        base: { y: '0.625rem', x: '1.5rem' }, // py-2.5 px-6 (mobile)
        sm: { y: '0.75rem', x: '2rem' },      // sm:py-3 sm:px-8 (tablet+)
      },
      
      // Button text: text-sm sm:text-base
      text: {
        base: '0.875rem', // text-sm (14px) mobile
        sm: '1rem',       // text-base (16px) tablet+
      },
    },
    
    // Card responsive patterns
    card: {
      // Card padding: p-4 sm:p-6 lg:p-8
      padding: {
        base: '1rem',     // p-4 (16px) mobile
        sm: '1.5rem',     // sm:p-6 (24px) tablet
        lg: '2rem',       // lg:p-8 (32px) desktop
      },
      
      // Card gap: gap-4 sm:gap-6
      gap: {
        base: '1rem',     // gap-4 (16px) mobile
        sm: '1.5rem',     // sm:gap-6 (24px) tablet+
      },
    },
    
    // Form responsive patterns
    form: {
      // Form container: max-w-lg sm:max-w-2xl
      container: {
        base: '32rem',    // max-w-lg (512px) mobile
        sm: '42rem',      // sm:max-w-2xl (672px) tablet+
      },
      
      // Form padding: p-6 sm:p-10
      padding: {
        base: '1.5rem',   // p-6 (24px) mobile
        sm: '2.5rem',     // sm:p-10 (40px) tablet+
      },
    },
    
    // Modal responsive patterns
    modal: {
      // Modal width: w-full sm:max-w-md lg:max-w-lg
      width: {
        base: '100%',     // w-full (mobile)
        sm: '28rem',      // sm:max-w-md (448px) tablet
        lg: '32rem',      // lg:max-w-lg (512px) desktop
      },
      
      // Modal padding: p-4 sm:p-6
      padding: {
        base: '1rem',     // p-4 (16px) mobile
        sm: '1.5rem',     // sm:p-6 (24px) tablet+
      },
    },
  },

  // Utility breakpoint helpers - common responsive utilities
  utilities: {
    // Responsive show/hide utilities
    show: {
      mobile: { base: 'block', sm: 'hidden' },     // Show on mobile only
      tablet: { base: 'hidden', sm: 'block', lg: 'hidden' }, // Show on tablet only
      desktop: { base: 'hidden', lg: 'block' },    // Show on desktop only
    },
    
    // Responsive text alignment
    textAlign: {
      center: { base: 'center', sm: 'left' },      // Center on mobile, left on tablet+
      responsive: { base: 'left', sm: 'center', lg: 'left' }, // Responsive alignment
    },
    
    // Responsive margins
    margin: {
      section: { base: '3rem', sm: '6rem' },       // Section margin responsive
      component: { base: '1rem', sm: '2rem' },     // Component margin responsive
    },
    
    // Responsive padding
    padding: {
      container: { base: '1.5rem', lg: '4rem' },   // Container padding responsive
      section: { base: '2rem', sm: '3rem' },       // Section padding responsive
    },
  },

} as const;

// Type exports for TypeScript usage
export type BreakpointTokens = typeof breakpoints;
export type Screens = typeof breakpoints.screens;
export type Containers = typeof breakpoints.containers;
export type GridBreakpoints = typeof breakpoints.grid;
export type TypographyBreakpoints = typeof breakpoints.typography;
export type SpacingBreakpoints = typeof breakpoints.spacing;
export type LayoutBreakpoints = typeof breakpoints.layout;
export type NavigationBreakpoints = typeof breakpoints.navigation;
export type ComponentBreakpoints = typeof breakpoints.components;
export type BreakpointUtilities = typeof breakpoints.utilities;

// Helper function to get breakpoint value by path
export function getBreakpoint(path: string): any {
  const keys = path.split('.');
  let value: any = breakpoints;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      throw new Error(`Breakpoint path "${path}" not found`);
    }
  }
  
  return value;
}

// Utility functions for common breakpoint patterns
export const breakpointUtils = {
  // Get screen breakpoint
  getScreen: (size: keyof typeof breakpoints.screens) => {
    return breakpoints.screens[size];
  },
  
  // Get container max-width
  getContainer: (size: keyof typeof breakpoints.containers) => {
    return breakpoints.containers[size];
  },
  
  // Get content container max-width
  getContentContainer: (size: keyof typeof breakpoints.containers.content) => {
    return breakpoints.containers.content[size];
  },
  
  // Get grid columns for breakpoint
  getGridColumns: (pattern: keyof typeof breakpoints.grid.patterns, breakpoint: string) => {
    const gridPattern = breakpoints.grid.patterns[pattern];
    if (breakpoint in gridPattern) {
      return gridPattern[breakpoint as keyof typeof gridPattern];
    }
    return gridPattern.base;
  },
  
  // Get responsive container padding
  getContainerPadding: (pattern: keyof typeof breakpoints.spacing.container = 'standard') => {
    return breakpoints.spacing.container[pattern];
  },
  
  // Get responsive section spacing
  getSectionSpacing: (position: keyof typeof breakpoints.spacing.section = 'bottom') => {
    return breakpoints.spacing.section[position];
  },
  
  // Build media query string
  buildMediaQuery: (breakpoint: keyof typeof breakpoints.screens, type: 'min' | 'max' = 'min') => {
    const size = breakpoints.screens[breakpoint];
    return `@media (${type}-width: ${size})`;
  },
  
  // Get responsive typography
  getResponsiveTypography: (
    type: keyof typeof breakpoints.typography,
    variant: string,
    breakpoint: string = 'base'
  ) => {
    const typographyType = breakpoints.typography[type];
    if (variant in typographyType) {
      const variantObj = typographyType[variant as keyof typeof typographyType];
      if (typeof variantObj === 'object' && breakpoint in variantObj) {
        return variantObj[breakpoint as keyof typeof variantObj];
      }
    }
    return null;
  },
  
  // Check if breakpoint is mobile-first
  isMobileFirst: () => true, // Boombox uses mobile-first approach
  
  // Get all breakpoints as array
  getAllBreakpoints: () => {
    return Object.entries(breakpoints.screens).map(([name, value]) => ({
      name,
      value,
      pixels: parseInt(value.replace('px', ''))
    }));
  },
} as const;

// Export default breakpoints object
export default breakpoints;
