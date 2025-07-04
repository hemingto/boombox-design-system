# Testing Guide for Boombox Design System

This guide covers comprehensive testing strategies for the Boombox Design System, including component testing, accessibility testing, visual regression testing, and performance testing.

## Table of Contents

1. [Testing Philosophy](#testing-philosophy)
2. [Testing Stack](#testing-stack)
3. [Setup and Configuration](#setup-and-configuration)
4. [Testing Components](#testing-components)
5. [Testing Utilities](#testing-utilities)
6. [Accessibility Testing](#accessibility-testing)
7. [Visual Regression Testing](#visual-regression-testing)
8. [Performance Testing](#performance-testing)
9. [E2E Testing](#e2e-testing)
10. [Best Practices](#best-practices)
11. [Running Tests](#running-tests)
12. [Troubleshooting](#troubleshooting)

## Testing Philosophy

Our testing strategy follows the **Testing Trophy** model:

- **Static Analysis** (ESLint, TypeScript) - Catch syntax errors and type issues
- **Unit Tests** (Jest + Testing Library) - Test individual components and utilities
- **Integration Tests** (Jest + Testing Library) - Test component interactions
- **E2E Tests** (Playwright) - Test complete user workflows
- **Visual Tests** (Chromatic) - Catch visual regressions

### Testing Priorities

1. **Accessibility** - All components must be accessible
2. **User Interactions** - Test how users interact with components
3. **API Contracts** - Ensure component props work as expected
4. **Visual Consistency** - Maintain design system consistency
5. **Performance** - Components should be performant

## Testing Stack

### Core Testing Tools

- **Jest** - Test runner and assertion library
- **React Testing Library** - Component testing utilities
- **Jest DOM** - Custom DOM matchers
- **User Event** - Simulate user interactions
- **Jest Axe** - Accessibility testing
- **Chromatic** - Visual regression testing
- **Playwright** - E2E testing

### Configuration Files

- `jest.config.js` - Main Jest configuration
- `jest.setup.js` - Test environment setup
- `playwright.config.ts` - E2E test configuration
- `.storybook/` - Storybook configuration for visual testing

## Setup and Configuration

### 1. Install Dependencies

```bash
npm install --save-dev \
  @testing-library/react \
  @testing-library/user-event \
  @testing-library/jest-dom \
  jest-axe \
  @types/jest \
  ts-jest \
  jest-watch-typeahead
```

### 2. Jest Configuration

The `jest.config.js` file is configured for monorepo testing with separate projects for each package:

```javascript
module.exports = {
  projects: [
    {
      displayName: 'components',
      testMatch: ['<rootDir>/packages/components/src/**/*.{test,spec}.{ts,tsx}'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      testEnvironment: 'jsdom',
      // ... more configuration
    },
    // ... other packages
  ],
};
```

### 3. Test Environment Setup

The `jest.setup.js` file configures the testing environment:

```javascript
import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

// Mock Next.js components and hooks
// Mock browser APIs
// Configure global test utilities
```

## Testing Components

### Basic Component Test Structure

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  // Test categories
  describe('Rendering', () => {
    // Basic rendering tests
  });

  describe('Variants', () => {
    // Test different variants
  });

  describe('User Interactions', () => {
    // Test click, keyboard, focus events
  });

  describe('Accessibility', () => {
    // Test ARIA attributes, keyboard navigation
  });
});
```

### Testing Patterns

#### 1. Rendering Tests

```typescript
describe('Rendering', () => {
  it('renders with default props', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
```

#### 2. Variant Testing

```typescript
describe('Variants', () => {
  it.each([
    ['primary', 'bg-blue-600 text-white'],
    ['secondary', 'bg-gray-200 text-gray-900'],
    ['outline', 'border border-gray-300'],
  ])('applies %s variant styles', (variant, expectedClasses) => {
    render(<Button variant={variant}>Button</Button>);
    const button = screen.getByRole('button');
    expectedClasses.split(' ').forEach(className => {
      expect(button).toHaveClass(className);
    });
  });
});
```

#### 3. User Interaction Testing

```typescript
describe('User Interactions', () => {
  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard navigation', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Button</Button>);
    const button = screen.getByRole('button');
    
    button.focus();
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### 4. State Testing

```typescript
describe('States', () => {
  it('applies disabled state correctly', () => {
    render(<Button disabled>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50');
  });

  it('shows loading state', () => {
    render(<Button loading>Button</Button>);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
```

### Testing Complex Components

#### Form Components

```typescript
describe('Input Component', () => {
  it('handles controlled input', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    
    render(<Input value="test" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    
    await user.clear(input);
    await user.type(input, 'new value');
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows validation errors', () => {
    render(<Input error="Required field" />);
    expect(screen.getByText('Required field')).toBeInTheDocument();
  });
});
```

#### Modal Components

```typescript
describe('Modal Component', () => {
  it('manages focus correctly', () => {
    render(
      <Modal isOpen>
        <button>Close</button>
      </Modal>
    );
    
    expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus();
  });

  it('traps focus within modal', async () => {
    const user = userEvent.setup();
    
    render(
      <Modal isOpen>
        <button>First</button>
        <button>Last</button>
      </Modal>
    );
    
    const firstButton = screen.getByRole('button', { name: 'First' });
    const lastButton = screen.getByRole('button', { name: 'Last' });
    
    firstButton.focus();
    await user.keyboard('{Shift>}{Tab}{/Shift}');
    expect(lastButton).toHaveFocus();
  });
});
```

## Testing Utilities

### Testing Pure Functions

```typescript
describe('formatDate utility', () => {
  it('formats date correctly', () => {
    const date = new Date('2023-01-01');
    expect(formatDate(date)).toBe('January 1, 2023');
  });

  it('handles invalid dates', () => {
    expect(formatDate(null)).toBe('Invalid date');
  });
});
```

### Testing Hooks

```typescript
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter hook', () => {
  it('increments counter', () => {
    const { result } = renderHook(() => useCounter(0));
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});
```

## Accessibility Testing

### Automated Accessibility Testing

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Manual Accessibility Testing

```typescript
describe('Keyboard Navigation', () => {
  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    
    render(
      <div>
        <Button>First</Button>
        <Button>Second</Button>
      </div>
    );
    
    const firstButton = screen.getByRole('button', { name: 'First' });
    const secondButton = screen.getByRole('button', { name: 'Second' });
    
    firstButton.focus();
    await user.keyboard('{Tab}');
    expect(secondButton).toHaveFocus();
  });
});

describe('Screen Reader Support', () => {
  it('has proper ARIA labels', () => {
    render(<Button aria-label="Close dialog">×</Button>);
    expect(screen.getByRole('button', { name: 'Close dialog' })).toBeInTheDocument();
  });
});
```

## Visual Regression Testing

### Storybook Integration

```typescript
// Button.stories.tsx
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    chromatic: { 
      viewports: [320, 1200] // Test responsive breakpoints
    },
  },
};

export const AllVariants = () => (
  <div className="space-y-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
  </div>
);
```

### Chromatic Configuration

```bash
# Run visual regression tests
npm run chromatic

# Update baselines
npm run chromatic -- --auto-accept-changes
```

## Performance Testing

### Component Performance

```typescript
describe('Performance', () => {
  it('does not re-render unnecessarily', () => {
    const renderSpy = jest.fn();
    const TestComponent = React.memo(() => {
      renderSpy();
      return <Button>Test</Button>;
    });

    const { rerender } = render(<TestComponent />);
    expect(renderSpy).toHaveBeenCalledTimes(1);

    rerender(<TestComponent />);
    expect(renderSpy).toHaveBeenCalledTimes(1);
  });
});
```

### Bundle Size Testing

```typescript
// Use bundlephobia or similar tools
describe('Bundle Size', () => {
  it('has reasonable bundle size', () => {
    // This would be implemented with actual bundle analysis
    expect(getBundleSize('Button')).toBeLessThan(5000); // 5KB
  });
});
```

## E2E Testing

### Playwright Configuration

```typescript
// playwright.config.ts
export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:3000',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
```

### E2E Test Examples

```typescript
// tests/e2e/button.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Button Component', () => {
  test('handles click interactions', async ({ page }) => {
    await page.goto('/components/button');
    
    const button = page.getByRole('button', { name: 'Click me' });
    await button.click();
    
    await expect(page.getByText('Button clicked!')).toBeVisible();
  });
});
```

## Best Practices

### 1. Test Structure

- **Arrange** - Set up test data and components
- **Act** - Perform the action being tested
- **Assert** - Verify the expected outcome

### 2. Test Naming

```typescript
// Good
it('shows error message when validation fails')
it('calls onSubmit with form data when form is valid')

// Bad
it('works correctly')
it('test button')
```

### 3. Test Organization

```typescript
describe('Component Name', () => {
  describe('Rendering', () => {
    // Basic rendering tests
  });

  describe('Props', () => {
    // Test different prop combinations
  });

  describe('User Interactions', () => {
    // Test user events
  });

  describe('Accessibility', () => {
    // Test accessibility features
  });

  describe('Edge Cases', () => {
    // Test error conditions and edge cases
  });
});
```

### 4. Mock Management

```typescript
// Mock external dependencies
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
}));

// Clean up mocks
afterEach(() => {
  jest.clearAllMocks();
});
```

### 5. Test Data

```typescript
// Create test data factories
const createUser = (overrides = {}) => ({
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  ...overrides,
});

// Use realistic test data
const testUser = createUser({ name: 'Jane Smith' });
```

## Running Tests

### Available Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test Button.test.tsx

# Run tests for specific package
npm test --filter=@boombox/components

# Run E2E tests
npm run test:e2e

# Run visual regression tests
npm run chromatic
```

### CI/CD Integration

```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test:ci
      - run: npm run test:e2e
      - run: npm run chromatic
```

## Troubleshooting

### Common Issues

#### 1. Tests Timing Out

```typescript
// Increase timeout for slow tests
jest.setTimeout(10000);

// Use waitFor for async operations
await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
});
```

#### 2. Mock Issues

```typescript
// Clear mocks between tests
afterEach(() => {
  jest.clearAllMocks();
});

// Reset modules if needed
beforeEach(() => {
  jest.resetModules();
});
```

#### 3. DOM Cleanup

```typescript
// RTL automatically cleans up, but for manual cleanup:
afterEach(() => {
  cleanup();
});
```

#### 4. TypeScript Issues

```typescript
// Type test utilities properly
const renderComponent = (props: Partial<ComponentProps> = {}) => {
  return render(<Component {...defaultProps} {...props} />);
};
```

### Debug Tips

```typescript
// Debug rendered output
screen.debug(); // Logs current DOM state

// Debug specific element
screen.debug(screen.getByRole('button'));

// Use testing-library queries
screen.logTestingPlaygroundURL(); // Helps find the right queries
```

## Conclusion

This testing guide provides a comprehensive approach to testing the Boombox Design System. By following these patterns and practices, you can ensure your components are reliable, accessible, and maintainable.

Remember to:
- Test user interactions, not implementation details
- Include accessibility testing in every component
- Use visual regression testing for design consistency
- Write tests that document component behavior
- Keep tests simple and focused

For more specific examples, check the test files in each component directory. 