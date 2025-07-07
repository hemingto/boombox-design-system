/**
 * Boombox Design System - Color Tokens
 * 
 * Color palette extracted from boombox-10.0 application codebase analysis.
 * 
 * Files analyzed for color extraction:
 * - tailwind.config.ts: Custom brand colors for payment providers
 * - globals.css: Base typography colors (#09090b)
 * - Hero section, landing pages: Primary brand usage (zinc-950, slate-100)
 * - Form components: Input states, validation colors
 * - Interactive elements: Button states, hover effects
 * - Calendar views: Event colors, state indicators
 * - User interface: Skeleton loaders, backgrounds
 * 
 * Semantic groupings determined by:
 * - Primary: Main brand identity (zinc-950 for primary actions)
 * - Secondary: Supporting colors (slate variants for backgrounds)
 * - Neutral: Gray scale for text and borders
 * - Semantic: Status indicators (success, error, warning, info)
 */

export const colors = {
  // Primary brand colors - zinc-950 is the main brand color used for primary actions and text
  primary: {
    50: '#fafafa',   // zinc-50 - Light backgrounds
    100: '#f4f4f5',  // zinc-100 - Card backgrounds  
    400: '#a1a1aa',  // zinc-400 - Placeholder text
    500: '#71717a',  // zinc-500 - Secondary text
    700: '#404040',  // Darker gray for active states
    800: '#2d2d2d',  // Slightly lighter than brand for hover states
    950: '#222222',  // Main brand color
  },

  // Secondary colors - slate variants used for backgrounds and UI elements
  secondary: {
    50: '#f8fafc',   // slate-50 - Used for skeleton loaders and light backgrounds
    100: '#f1f5f9',  // slate-100 - Primary background color for inputs and cards
    200: '#e2e8f0',  // slate-200 - Active states and borders
    400: '#94a3b8',  // slate-400 - Disabled states
    500: '#64748b',  // slate-500 - Secondary text
  },

  // Semantic colors for status indicators and user feedback
  semantic: {
    // Success states - emerald variants used for positive feedback
    success: {
      100: '#d1fae5',  // emerald-100 - Success input backgrounds
      200: '#a7f3d0',  // emerald-200 - Success borders
      500: '#10b981',  // emerald-500 - Success text and icons, map polygons
      600: '#059669',  // emerald-600 - Success buttons, calendar events
      700: '#047857',  // emerald-700 - Button hover states
    },

    // Error states - red variants for validation and error feedback
    error: {
      50: '#fef2f2',   // red-50 - Error input backgrounds
      100: '#fee2e2',  // red-100 - Error backgrounds in forms
      200: '#fecaca',  // red-200 - Error borders
      500: '#ef4444',  // red-500 - Error text, icons, calendar events
      600: '#dc2626',  // red-600 - Error buttons
      700: '#b91c1c',  // red-700 - Button hover states
    },

    // Warning states - amber variants for alerts and warnings
    warning: {
      50: '#fffbeb',   // amber-50 - Warning backgrounds
      100: '#fef3c7',  // amber-100 - Calendar event backgrounds  
      200: '#fde68a',  // amber-200 - Warning borders
      400: '#fbbf24',  // amber-400 - Warning borders and icons
      500: '#f59e0b',  // amber-500 - Warning text
    },

    // Info states - cyan variants for informational feedback
    info: {
      100: '#cffafe',  // cyan-100 - Calendar event backgrounds
      200: '#a5f3fc',  // cyan-200 - Info borders
      500: '#06b6d4',  // cyan-500 - Info icons and actions
      600: '#0891b2',  // cyan-600 - Info buttons, primary actions
    },
  },

} as const;

// Type exports for TypeScript usage
export type ColorTokens = typeof colors;
export type ColorScale = typeof colors.primary;
export type SemanticColors = typeof colors.semantic;

// Helper function to get color value by path
export function getColor(path: string): string {
  const keys = path.split('.');
  let value: any = colors;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      throw new Error(`Color path "${path}" not found`);
    }
  }
  
  if (typeof value !== 'string') {
    throw new Error(`Color path "${path}" does not resolve to a string value`);
  }
  
  return value;
}

// Export default colors object
export default colors;
