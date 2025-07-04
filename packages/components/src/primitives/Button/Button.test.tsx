import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button, type ButtonProps } from './Button';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Test utilities
const renderButton = (props: React.ComponentProps<typeof Button> = {}) => {
  const defaultProps = {
    children: 'Test Button',
    ...props,
  };
  return render(<Button {...defaultProps} />);
};

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      renderButton();
      expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
    });

    it('renders with custom children', () => {
      renderButton({ children: 'Custom Button Text' });
      expect(screen.getByRole('button', { name: 'Custom Button Text' })).toBeInTheDocument();
    });

    it('renders as different element when asChild is true', () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>
      );
      expect(screen.getByRole('link', { name: 'Link Button' })).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Button with ref</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe('Variants', () => {
    it('applies primary variant styles', () => {
      renderButton({ variant: 'primary' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-blue-600', 'text-white');
    });

    it('applies secondary variant styles', () => {
      renderButton({ variant: 'secondary' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-gray-200', 'text-gray-900');
    });

    it('applies outline variant styles', () => {
      renderButton({ variant: 'outline' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('border', 'border-gray-300', 'bg-transparent');
    });

    it('applies destructive variant styles', () => {
      renderButton({ variant: 'destructive' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-red-600', 'text-white');
    });

    it('applies ghost variant styles', () => {
      renderButton({ variant: 'ghost' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('hover:bg-gray-100');
    });
  });

  describe('Sizes', () => {
    it('applies small size styles', () => {
      renderButton({ size: 'sm' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-8', 'px-3', 'text-xs');
    });

    it('applies medium size styles (default)', () => {
      renderButton({ size: 'md' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-10', 'px-4');
    });

    it('applies large size styles', () => {
      renderButton({ size: 'lg' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-12', 'px-6', 'text-base');
    });
  });

  describe('States', () => {
    it('applies disabled state correctly', () => {
      renderButton({ disabled: true });
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('opacity-50', 'pointer-events-none');
    });

    it('applies loading state correctly', () => {
      renderButton({ loading: true });
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });

    it('shows loading text when loading', () => {
      renderButton({ loading: true, loadingText: 'Loading...' });
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('calls onClick handler when clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      renderButton({ onClick: handleClick });
      const button = screen.getByRole('button');
      
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      renderButton({ onClick: handleClick, disabled: true });
      const button = screen.getByRole('button');
      
      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when loading', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      renderButton({ onClick: handleClick, loading: true });
      const button = screen.getByRole('button');
      
      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('handles keyboard navigation', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      renderButton({ onClick: handleClick });
      const button = screen.getByRole('button');
      
      button.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
      
      await user.keyboard('{Space}');
      expect(handleClick).toHaveBeenCalledTimes(2);
    });
  });

  describe('Custom Props', () => {
    it('applies custom className', () => {
      renderButton({ className: 'custom-class' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('applies custom data attributes', () => {
      renderButton({ 'data-testid': 'custom-button' } as any);
      expect(screen.getByTestId('custom-button')).toBeInTheDocument();
    });

    it('applies custom HTML attributes', () => {
      renderButton({ type: 'submit', form: 'test-form' });
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
      expect(button).toHaveAttribute('form', 'test-form');
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = renderButton();
      const results = await axe(container);
      (expect(results) as any).toHaveNoViolations();
    });

    it('has proper ARIA attributes when loading', async () => {
      renderButton({ loading: true });
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('has proper focus management', () => {
      renderButton();
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('supports screen reader announcements', () => {
      renderButton({ 'aria-label': 'Custom button label' });
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom button label');
    });

    it('has proper contrast ratios', () => {
      // This would typically be tested with a visual regression tool
      // but we can test that the proper classes are applied
      renderButton({ variant: 'primary' });
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-blue-600', 'text-white');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      render(<Button>{''}</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles null children gracefully', () => {
      render(<Button>{null}</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles complex children', () => {
      render(
        <Button>
          <span>Icon</span>
          <span>Text</span>
        </Button>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByText('Icon')).toBeInTheDocument();
      expect(screen.getByText('Text')).toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('does not re-render unnecessarily', () => {
      const renderSpy = jest.fn();
      const TestButton = React.memo((props: ButtonProps) => {
        renderSpy();
        return <Button {...props} />;
      });
      TestButton.displayName = 'TestButton';

      const { rerender } = render(<TestButton>Test</TestButton>);
      expect(renderSpy).toHaveBeenCalledTimes(1);

      // Re-render with same props
      rerender(<TestButton>Test</TestButton>);
      expect(renderSpy).toHaveBeenCalledTimes(1);

      // Re-render with different props
      rerender(<TestButton variant="secondary">Test</TestButton>);
      expect(renderSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('Theme Integration', () => {
    it('respects theme context', () => {
      // This would test theme provider integration
      // Implementation depends on your theme system
      renderButton();
      const button = screen.getByRole('button');
      expect(button).toHaveClass('transition-colors');
    });
  });

  describe('Snapshot Testing', () => {
    it('matches snapshot for default props', () => {
      const { container } = renderButton();
      expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for all variants', () => {
      const variants = ['primary', 'secondary', 'outline', 'destructive', 'ghost'] as const;
      variants.forEach(variant => {
        const { container } = renderButton({ variant });
        expect(container.firstChild).toMatchSnapshot(`Button-${variant}`);
      });
    });

    it('matches snapshot for all sizes', () => {
      const sizes = ['sm', 'md', 'lg'] as const;
      sizes.forEach(size => {
        const { container } = renderButton({ size });
        expect(container.firstChild).toMatchSnapshot(`Button-${size}`);
      });
    });
  });
});
