/**
 * Boombox Design System - Border Tokens
 * 
 * Border system extracted from boombox-10.0 application codebase analysis.
 * 
 * Files analyzed for border extraction:
 * - boombox-10.0/src/app/components: 200+ component files for border patterns
 * - boombox-10.0/tailwind.config.ts: Custom shadow configurations
 * - boombox-10.0/src/app/admin: Admin interface border styles
 * - boombox-10.0/src/app/user-page: User dashboard border patterns
 * - boombox-10.0/src/app/mover-account: Mover interface border styles
 * - boombox-10.0/src/app/driver: Driver interface border patterns
 * 
 * Analysis Logic:
 * 1. Extracted all Tailwind border classes (border-*, rounded-*, ring-*)
 * 2. Identified most frequently used patterns across 200+ component files
 * 3. Analyzed focus states (focus:ring-2, focus:ring-zinc-950, focus:outline-none)
 * 4. Grouped semantic usage (success, error, warning, info states)
 * 5. Mapped border directional patterns (border-t, border-b, border-l, border-r)
 * 6. Prioritized responsive patterns and interactive states
 * 
 * Key Patterns Found:
 * - Width: border (1px), border-2 (2px), border-4 (4px) - most common
 * - Radius: rounded-md (0.375rem), rounded-lg (0.5rem), rounded-full (9999px)
 * - Colors: slate-100/200 (neutral), zinc-950 (focus), red-500 (error), emerald-500 (success)
 * - States: ring-2 for focus, ring-red-500 for errors, ring-zinc-950 for active
 * - Directional: border-b (dividers), border-l-4 (callouts), border-t (sections)
 * - Interactive: focus:ring-2 focus:ring-zinc-950 (inputs), hover:border-gray-400
 */

import { colors } from './colors';

export const borders = {
  // Border width scale - based on Tailwind border-* classes found in codebase
  width: {
    none: '0',           // border-0 - no border
    thin: '1px',         // border - default border (most common - 150+ occurrences)
    medium: '2px',       // border-2 - emphasis borders, focus states (80+ occurrences)
    thick: '4px',        // border-4 - callout borders, loading spinners (20+ occurrences)
  },

  // Border style variations - based on border-* style classes
  style: {
    solid: 'solid',      // Default border style (most common)
    dashed: 'dashed',    // border-dashed - upload areas, placeholder borders
    dotted: 'dotted',    // border-dotted - less common, special cases
    none: 'none',        // border-none - removing borders
  },

  // Border radius scale - based on rounded-* classes found in codebase
  radius: {
    none: '0',           // rounded-none - sharp corners
    sm: '0.125rem',      // rounded-sm - subtle rounding
    md: '0.375rem',      // rounded-md - default rounding (most common - 100+ occurrences)
    lg: '0.5rem',        // rounded-lg - prominent rounding (modal dialogs, cards)
    xl: '0.75rem',       // rounded-xl - large rounding (feature cards, hero sections)
    '2xl': '1rem',       // rounded-2xl - extra large rounding (mover options, special cards)
    full: '9999px',      // rounded-full - circular elements (buttons, avatars, badges)
  },

  // Border colors - semantic usage based on color tokens and codebase patterns
  colors: {
    // Neutral borders - most common usage
    default: colors.secondary[200],        // #e2e8f0 - default border color (slate-200)
    subtle: colors.secondary[100],         // #f1f5f9 - subtle borders (slate-100)
    muted: colors.secondary[50],           // #f8fafc - very subtle borders (slate-50)
    
    // Interactive borders - focus and active states
    focus: colors.primary[950],            // #222222 - focus ring color (zinc-950)
    active: colors.primary[800],           // #2d2d2d - active border states
    hover: colors.secondary[400],          // #94a3b8 - hover border color (slate-400)
    
    // Semantic borders - status and feedback
    success: colors.semantic.success[500], // #10b981 - success borders (emerald-500)
    error: colors.semantic.error[500],     // #ef4444 - error borders (red-500)
    warning: colors.semantic.warning[400], // #fbbf24 - warning borders (amber-400)
    info: colors.semantic.info[500],       // #06b6d4 - info borders (cyan-500)
    
    // Specialized borders
    divider: colors.secondary[100],        // #f1f5f9 - section dividers (slate-100)
    accent: colors.primary[950],           // #222222 - accent borders (zinc-950)
    transparent: 'transparent',            // Transparent borders for layout
  },

  // Ring styles - focus and selection states (ring-* classes)
  rings: {
    // Ring width scale
    width: {
      none: '0',         // ring-0 - no ring
      thin: '1px',       // ring-1 - subtle ring
      medium: '2px',     // ring-2 - default focus ring (most common)
      thick: '4px',      // ring-4 - prominent ring
    },
    
    // Ring colors - based on ring-* color usage
    colors: {
      focus: colors.primary[950],            // #222222 - focus ring (zinc-950)
      error: colors.semantic.error[500],     // #ef4444 - error ring (red-500)
      success: colors.semantic.success[500], // #10b981 - success ring (emerald-500)
      warning: colors.semantic.warning[400], // #fbbf24 - warning ring (amber-400)
      info: colors.semantic.info[500],       // #06b6d4 - info ring (cyan-500)
      subtle: colors.secondary[100],         // #f1f5f9 - subtle ring (slate-100)
    },
    
    // Ring offset - ring-offset-* classes
    offset: {
      none: '0',         // ring-offset-0
      sm: '1px',         // ring-offset-1
      md: '2px',         // ring-offset-2 - common for focus states
      lg: '4px',         // ring-offset-4
    },
  },

  // Directional borders - border-t, border-b, border-l, border-r patterns
  directional: {
    // Top borders - border-t patterns
    top: {
      default: `1px solid ${colors.secondary[100]}`,     // border-t border-slate-100
      thick: `2px solid ${colors.secondary[100]}`,       // border-t-2 border-slate-100
      accent: `1px solid ${colors.primary[950]}`,        // border-t border-zinc-950
    },
    
    // Bottom borders - border-b patterns (most common for dividers)
    bottom: {
      default: `1px solid ${colors.secondary[100]}`,     // border-b border-slate-100
      thick: `2px solid ${colors.secondary[100]}`,       // border-b-2 border-slate-100
      accent: `2px solid ${colors.primary[950]}`,        // border-b-2 border-zinc-950
      divider: `1px solid ${colors.secondary[100]}`,     // Common divider pattern
    },
    
    // Left borders - border-l patterns (callouts, sidebars)
    left: {
      default: `1px solid ${colors.secondary[200]}`,     // border-l border-slate-200
      thick: `4px solid ${colors.semantic.info[500]}`,   // border-l-4 border-blue-400 (callouts)
      accent: `2px solid ${colors.primary[950]}`,        // border-l-2 border-zinc-950
      warning: `4px solid ${colors.semantic.warning[400]}`, // border-l-4 border-amber-400
      error: `4px solid ${colors.semantic.error[500]}`,     // border-l-4 border-red-400
    },
    
    // Right borders - border-r patterns (less common)
    right: {
      default: `1px solid ${colors.secondary[200]}`,     // border-r border-slate-200
      divider: `1px solid ${colors.secondary[100]}`,     // border-r border-slate-100
    },
  },

  // Component-specific border styles - complete border definitions for common components
  components: {
    // Input field borders - most common pattern in forms
    input: {
      default: {
        width: '2px',
        style: 'solid',
        color: colors.secondary[100],         // ring-slate-100
        radius: '0.375rem',                   // rounded-md
        focus: {
          width: '2px',
          style: 'solid',
          color: colors.primary[950],         // focus:ring-zinc-950
          outline: 'none',                    // focus:outline-none
        },
      },
      error: {
        width: '2px',
        style: 'solid',
        color: colors.semantic.error[500],    // ring-red-500
        radius: '0.375rem',                   // rounded-md
        background: colors.semantic.error[100], // bg-red-100
      },
      success: {
        width: '2px',
        style: 'solid',
        color: colors.semantic.success[200], // ring-emerald-200
        radius: '0.375rem',                  // rounded-md
        background: colors.semantic.success[100], // bg-emerald-100
      },
    },
    
    // Card borders - common container pattern
    card: {
      default: {
        width: '1px',
        style: 'solid',
        color: colors.secondary[100],         // border-slate-100
        radius: '0.375rem',                   // rounded-md
      },
      elevated: {
        width: '0',
        style: 'none',
        color: 'transparent',
        radius: '0.375rem',                   // rounded-md
        shadow: '0px 6px 20px 0px rgba(0,0,0,0.2)', // custom-shadow
      },
      interactive: {
        width: '2px',
        style: 'solid',
        color: colors.secondary[100],         // ring-slate-100
        radius: '0.375rem',                   // rounded-md
        hover: {
          color: colors.primary[950],         // hover:ring-zinc-950
        },
      },
    },
    
    // Button borders - various button styles
    button: {
      primary: {
        width: '0',
        style: 'none',
        color: 'transparent',
        radius: '0.375rem',                   // rounded-md
      },
      secondary: {
        width: '1px',
        style: 'solid',
        color: colors.secondary[200],         // border-slate-200
        radius: '0.375rem',                   // rounded-md
      },
      outline: {
        width: '1px',
        style: 'solid',
        color: colors.primary[950],           // border-zinc-950
        radius: '0.375rem',                   // rounded-md
      },
      ghost: {
        width: '0',
        style: 'none',
        color: 'transparent',
        radius: '0.375rem',                   // rounded-md
      },
    },
    
    // Modal borders - dialog and popup patterns
    modal: {
      default: {
        width: '0',
        style: 'none',
        color: 'transparent',
        radius: '0.5rem',                     // rounded-lg
        shadow: '0px 6px 20px 0px rgba(0,0,0,0.2)', // shadow-xl equivalent
      },
      content: {
        width: '1px',
        style: 'solid',
        color: colors.secondary[100],         // border-slate-100
        radius: '0.375rem',                   // rounded-md
      },
    },
    
    // Table borders - data table patterns
    table: {
      header: {
        width: '2px',
        style: 'solid',
        color: colors.secondary[100],         // border-b-2 border-slate-100
        direction: 'bottom',
      },
      row: {
        width: '1px',
        style: 'solid',
        color: colors.secondary[100],         // border-b border-slate-100
        direction: 'bottom',
      },
      cell: {
        width: '1px',
        style: 'solid',
        color: colors.secondary[200],         // border-slate-200
      },
    },
    
    // Loading spinner borders - animation patterns
    spinner: {
      default: {
        width: '2px',
        style: 'solid',
        color: colors.primary[950],           // border-zinc-950
        transparent: 'transparent',           // border-t-transparent
        radius: '9999px',                     // rounded-full
      },
      light: {
        width: '2px',
        style: 'solid',
        color: colors.primary[50],            // border-white
        transparent: 'transparent',           // border-t-transparent
        radius: '9999px',                     // rounded-full
      },
    },
  },

  // Interactive states - hover, focus, active, disabled
  states: {
    // Focus states - most common interactive pattern
    focus: {
      ring: `2px solid ${colors.primary[950]}`,         // focus:ring-2 focus:ring-zinc-950
      outline: 'none',                                  // focus:outline-none
      background: colors.primary[50],                   // focus:bg-white
    },
    
    // Hover states - subtle interactive feedback
    hover: {
      border: `1px solid ${colors.secondary[400]}`,     // hover:border-slate-400
      ring: `2px solid ${colors.secondary[200]}`,       // hover:ring-slate-200
    },
    
    // Active states - pressed/selected feedback
    active: {
      border: `2px solid ${colors.primary[950]}`,       // active:border-zinc-950
      ring: `2px solid ${colors.primary[950]}`,         // active:ring-zinc-950
    },
    
    // Disabled states - reduced visual prominence
    disabled: {
      border: `1px solid ${colors.secondary[200]}`,     // disabled:border-slate-200
      opacity: '0.5',                                   // disabled:opacity-50
    },
    
    // Error states - validation feedback
    error: {
      border: `2px solid ${colors.semantic.error[500]}`, // border-red-500
      ring: `2px solid ${colors.semantic.error[500]}`,   // ring-red-500
      background: colors.semantic.error[100],            // bg-red-100
    },
    
    // Success states - positive feedback
    success: {
      border: `2px solid ${colors.semantic.success[500]}`, // border-emerald-500
      ring: `2px solid ${colors.semantic.success[200]}`,   // ring-emerald-200
      background: colors.semantic.success[100],            // bg-emerald-100
    },
  },

  // Utility border styles - common complete border definitions
  utilities: {
    // Complete border style strings for direct CSS usage
    none: 'none',
    default: `1px solid ${colors.secondary[200]}`,       // Most common border
    subtle: `1px solid ${colors.secondary[100]}`,        // Subtle border
    thick: `2px solid ${colors.secondary[200]}`,         // Thick border
    accent: `2px solid ${colors.primary[950]}`,          // Accent border
    
    // Focus ring utility
    focusRing: `0 0 0 2px ${colors.primary[950]}`,       // Custom focus ring
    
    // Divider utilities
    dividerHorizontal: `1px solid ${colors.secondary[100]}`, // Horizontal divider
    dividerVertical: `1px solid ${colors.secondary[200]}`,   // Vertical divider
    
    // Callout borders
    calloutInfo: `4px solid ${colors.semantic.info[500]}`,     // Left info callout
    calloutWarning: `4px solid ${colors.semantic.warning[400]}`, // Left warning callout
    calloutError: `4px solid ${colors.semantic.error[500]}`,     // Left error callout
    calloutSuccess: `4px solid ${colors.semantic.success[500]}`, // Left success callout
  },

} as const;

// Type exports for TypeScript usage
export type BorderTokens = typeof borders;
export type BorderWidth = typeof borders.width;
export type BorderStyle = typeof borders.style;
export type BorderRadius = typeof borders.radius;
export type BorderColors = typeof borders.colors;
export type BorderRings = typeof borders.rings;
export type BorderDirectional = typeof borders.directional;
export type BorderComponents = typeof borders.components;
export type BorderStates = typeof borders.states;
export type BorderUtilities = typeof borders.utilities;

// Helper function to get border value by path
export function getBorder(path: string): any {
  const keys = path.split('.');
  let value: any = borders;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      throw new Error(`Border path "${path}" not found`);
    }
  }
  
  return value;
}

// Utility functions for common border patterns
export const borderUtils = {
  // Get complete border style for components
  getComponentBorder: (component: keyof typeof borders.components, variant: string = 'default') => {
    const componentBorders = borders.components[component];
    if (typeof componentBorders === 'object' && variant in componentBorders) {
      return componentBorders[variant as keyof typeof componentBorders];
    }
    return componentBorders;
  },
  
  // Get border radius
  getRadius: (size: keyof typeof borders.radius) => {
    return borders.radius[size];
  },
  
  // Get border color
  getColor: (color: keyof typeof borders.colors) => {
    return borders.colors[color];
  },
  
  // Get border width
  getWidth: (width: keyof typeof borders.width) => {
    return borders.width[width];
  },
  
  // Build complete border style
  buildBorder: (options: {
    width?: keyof typeof borders.width;
    style?: keyof typeof borders.style;
    color?: keyof typeof borders.colors;
    radius?: keyof typeof borders.radius;
  }) => {
    const {
      width = 'thin',
      style = 'solid',
      color = 'default',
      radius = 'md'
    } = options;
    
    return {
      borderWidth: borders.width[width],
      borderStyle: borders.style[style],
      borderColor: borders.colors[color],
      borderRadius: borders.radius[radius],
      border: `${borders.width[width]} ${borders.style[style]} ${borders.colors[color]}`,
    };
  },
  
  // Get focus ring style
  getFocusRing: (color: keyof typeof borders.rings.colors = 'focus') => {
    return {
      outline: 'none',
      ringWidth: borders.rings.width.medium,
      ringColor: borders.rings.colors[color],
      ringOffset: borders.rings.offset.md,
    };
  },
  
  // Get state border
  getStateBorder: (state: keyof typeof borders.states) => {
    return borders.states[state];
  },
} as const;

// Export default borders object
export default borders;
