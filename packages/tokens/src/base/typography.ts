/**
 * Boombox Design System - Typography Tokens
 * 
 * Typography system extracted from boombox-10.0 application codebase analysis.
 * 
 * Files analyzed for typography extraction:
 * - boombox-10.0/src/app/layout.tsx: Google Fonts configuration (Poppins, Inter)
 * - boombox-10.0/tailwind.config.ts: Font family extensions and CSS variables
 * - boombox-10.0/src/app/globals.css: Base typography styles for h1, h2, p elements
 * - boombox-10.0/src/app/components: 200+ component files for typography patterns
 * - boombox-10.0/src/app/admin: Admin dashboard typography usage
 * - boombox-10.0/src/app/api: Email template typography
 * 
 * Analysis Logic:
 * 1. Extracted all Tailwind typography classes (text-*, font-*, leading-*, tracking-*)
 * 2. Identified font family usage patterns (Inter primary, Poppins secondary)
 * 3. Analyzed heading hierarchy (h1: 3.5rem/3rem responsive, h2: 1.5rem, h3: text-xl)
 * 4. Mapped font weights (400, 600 from Google Fonts + medium, semibold, bold usage)
 * 5. Determined semantic color usage from existing color tokens
 * 6. Grouped responsive patterns (sm:text-*, md:text-*, lg:text-*)
 * 
 * Key Patterns Found:
 * - Primary font: Inter (system font, used in 90% of components)
 * - Secondary font: Poppins (display font, used for body text in layout)
 * - Heading hierarchy: h1 (3.5rem/3rem), h2 (text-4xl, text-2xl), h3 (text-xl)
 * - Common sizes: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-4xl
 * - Font weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
 * - Line heights: leading-5, leading-relaxed, leading-tight
 * - Letter spacing: tracking-tight (admin dashboard)
 * - Color usage: zinc-950 (primary), zinc-400 (muted), semantic colors for states
 */

import { colors } from './colors';

export const typography = {
  // Font family stack - based on Next.js Google Fonts configuration
  fontFamily: {
    // Primary font - Inter (system font for UI components)
    // Used in: buttons, forms, admin interface, navigation
    sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    
    // Secondary font - Poppins (display font for body text)
    // Used in: body text, marketing content, landing pages
    display: ['var(--font-poppins)', 'Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
    
    // Monospace font - for code, technical content
    // Used in: admin queries, technical documentation, code snippets
    mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
  },

  // Font size scale - based on Tailwind typography classes found in codebase
  fontSize: {
    // Extra small - text-xs (12px)
    // Used in: badges, small labels, metadata, timestamps
    xs: ['0.75rem', { lineHeight: '1rem' }],
    
    // Small - text-sm (14px)
    // Used in: form labels, secondary text, captions, admin inputs
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    
    // Base - text-base (16px) - default body text
    // Used in: paragraph text, form inputs, button text
    base: ['1rem', { lineHeight: '1.5rem' }],
    
    // Large - text-lg (18px)
    // Used in: emphasized text, large buttons, pricing
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    
    // Extra large - text-xl (20px)
    // Used in: section headings, popup titles, emphasized content
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    
    // 2X large - text-2xl (24px)
    // Used in: page subtitles, modal headings, section titles
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    
    // 3X large - text-3xl (30px)
    // Used in: responsive headings, documentation headings
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    
    // 4X large - text-4xl (36px)
    // Used in: hero headings, user page greetings, admin stats
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    
    // 5X large - text-5xl (48px)
    // Used in: large displays, hero sections
    '5xl': ['3rem', { lineHeight: '1' }],
    
    // 6X large - text-6xl (60px)
    // Used in: main hero headings
    '6xl': ['3.75rem', { lineHeight: '1' }],
  },

  // Font weight scale - based on Google Fonts weights and usage patterns
  fontWeight: {
    // Normal - font-normal (400)
    // Used in: body text, paragraphs, default text
    normal: '400',
    
    // Medium - font-medium (500)
    // Used in: emphasized text, form labels, secondary headings
    medium: '500',
    
    // Semi-bold - font-semibold (600)
    // Used in: headings, button text, important labels
    semibold: '600',
    
    // Bold - font-bold (700)
    // Used in: strong emphasis, modal titles, admin headings
    bold: '700',
  },

  // Line height scale - based on leading-* classes found in codebase
  lineHeight: {
    // None - leading-none (1)
    // Used in: large headings, hero text
    none: '1',
    
    // Tight - leading-tight (1.25)
    // Used in: headings, compact text
    tight: '1.25',
    
    // Snug - leading-snug (1.375)
    // Used in: subheadings, card titles
    snug: '1.375',
    
    // Normal - leading-normal (1.5)
    // Used in: body text, default line height
    normal: '1.5',
    
    // Relaxed - leading-relaxed (1.625)
    // Used in: long-form content, documentation
    relaxed: '1.625',
    
    // Loose - leading-loose (2)
    // Used in: spaced-out text, special formatting
    loose: '2',
    
    // Custom - leading-5 (1.25rem/20px)
    // Used in: popup descriptions, form text
    '5': '1.25rem',
  },

  // Letter spacing scale - based on tracking-* classes found in codebase
  letterSpacing: {
    // Tighter - tracking-tighter (-0.05em)
    // Used in: condensed text
    tighter: '-0.05em',
    
    // Tight - tracking-tight (-0.025em)
    // Used in: admin dashboard stats, large numbers
    tight: '-0.025em',
    
    // Normal - tracking-normal (0)
    // Used in: default text, body content
    normal: '0',
    
    // Wide - tracking-wide (0.025em)
    // Used in: spaced headings, emphasis
    wide: '0.025em',
    
    // Wider - tracking-wider (0.05em)
    // Used in: expanded text
    wider: '0.05em',
    
    // Widest - tracking-widest (0.1em)
    // Used in: very spaced text
    widest: '0.1em',
  },

  // Text colors - semantic usage based on color tokens
  colors: {
    // Primary text - main content color
    primary: colors.primary[950],      // #222222 - main brand color for primary text
    
    // Secondary text - supporting content
    secondary: colors.primary[500],    // #71717a - secondary text, less emphasis
    
    // Muted text - placeholder, disabled states
    muted: colors.primary[400],        // #a1a1aa - placeholder text, subtle content
    
    // Inverse text - text on dark backgrounds
    inverse: colors.primary[50],       // #fafafa - white text on dark backgrounds
    
    // Semantic colors for status and feedback
    success: colors.semantic.success[600],   // #059669 - success messages, positive feedback
    error: colors.semantic.error[500],       // #ef4444 - error messages, validation errors
    warning: colors.semantic.warning[500],   // #f59e0b - warning messages, alerts
    info: colors.semantic.info[600],         // #0891b2 - informational messages, links
    
    // Specialized colors
    link: colors.semantic.info[600],         // #0891b2 - hyperlinks, interactive text
    disabled: colors.primary[400],           // #a1a1aa - disabled text states
  },

  // Heading hierarchy - based on globals.css and component usage
  headings: {
    // h1 - Main page headings
    h1: {
      fontSize: '3.5rem',         // 56px desktop
      lineHeight: '1',            // leading-none
      fontWeight: '600',          // font-semibold
      color: colors.primary[950], // #222222
      // Responsive: 3rem (48px) on mobile
      responsive: {
        mobile: '3rem',
        desktop: '3.5rem',
      },
    },
    
    // h2 - Section headings, user greetings
    h2: {
      fontSize: '1.5rem',         // 24px (text-2xl)
      lineHeight: '2rem',         // leading-8
      fontWeight: '400',          // font-normal (base style)
      color: colors.primary[950], // #222222
      // Common variations: text-4xl font-semibold
      variants: {
        large: {
          fontSize: '2.25rem',    // text-4xl
          fontWeight: '600',      // font-semibold
        },
      },
    },
    
    // h3 - Subsection headings, modal titles
    h3: {
      fontSize: '1.25rem',        // 20px (text-xl)
      lineHeight: '1.75rem',      // leading-7
      fontWeight: '600',          // font-semibold
      color: colors.primary[950], // #222222
    },
    
    // h4 - Card headings, form sections
    h4: {
      fontSize: '1.125rem',       // 18px (text-lg)
      lineHeight: '1.75rem',      // leading-7
      fontWeight: '600',          // font-semibold
      color: colors.primary[950], // #222222
    },
    
    // h5 - Small headings, labels
    h5: {
      fontSize: '1rem',           // 16px (text-base)
      lineHeight: '1.5rem',       // leading-6
      fontWeight: '600',          // font-semibold
      color: colors.primary[950], // #222222
    },
    
    // h6 - Smallest headings, metadata
    h6: {
      fontSize: '0.875rem',       // 14px (text-sm)
      lineHeight: '1.25rem',      // leading-5
      fontWeight: '600',          // font-semibold
      color: colors.primary[950], // #222222
    },
  },

  // Body text styles - based on paragraph and content usage
  body: {
    // Default paragraph text
    default: {
      fontSize: '1rem',           // 16px (text-base)
      lineHeight: '1.5rem',       // leading-6
      fontWeight: '400',          // font-normal
      color: colors.primary[950], // #222222
    },
    
    // Large body text
    large: {
      fontSize: '1.125rem',       // 18px (text-lg)
      lineHeight: '1.75rem',      // leading-7
      fontWeight: '400',          // font-normal
      color: colors.primary[950], // #222222
    },
    
    // Small body text
    small: {
      fontSize: '0.875rem',       // 14px (text-sm)
      lineHeight: '1.25rem',      // leading-5
      fontWeight: '400',          // font-normal
      color: colors.primary[950], // #222222
    },
    
    // Caption text
    caption: {
      fontSize: '0.75rem',        // 12px (text-xs)
      lineHeight: '1rem',         // leading-4
      fontWeight: '400',          // font-normal
      color: colors.primary[500], // #71717a - secondary color
    },
  },

  // Utility classes - special text treatments
  utilities: {
    // Emphasized text
    emphasis: {
      fontWeight: '600',          // font-semibold
      color: colors.primary[950], // #222222
    },
    
    // Strong text
    strong: {
      fontWeight: '700',          // font-bold
      color: colors.primary[950], // #222222
    },
    
    // Subtle text
    subtle: {
      color: colors.primary[500], // #71717a - secondary color
    },
    
    // Muted text
    muted: {
      color: colors.primary[400], // #a1a1aa - muted color
    },
    
    // Underlined text (links)
    underline: {
      textDecoration: 'underline',
      textUnderlineOffset: '2px', // underline-offset-2
    },
    
    // Truncated text
    truncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    
    // Balanced text (for headings)
    balance: {
      textWrap: 'balance',        // Custom utility from globals.css
    },
  },

  // Responsive patterns - common breakpoint combinations
  responsive: {
    // Hero heading pattern
    hero: {
      base: {
        fontSize: '3rem',         // 48px mobile
        lineHeight: '1',          // leading-none
        fontWeight: '600',        // font-semibold
      },
      sm: {
        fontSize: '3.5rem',       // 56px desktop
        lineHeight: '1',          // leading-none
      },
    },
    
    // Section heading pattern
    section: {
      base: {
        fontSize: '1.5rem',       // text-2xl mobile
        lineHeight: '2rem',       // leading-8
      },
      sm: {
        fontSize: '2.25rem',      // text-4xl desktop
        lineHeight: '2.5rem',     // leading-10
      },
    },
    
    // Body text pattern
    body: {
      base: {
        fontSize: '0.875rem',     // text-sm mobile
        lineHeight: '1.25rem',    // leading-5
      },
      sm: {
        fontSize: '1rem',         // text-base desktop
        lineHeight: '1.5rem',     // leading-6
      },
    },
    
    // Caption pattern
    caption: {
      base: {
        fontSize: '0.75rem',      // text-xs mobile
        lineHeight: '1rem',       // leading-4
      },
      md: {
        fontSize: '0.875rem',     // text-sm desktop
        lineHeight: '1.25rem',    // leading-5
      },
    },
  },

} as const;

// Type exports for TypeScript usage
export type TypographyTokens = typeof typography;
export type FontFamily = typeof typography.fontFamily;
export type FontSize = typeof typography.fontSize;
export type FontWeight = typeof typography.fontWeight;
export type LineHeight = typeof typography.lineHeight;
export type LetterSpacing = typeof typography.letterSpacing;
export type TypographyColors = typeof typography.colors;
export type Headings = typeof typography.headings;
export type BodyText = typeof typography.body;
export type TypographyUtilities = typeof typography.utilities;
export type ResponsiveTypography = typeof typography.responsive;

// Helper function to get typography value by path
export function getTypography(path: string): any {
  const keys = path.split('.');
  let value: any = typography;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      throw new Error(`Typography path "${path}" not found`);
    }
  }
  
  return value;
}

// Utility functions for common typography patterns
export const typographyUtils = {
  // Get heading styles
  getHeading: (level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
    return typography.headings[level];
  },
  
  // Get body text styles
  getBody: (size: 'default' | 'large' | 'small' | 'caption' = 'default') => {
    return typography.body[size];
  },
  
  // Get font family
  getFontFamily: (family: 'sans' | 'display' | 'mono' = 'sans') => {
    return typography.fontFamily[family];
  },
  
  // Get responsive typography
  getResponsive: (pattern: 'hero' | 'section' | 'body' | 'caption', breakpoint: 'base' | 'sm' = 'base') => {
    return typography.responsive[pattern][breakpoint as keyof typeof typography.responsive[typeof pattern]];
  },
  
  // Build complete text style object
  buildTextStyle: (options: {
    size?: keyof typeof typography.fontSize;
    weight?: keyof typeof typography.fontWeight;
    color?: keyof typeof typography.colors;
    lineHeight?: keyof typeof typography.lineHeight;
    letterSpacing?: keyof typeof typography.letterSpacing;
    family?: keyof typeof typography.fontFamily;
  }) => {
    const {
      size = 'base',
      weight = 'normal',
      color = 'primary',
      lineHeight = 'normal',
      letterSpacing = 'normal',
      family = 'sans'
    } = options;
    
    return {
      fontFamily: typography.fontFamily[family],
      fontSize: typography.fontSize[size][0],
      lineHeight: typography.fontSize[size][1]?.lineHeight || typography.lineHeight[lineHeight],
      fontWeight: typography.fontWeight[weight],
      color: typography.colors[color],
      letterSpacing: typography.letterSpacing[letterSpacing],
    };
  },
} as const;

// Export default typography object
export default typography;
