/**
 * Boombox Design System - Shadow Tokens
 * 
 * Shadow system extracted from boombox-10.0 application codebase analysis.
 * 
 * Files analyzed for shadow extraction:
 * - boombox-10.0/tailwind.config.ts: Custom shadow configuration ('custom-shadow': '0px 6px 20px 0px rgba(0,0,0,0.2)')
 * - boombox-10.0/src/app/components: 200+ component files with shadow patterns
 * - boombox-10.0/src/app/admin: Admin dashboard shadow usage (shadow-sm, shadow-lg, shadow-xl)
 * - boombox-10.0/src/app/lib/email.ts: Email template shadow styles (box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3))
 * - boombox-10.0/src/app/api/admin: API route email shadows (box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1))
 * - boombox-10.0/src/app/components/reusablecomponents: Dropdown, modal, and card shadows
 * - boombox-10.0/src/app/components/user-page: User dashboard shadow patterns
 * - boombox-10.0/src/app/components/mover-account: Mover interface shadow styles
 * - boombox-10.0/src/app/components/navbar: Navigation shadow patterns
 * 
 * Analysis Logic:
 * 1. Extracted all Tailwind shadow classes (shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-none)
 * 2. Identified custom shadow usage ('shadow-custom-shadow' - most common - 100+ occurrences)
 * 3. Analyzed interactive shadow states (hover:shadow-md, hover:shadow-lg, hover:bg-slate-50)
 * 4. Mapped component-specific shadow patterns (cards, modals, dropdowns, buttons)
 * 5. Grouped semantic usage (elevation hierarchy, interactive states, focus rings)
 * 6. Prioritized Tailwind's shadow system for consistency with existing patterns
 * 7. Extracted email template shadow styles for cross-platform consistency
 * 
 * Key Patterns Found:
 * - Primary shadow: 'shadow-custom-shadow' (0px 6px 20px 0px rgba(0,0,0,0.2)) - most common
 * - Elevation: shadow-sm (skeleton cards), shadow-lg (modals), shadow-xl (dialogs)
 * - Interactive: hover:shadow-md (card hovers), hover:shadow-lg (button hovers)
 * - Dropdowns: shadow-lg with ring-1 ring-black ring-opacity-5 (admin dropdowns)
 * - Cards: shadow-sm (skeleton), shadow-custom-shadow (content cards)
 * - Modals: shadow-xl (dialogs), shadow-lg (notifications)
 * - Buttons: shadow-sm (secondary buttons), shadow-custom-shadow (primary actions)
 * - Focus: ring-based shadows with color variations
 */

import { colors } from './colors';

export const shadows = {
  // Elevation scale - visual hierarchy through shadow depth
  // Based on Tailwind CSS default shadow system + custom shadow usage
  elevation: {
    none: 'none',                                           // shadow-none - no shadow
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',                  // shadow-xs - minimal shadow
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)', // shadow-sm - skeleton cards, subtle elevation
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)', // shadow-md - default card shadow
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)', // shadow-lg - dropdown menus, notifications
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)', // shadow-xl - modals, dialogs
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',          // shadow-2xl - large modals, overlays
    
    // Custom shadow from boombox-10.0 (most common pattern - 100+ occurrences)
    custom: '0px 6px 20px 0px rgba(0, 0, 0, 0.2)',         // shadow-custom-shadow - primary card/component shadow
  },

  // Shadow colors - semantic color usage for different contexts
  // Based on color tokens and shadow color variations found in codebase
  colors: {
    // Default shadow colors
    default: 'rgb(0 0 0 / 0.1)',                           // Standard shadow color
    subtle: 'rgb(0 0 0 / 0.05)',                           // Subtle shadow color (skeleton cards)
    strong: 'rgb(0 0 0 / 0.25)',                           // Strong shadow color (2xl shadows)
    
    // Colored shadows for branded elements
    primary: `rgb(${colors.primary[950].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`, // Primary color shadow
    secondary: `rgb(${colors.secondary[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`, // Secondary color shadow
    
    // Semantic colored shadows
    success: `rgb(${colors.semantic.success[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.2)`, // Success shadow
    error: `rgb(${colors.semantic.error[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.2)`, // Error shadow
    warning: `rgb(${colors.semantic.warning[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.2)`, // Warning shadow
    info: `rgb(${colors.semantic.info[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.2)`, // Info shadow
    
    // Email template shadows (from email.ts analysis)
    email: {
      button: 'rgba(79, 70, 229, 0.3)',                    // Email button shadow (indigo-600 with opacity)
      card: 'rgba(0, 0, 0, 0.1)',                          // Email card shadow
    },
  },

  // Interactive shadow states - hover, focus, active states
  // Based on interactive shadow patterns found in component files
  interactive: {
    // Hover states - shadow changes on hover
    hover: {
      subtle: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)', // hover:shadow-md
      moderate: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)', // hover:shadow-lg
      strong: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)', // hover:shadow-xl
    },
    
    // Focus states - focus ring shadows
    focus: {
      default: `0 0 0 3px rgb(${colors.primary[950].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`, // Primary focus ring
      error: `0 0 0 3px rgb(${colors.semantic.error[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`, // Error focus ring
      success: `0 0 0 3px rgb(${colors.semantic.success[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`, // Success focus ring
    },
    
    // Active states - pressed/active shadows
    active: {
      pressed: '0 1px 2px 0 rgb(0 0 0 / 0.05)',            // Pressed button shadow (reduced)
      selected: '0 0 0 2px rgb(0 0 0 / 0.1)',              // Selected item shadow
    },
    
    // Disabled states
    disabled: {
      shadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',             // Disabled element shadow
      opacity: '0.5',                                       // Disabled opacity
    },
  },

  // Semantic shadows - status-based shadow styles
  // Based on semantic color usage and validation states
  semantic: {
    // Success shadows
    success: {
      subtle: `0 1px 3px 0 rgb(${colors.semantic.success[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
      moderate: `0 4px 6px -1px rgb(${colors.semantic.success[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
      strong: `0 10px 15px -3px rgb(${colors.semantic.success[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.2)`,
    },
    
    // Error shadows
    error: {
      subtle: `0 1px 3px 0 rgb(${colors.semantic.error[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
      moderate: `0 4px 6px -1px rgb(${colors.semantic.error[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
      strong: `0 10px 15px -3px rgb(${colors.semantic.error[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.2)`,
    },
    
    // Warning shadows
    warning: {
      subtle: `0 1px 3px 0 rgb(${colors.semantic.warning[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
      moderate: `0 4px 6px -1px rgb(${colors.semantic.warning[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
      strong: `0 10px 15px -3px rgb(${colors.semantic.warning[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.2)`,
    },
    
    // Info shadows
    info: {
      subtle: `0 1px 3px 0 rgb(${colors.semantic.info[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
      moderate: `0 4px 6px -1px rgb(${colors.semantic.info[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
      strong: `0 10px 15px -3px rgb(${colors.semantic.info[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.2)`,
    },
  },

  // Component-specific shadow styles - complete shadow definitions for common components
  // Based on component shadow patterns found throughout the codebase
  components: {
    // Card shadows - most common component pattern
    card: {
      // Skeleton cards - shadow-sm pattern
      skeleton: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
      
      // Default cards - shadow-custom-shadow pattern (most common)
      default: '0px 6px 20px 0px rgba(0, 0, 0, 0.2)',
      
      // Interactive cards - hover shadow transition
      interactive: {
        default: '0px 6px 20px 0px rgba(0, 0, 0, 0.2)',
        hover: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
      },
      
      // Elevated cards - stronger shadow
      elevated: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
    },
    
    // Button shadows - button component patterns
    button: {
      // Primary buttons - no shadow (filled buttons)
      primary: 'none',
      
      // Secondary buttons - shadow-sm pattern
      secondary: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
      
      // Outline buttons - shadow-sm pattern
      outline: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
      
      // Floating action buttons - custom shadow
      floating: '0px 6px 20px 0px rgba(0, 0, 0, 0.2)',
      
      // Button hover states
      hover: {
        secondary: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
        outline: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
      },
    },
    
    // Modal shadows - dialog and popup patterns
    modal: {
      // Standard modals - shadow-xl pattern
      default: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
      
      // Large modals - shadow-2xl pattern
      large: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      
      // Overlay backdrop
      backdrop: 'rgba(0, 0, 0, 0.5)',
    },
    
    // Dropdown shadows - menu and selection patterns
    dropdown: {
      // Standard dropdowns - shadow-custom-shadow pattern
      default: '0px 6px 20px 0px rgba(0, 0, 0, 0.2)',
      
      // Admin dropdowns - shadow-lg with ring
      admin: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
      
      // Select dropdowns - shadow-lg pattern
      select: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
    },
    
    // Navigation shadows - header and menu patterns
    navigation: {
      // Header shadow - shadow-sm pattern
      header: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
      
      // Mobile menu shadow
      mobile: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
      
      // Popover shadows - shadow-custom-shadow pattern
      popover: '0px 6px 20px 0px rgba(0, 0, 0, 0.2)',
    },
    
    // Form shadows - input and form component patterns
    form: {
      // Input fields - no shadow by default
      input: 'none',
      
      // Input focus - ring shadow
      inputFocus: `0 0 0 2px rgb(${colors.primary[950].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
      
      // Input error - ring shadow
      inputError: `0 0 0 2px rgb(${colors.semantic.error[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
      
      // Form containers - shadow-custom-shadow pattern
      container: '0px 6px 20px 0px rgba(0, 0, 0, 0.2)',
    },
    
    // Tooltip shadows - tooltip and popover patterns
    tooltip: {
      default: '0px 6px 20px 0px rgba(0, 0, 0, 0.2)',       // shadow-custom-shadow pattern
      subtle: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
    },
    
    // Loading shadows - skeleton and loading state patterns
    loading: {
      skeleton: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)', // shadow-sm pattern
      spinner: 'none',                                      // No shadow for spinners
    },
  },

  // Special shadow effects - unique shadow patterns
  // Based on special effects found in the codebase
  special: {
    // Inner shadows - inset effects
    inner: {
      subtle: 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
      moderate: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
      strong: 'inset 0 4px 8px 0 rgb(0 0 0 / 0.15)',
    },
    
    // Glow effects - colored shadow glows
    glow: {
      primary: `0 0 20px rgb(${colors.primary[950].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.3)`,
      success: `0 0 20px rgb(${colors.semantic.success[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.3)`,
      error: `0 0 20px rgb(${colors.semantic.error[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.3)`,
      warning: `0 0 20px rgb(${colors.semantic.warning[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.3)`,
      info: `0 0 20px rgb(${colors.semantic.info[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.3)`,
    },
    
    // Multiple shadows - layered shadow effects
    layered: {
      card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06), 0 0 0 1px rgb(0 0 0 / 0.05)',
      modal: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04), 0 0 0 1px rgb(0 0 0 / 0.05)',
    },
    
    // Email shadows - email template specific shadows
    email: {
      button: '0 4px 12px rgba(79, 70, 229, 0.3)',          // Email button shadow (indigo with opacity)
      card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',            // Email card shadow
      container: '0 2px 4px rgba(0, 0, 0, 0.1)',            // Email container shadow
    },
  },

  // Utility shadow styles - common complete shadow definitions
  // Based on frequently used shadow combinations
  utilities: {
    // Complete shadow style strings for direct CSS usage
    none: 'none',
    subtle: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
    default: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
    moderate: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
    strong: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
    
    // Custom shadow - most common pattern in boombox-10.0
    custom: '0px 6px 20px 0px rgba(0, 0, 0, 0.2)',
    
    // Transition utilities
    transition: 'box-shadow 0.15s ease-in-out',            // Shadow transition
    transitionAll: 'all 0.15s ease-in-out',               // All properties transition
    
    // Ring utilities (focus rings)
    ring: `0 0 0 2px rgb(${colors.primary[950].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
    ringError: `0 0 0 2px rgb(${colors.semantic.error[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
    ringSuccess: `0 0 0 2px rgb(${colors.semantic.success[500].replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(' ')} / 0.1)`,
  },

} as const;

// Type exports for TypeScript usage
export type ShadowTokens = typeof shadows;
export type ElevationShadows = typeof shadows.elevation;
export type ShadowColors = typeof shadows.colors;
export type InteractiveShadows = typeof shadows.interactive;
export type SemanticShadows = typeof shadows.semantic;
export type ComponentShadows = typeof shadows.components;
export type SpecialShadows = typeof shadows.special;
export type ShadowUtilities = typeof shadows.utilities;

// Helper function to get shadow value by path
export function getShadow(path: string): any {
  const keys = path.split('.');
  let value: any = shadows;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      throw new Error(`Shadow path "${path}" not found`);
    }
  }
  
  return value;
}

// Utility functions for common shadow patterns
export const shadowUtils = {
  // Get elevation shadow
  getElevation: (level: keyof typeof shadows.elevation) => {
    return shadows.elevation[level];
  },
  
  // Get component shadow
  getComponent: (component: keyof typeof shadows.components, variant: string = 'default') => {
    const componentShadows = shadows.components[component];
    if (typeof componentShadows === 'object' && variant in componentShadows) {
      return componentShadows[variant as keyof typeof componentShadows];
    }
    return componentShadows;
  },
  
  // Get interactive shadow
  getInteractive: (state: keyof typeof shadows.interactive, variant: string = 'default') => {
    const interactiveShadows = shadows.interactive[state];
    if (typeof interactiveShadows === 'object' && variant in interactiveShadows) {
      return interactiveShadows[variant as keyof typeof interactiveShadows];
    }
    return interactiveShadows;
  },
  
  // Get semantic shadow
  getSemantic: (type: keyof typeof shadows.semantic, intensity: 'subtle' | 'moderate' | 'strong' = 'moderate') => {
    return shadows.semantic[type][intensity];
  },
  
  // Build custom shadow
  buildShadow: (options: {
    x?: number;
    y?: number;
    blur?: number;
    spread?: number;
    color?: string;
    opacity?: number;
  }) => {
    const {
      x = 0,
      y = 4,
      blur = 6,
      spread = -1,
      color = '0 0 0',
      opacity = 0.1
    } = options;
    
    return `${x}px ${y}px ${blur}px ${spread}px rgb(${color} / ${opacity})`;
  },
  
  // Get focus ring shadow
  getFocusRing: (color: keyof typeof shadows.colors = 'default') => {
    return `0 0 0 2px ${shadows.colors[color]}`;
  },
  
  // Combine multiple shadows
  combineShadows: (...shadowValues: string[]) => {
    return shadowValues.filter(shadow => shadow && shadow !== 'none').join(', ');
  },
  
  // Get shadow with transition
  getTransitionShadow: (shadow: string) => {
    return {
      boxShadow: shadow,
      transition: shadows.utilities.transition,
    };
  },
} as const;

// Export default shadows object
export default shadows;
