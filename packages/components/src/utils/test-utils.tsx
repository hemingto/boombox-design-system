import React from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Simple wrapper without theme provider for now
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from testing-library
export * from '@testing-library/react';
export { customRender as render };

// Common test utilities
export const testUtils = {
  // Create mock props with sensible defaults
  createMockProps: (overrides = {}) => ({
    'data-testid': 'test-component',
    className: 'test-class',
    ...overrides,
  }),

  // Wait for async operations
  waitFor: async (callback: () => boolean | void, timeout = 1000) => {
    return new Promise<void>((resolve, reject) => {
      const startTime = Date.now();
      const check = () => {
        try {
          const result = callback();
          if (result !== false) {
            resolve();
          } else if (Date.now() - startTime > timeout) {
            reject(new Error('Timeout waiting for condition'));
          } else {
            setTimeout(check, 10);
          }
        } catch (error) {
          if (Date.now() - startTime > timeout) {
            reject(error);
          } else {
            setTimeout(check, 10);
          }
        }
      };
      check();
    });
  },

  // Simulate user interactions
  simulateKeyPress: (element: Element, key: string) => {
    const event = new KeyboardEvent('keydown', { key });
    element.dispatchEvent(event);
  },

  // Mock ResizeObserver for components that use it
  mockResizeObserver: () => {
    const mockResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    
    Object.defineProperty(window, 'ResizeObserver', {
      writable: true,
      value: mockResizeObserver,
    });
    
    return mockResizeObserver;
  },

  // Mock IntersectionObserver for components that use it
  mockIntersectionObserver: () => {
    const mockIntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      value: mockIntersectionObserver,
    });
    
    return mockIntersectionObserver;
  },

  // Mock media queries
  mockMatchMedia: (matches = false) => {
    const mockMatchMedia = jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: mockMatchMedia,
    });
    
    return mockMatchMedia;
  },

  // Get computed styles for testing
  getComputedStyles: (element: Element) => {
    return window.getComputedStyle(element);
  },

  // Create a mock theme for testing
  createMockTheme: (overrides = {}) => ({
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      success: '#28a745',
      danger: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      light: '#f8f9fa',
      dark: '#343a40',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    typography: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
      },
    },
    ...overrides,
  }),
};

// Export types for better TypeScript support
export type { RenderOptions } from '@testing-library/react';
export type CustomRenderOptions = Omit<RenderOptions, 'wrapper'>;
export type TestUtilsType = typeof testUtils; 