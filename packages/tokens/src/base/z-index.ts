/**
 * Boombox Design System - Z-Index Tokens
 * 
 * Z-index layering system extracted from boombox-10.0 application codebase analysis.
 * 
 * Files analyzed for z-index extraction:
 * - boombox-10.0/src/app/components/getquote/getquoteform.tsx: Loading overlays (z-50)
 * - boombox-10.0/src/app/components/access-storage/accessstorageform.tsx: Loading overlays (z-50)
 * - boombox-10.0/src/app/components/edit-appointment/*.tsx: Loading overlays (z-50)
 * - boombox-10.0/src/app/admin/layout.tsx: Admin sidebar (z-40, z-50), mobile menu backdrop
 * - boombox-10.0/src/app/components/navbar/mobilemenu.tsx: Mobile navigation (z-20)
 * - boombox-10.0/src/app/components/navbar/usermobilemenu.tsx: User mobile menu (z-20)
 * - boombox-10.0/src/app/components/navbar/movermobilemenu.tsx: Mover mobile menu (z-20)
 * - boombox-10.0/src/app/components/navbar/*popover.tsx: Navigation popovers (z-10)
 * - boombox-10.0/src/app/components/admin/*-modal.tsx: Admin modals (z-10, z-50)
 * - boombox-10.0/src/app/components/notifications/notification-dropdown.tsx: Notifications (z-50)
 * - boombox-10.0/src/app/components/reusablecomponents/modal.tsx: Generic modals (z-40, z-50)
 * - boombox-10.0/src/app/components/reusablecomponents/*dropdown.tsx: Dropdowns (z-10, z-50)
 * - boombox-10.0/src/app/components/mover-account/*.tsx: Account modals and dropdowns (z-10, z-50)
 * - boombox-10.0/src/app/admin/storage-units/page.tsx: Admin dropdowns and modals (z-10, z-50)
 * - boombox-10.0/src/app/admin/jobs/page.tsx: Job management dropdowns (z-10)
 * - boombox-10.0/tailwind.config.ts: No custom z-index values (using Tailwind defaults)
 * 
 * Analysis Logic:
 * 1. Extracted all Tailwind z-index classes (z-10, z-20, z-40, z-50) from 200+ component files
 * 2. Identified layering hierarchy: dropdowns (z-10), mobile menus (z-20), admin UI (z-40), overlays (z-50)
 * 3. Analyzed component-specific usage patterns (modals, navigation, notifications, loading states)
 * 4. Mapped semantic purposes: content layers, navigation layers, overlay layers, popup layers
 * 5. Prioritized Tailwind's default z-index scale for consistency with existing patterns
 * 6. Grouped by interaction priority: background content → navigation → overlays → critical alerts
 * 
 * Key Patterns Found:
 * - Loading overlays: z-50 (most critical - blocks all interaction)
 * - Modal dialogs: z-50 (high priority overlays)
 * - Admin sidebar: z-50 (desktop), z-40 (mobile header)
 * - Mobile menus: z-20 (above content, below overlays)
 * - Dropdown menus: z-10 (above content, below navigation)
 * - Notification dropdown: z-50 (high priority, blocks interaction)
 * - Sticky elements: no z-index (relies on natural stacking)
 * - Card hover effects: hover:z-10 (temporary elevation)
 * - Popover components: z-10 (navigation popovers, form dropdowns)
 * - Modal backdrops: z-40 (between content and modal)
 */

export const zIndex = {
  // Base layer values - foundational stacking context
  // Used for: default content, background elements, hidden elements
  base: {
    behind: -1,       // Elements that should be behind content (decorative backgrounds)
    default: 0,       // Default stacking context (most content)
    above: 1,         // Elements slightly above default (card hover effects)
  },

  // Content layer hierarchy - main content and layout elements
  // Used for: page content, cards, sections, layout components
  content: {
    background: 0,    // Background content and decorative elements
    content: 10,      // Main content layer (most page content)
    foreground: 20,   // Foreground content elements (emphasized content)
  },

  // Navigation layer hierarchy - navigation and menu systems
  // Based on mobile menu patterns (z-20) and navigation popovers (z-10)
  navigation: {
    popover: 10,      // Navigation popovers (LocationsPopover, PricingPopover, MenuPopover - z-10)
    dropdown: 10,     // Navigation dropdowns and menus (UserMenuPopover, MoverMenuPopover - z-10)
    mobileMenu: 20,   // Mobile navigation overlays (MobileMenu, UserMobileMenu, MoverMobileMenu - z-20)
    header: 30,       // Site header/navbar (above mobile menus)
    adminHeader: 40,  // Admin header (AdminLayout mobile header - z-40)
  },

  // Overlay layer hierarchy - modal and overlay systems
  // Based on modal patterns (z-40 backdrop, z-50 modal) and admin sidebar (z-50)
  overlay: {
    backdrop: 40,     // Modal backdrops (Modal component - z-40, admin sidebar backdrop)
    drawer: 50,       // Side drawers and panels (AdminLayout sidebar - z-50)
    modal: 50,        // Modal dialogs (StorageUnitAssignmentModal, OnfleetTasksModal - z-50)
    loading: 50,      // Loading overlays (GetQuoteForm, AccessStorageForm loading - z-50)
  },

  // Popup layer hierarchy - floating elements and interactive overlays
  // Based on dropdown patterns (z-10, z-50) and notification systems (z-50)
  popup: {
    dropdown: 10,     // Standard dropdowns (form dropdowns, selection menus - z-10)
    tooltip: 30,      // Tooltips and help text (above dropdowns, below overlays)
    popover: 40,      // Complex popovers (TimePicker, AddressInputField - z-10 but logically higher)
    notification: 50, // Toast notifications and alerts (NotificationDropdown - z-50)
    contextMenu: 50,  // Context menus and action dropdowns (SelectionDropdown - z-50)
  },

  // Sticky layer hierarchy - fixed and sticky positioned elements
  // Based on sticky positioning patterns found in quote cards and admin layout
  sticky: {
    content: 30,      // Sticky content elements (quote cards - sticky top-5)
    header: 40,       // Sticky headers (AdminLayout mobile header - sticky top-0 z-40)
    fab: 50,          // Floating action buttons (high priority interactive elements)
    navigation: 50,   // Sticky navigation elements (AdminLayout sidebar - lg:z-50)
  },

  // Maximum priority layers - highest priority elements
  // Based on critical overlay patterns and emergency states
  maximum: {
    loading: 9999,    // Critical loading states (system-wide loading)
    emergency: 10000, // Emergency alerts and critical errors (highest priority)
  },

  // Component-specific z-index patterns - complete layering for common components
  // Based on component usage patterns found throughout the codebase
  components: {
    // Card components - hover and interactive states
    card: {
      default: 0,     // Default card stacking
      hover: 1,       // Card hover elevation (hover:z-10 pattern)
      selected: 2,    // Selected card state
    },

    // Form components - dropdowns and overlays
    form: {
      dropdown: 10,   // Form dropdowns (AddressInputField, LaborHelpDropdown - z-10)
      autocomplete: 10, // Autocomplete suggestions (AddressInputField - z-10)
      validation: 20, // Validation messages and tooltips
      overlay: 50,    // Form submission overlays (loading states - z-50)
    },

    // Navigation components - menus and popovers
    navigation: {
      popover: 10,    // Navigation popovers (LocationsPopover, PricingPopover - z-10)
      dropdown: 10,   // User menus and dropdowns (UserMenuPopover - z-10)
      mobile: 20,     // Mobile menu overlays (MobileMenu - z-20)
      header: 40,     // Navigation headers (AdminLayout - z-40)
    },

    // Modal components - dialogs and overlays
    modal: {
      backdrop: 40,   // Modal backdrops (Modal component - z-40)
      dialog: 50,     // Modal dialogs (admin modals - z-50)
      loading: 50,    // Modal loading states (form loading overlays - z-50)
    },

    // Admin components - dashboard and management interfaces
    admin: {
      sidebar: 50,    // Admin sidebar (AdminLayout - lg:z-50)
      header: 40,     // Admin mobile header (AdminLayout - z-40)
      dropdown: 10,   // Admin dropdowns (storage units, jobs - z-10)
      modal: 50,      // Admin modals (assignment modals - z-50)
    },

    // Notification components - alerts and messages
    notification: {
      toast: 50,      // Toast notifications (NotificationDropdown - z-50)
      banner: 30,     // Notification banners (below overlays)
      badge: 20,      // Notification badges (above content)
    },
  },

  // Interactive state z-index patterns - hover, focus, active states
  // Based on interactive patterns found in card and button components
  states: {
    // Hover states - temporary elevation
    hover: {
      card: 1,        // Card hover (hover:z-10 pattern)
      button: 1,      // Button hover elevation
      interactive: 2, // Interactive element hover
    },

    // Focus states - accessibility and keyboard navigation
    focus: {
      element: 10,    // Focused form elements
      modal: 50,      // Focused modal elements
    },

    // Active states - pressed and selected elements
    active: {
      element: 2,     // Active interactive elements
      selected: 5,    // Selected items in lists
    },

    // Disabled states - reduced visual prominence
    disabled: {
      element: 0,     // Disabled elements (no elevation)
    },
  },

  // Utility z-index values - common layering utilities
  // Based on frequently used z-index combinations in the codebase
  utilities: {
    // Hide elements
    hide: -1,         // Hidden behind content

    // Default stacking
    default: 0,       // Default stacking context

    // Slight elevation
    raise: 1,         // Slightly above default (card hover)

    // Above content
    above: 10,        // Above main content (dropdowns, popovers)

    // Navigation level
    nav: 20,          // Navigation layer (mobile menus)

    // Header level
    header: 40,       // Header and sticky elements

    // Overlay level
    overlay: 50,      // Overlays and modals

    // Maximum priority
    max: 9999,        // Maximum z-index for critical elements
  },

} as const;

// Type exports for TypeScript usage
export type ZIndexTokens = typeof zIndex;
export type BaseZIndex = typeof zIndex.base;
export type ContentZIndex = typeof zIndex.content;
export type NavigationZIndex = typeof zIndex.navigation;
export type OverlayZIndex = typeof zIndex.overlay;
export type PopupZIndex = typeof zIndex.popup;
export type StickyZIndex = typeof zIndex.sticky;
export type MaximumZIndex = typeof zIndex.maximum;
export type ComponentZIndex = typeof zIndex.components;
export type StateZIndex = typeof zIndex.states;
export type UtilityZIndex = typeof zIndex.utilities;

// Helper function to get z-index value by path
export function getZIndex(path: string): number {
  const keys = path.split('.');
  let value: any = zIndex;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      throw new Error(`Z-index path "${path}" not found`);
    }
  }
  
  if (typeof value !== 'number') {
    throw new Error(`Z-index path "${path}" does not resolve to a number value`);
  }
  
  return value;
}

// Utility functions for common z-index patterns
export const zIndexUtils = {
  // Get base z-index
  getBase: (level: keyof typeof zIndex.base) => {
    return zIndex.base[level];
  },
  
  // Get content z-index
  getContent: (level: keyof typeof zIndex.content) => {
    return zIndex.content[level];
  },
  
  // Get navigation z-index
  getNavigation: (level: keyof typeof zIndex.navigation) => {
    return zIndex.navigation[level];
  },
  
  // Get overlay z-index
  getOverlay: (level: keyof typeof zIndex.overlay) => {
    return zIndex.overlay[level];
  },
  
  // Get popup z-index
  getPopup: (level: keyof typeof zIndex.popup) => {
    return zIndex.popup[level];
  },
  
  // Get sticky z-index
  getSticky: (level: keyof typeof zIndex.sticky) => {
    return zIndex.sticky[level];
  },
  
  // Get component z-index
  getComponent: (component: keyof typeof zIndex.components, variant: string = 'default') => {
    const componentZIndex = zIndex.components[component];
    if (typeof componentZIndex === 'object' && variant in componentZIndex) {
      return componentZIndex[variant as keyof typeof componentZIndex];
    }
    return componentZIndex;
  },
  
  // Get state z-index
  getState: (state: keyof typeof zIndex.states, variant: string = 'element') => {
    const stateZIndex = zIndex.states[state];
    if (typeof stateZIndex === 'object' && variant in stateZIndex) {
      return stateZIndex[variant as keyof typeof stateZIndex];
    }
    return stateZIndex;
  },
  
  // Get utility z-index
  getUtility: (utility: keyof typeof zIndex.utilities) => {
    return zIndex.utilities[utility];
  },
  
  // Check if z-index is valid Tailwind class
  isTailwindZIndex: (value: number): boolean => {
    const tailwindValues = [0, 10, 20, 30, 40, 50];
    return tailwindValues.includes(value);
  },
  
  // Convert z-index value to Tailwind class
  toTailwindClass: (value: number): string => {
    if (value === -1) return 'z-[-1]';
    if (value === 0) return 'z-0';
    if (value === 1) return 'z-[1]';
    if (value === 2) return 'z-[2]';
    if (value === 5) return 'z-[5]';
    if (value === 10) return 'z-10';
    if (value === 20) return 'z-20';
    if (value === 30) return 'z-30';
    if (value === 40) return 'z-40';
    if (value === 50) return 'z-50';
    if (value === 9999) return 'z-[9999]';
    if (value === 10000) return 'z-[10000]';
    return `z-[${value}]`;
  },
  
  // Get layering hierarchy for debugging
  getLayeringOrder: () => {
    return [
      'Behind content (-1)',
      'Default content (0)',
      'Slight elevation (1-2)',
      'Content layers (10-20)',
      'Navigation (20-40)',
      'Overlays and modals (40-50)',
      'Critical alerts (9999-10000)'
    ];
  },
  
  // Validate z-index value is within reasonable range
  validateZIndex: (value: number): boolean => {
    return value >= -1 && value <= 10000;
  },
} as const;

// Export default zIndex object
export default zIndex;
