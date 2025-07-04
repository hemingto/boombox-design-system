# Testing Guide for Boombox Design System

> 📖 **Full Documentation**: For the complete interactive testing guide, visit the [Documentation App](apps/documentation/app/guides/testing/) or run `npm run dev` in the documentation app.

This guide covers comprehensive testing strategies for the Boombox Design System, including component testing, accessibility testing, visual regression testing, and performance testing.

## 🧪 Testing Philosophy

Our testing strategy follows the **Testing Trophy** model:

- **Static Analysis** (ESLint, TypeScript) - Catch syntax errors and type issues
- **Unit Tests** (Jest + Testing Library) - Test individual components and utilities
- **Integration Tests** (Jest + Testing Library) - Test component interactions
- **E2E Tests** (Playwright) - Test complete user workflows
- **Visual Tests** (Chromatic) - Catch visual regressions

## 🛠 Testing Stack

### Core Testing Tools

- **Jest** - Test runner and assertion library
- **React Testing Library** - Component testing utilities
- **Jest DOM** - Custom DOM matchers
- **User Event** - Simulate user interactions
- **Jest Axe** - Accessibility testing
- **Chromatic** - Visual regression testing
- **Playwright** - E2E testing

## 📋 Quick Start

### 1. Install Dependencies

The testing dependencies are already configured in the root `package.json`:

```bash
npm install
```

### 2. Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run visual regression tests
npm run chromatic
```

## 🧩 Testing Components

### Basic Component Test Structure

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Button>Test Button</Button>);
      expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('calls onClick handler when clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Click me</Button>);
      await user.click(screen.getByRole('button'));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Button>Accessible Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
```

### Testing Patterns

#### 1. Variant Testing

```typescript
describe('Variants', () => {
  it.each([
    ['primary', ['bg-blue-600', 'text-white']],
    ['secondary', ['bg-gray-200', 'text-gray-900']],
    ['outline', ['border', 'border-gray-300']],
  ])('applies %s variant styles', (variant, expectedClasses) => {
    render(<Button variant={variant}>Button</Button>);
    const button = screen.getByRole('button');
    expectedClasses.forEach(className => {
      expect(button).toHaveClass(className);
    });
  });
});
```

#### 2. State Testing

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

#### 3. Form Component Testing

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

## ♿ Accessibility Testing

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

### Keyboard Navigation Testing

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
```

## 🎨 Visual Regression Testing

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

### Running Visual Tests

```bash
# Run visual regression tests
npm run chromatic

# Update baselines (use with caution)
npm run chromatic -- --auto-accept-changes
```

## 🚀 Performance Testing

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

## 🔧 Testing Utilities

### Custom Test Utilities

```typescript
// packages/components/src/utils/test-utils.tsx
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../providers/ThemeProvider';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) => 
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
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

## 🎯 Best Practices

### 1. Test Structure

Follow the **Arrange-Act-Assert** pattern:

```typescript
it('shows error message when validation fails', () => {
  // Arrange
  const invalidData = { email: 'invalid-email' };
  
  // Act
  render(<Form data={invalidData} />);
  
  // Assert
  expect(screen.getByText('Invalid email format')).toBeInTheDocument();
});
```

### 2. Test Naming

```typescript
// ✅ Good - Describes behavior
it('shows error message when validation fails')
it('calls onSubmit with form data when form is valid')

// ❌ Bad - Vague or implementation-focused
it('works correctly')
it('test button')
```

### 3. Query Priority

Use queries in this order of preference:

1. **getByRole** - Most accessible
2. **getByLabelText** - Form elements
3. **getByText** - Content
4. **getByTestId** - Last resort

```typescript
// ✅ Preferred
screen.getByRole('button', { name: 'Submit' })
screen.getByLabelText('Email address')

// ❌ Avoid
screen.getByClassName('btn-primary')
screen.getByTestId('submit-button')
```

### 4. Async Testing

```typescript
// ✅ Use waitFor for async operations
await waitFor(() => {
  expect(screen.getByText('Data loaded')).toBeInTheDocument();
});

// ✅ Use findBy queries for async elements
const submitButton = await screen.findByRole('button', { name: 'Submit' });
```

## 📁 Test Organization

### Directory Structure

```
packages/components/src/
├── primitives/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   └── Input/
│       ├── Input.tsx
│       ├── Input.test.tsx
│       └── Input.stories.tsx
├── utils/
│   ├── test-utils.tsx
│   └── cn.ts
└── __tests__/
    └── setup.ts
```

### Test Categories

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

## 🔍 Debugging Tests

### Debug Utilities

```typescript
// Debug rendered output
screen.debug(); // Logs current DOM state

// Debug specific element
screen.debug(screen.getByRole('button'));

// Find the right queries
screen.logTestingPlaygroundURL();
```

### Common Issues

#### 1. Tests Timing Out

```typescript
// Increase timeout for slow tests
jest.setTimeout(10000);

// Use waitFor for async operations
await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
}, { timeout: 5000 });
```

#### 2. Act Warnings

```typescript
// Wrap state updates in act
act(() => {
  result.current.increment();
});

// Or use Testing Library's async utilities
await user.click(screen.getByRole('button'));
```

## 📊 Coverage Requirements

### Coverage Thresholds

```javascript
// jest.config.js
module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

### What to Cover

- **Component rendering** with different props
- **User interactions** (click, type, focus)
- **Accessibility** features
- **Error states** and edge cases
- **Conditional rendering** logic

### What NOT to Cover

- Third-party library internals
- Simple getters/setters
- Trivial functions
- Configuration files

## 🚀 CI/CD Integration

### GitHub Actions

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
        env:
          CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

## 📚 Resources

### Documentation

- [Testing Library Docs](https://testing-library.com/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Jest Axe](https://github.com/nickcolley/jest-axe)
- [Chromatic Docs](https://www.chromatic.com/docs/)

### Examples

Check the existing test files in the repository:

- `packages/components/src/primitives/Button/Button.test.tsx`
- `packages/utils/src/**/*.test.ts`
- `packages/tokens/src/**/*.test.ts`

### Getting Help

- Check the [troubleshooting section](#debugging-tests)
- Review existing test files for patterns
- Ask in team discussions for complex testing scenarios

---

Happy testing! 🎉 