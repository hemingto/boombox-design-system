# Boombox Design System

A comprehensive design system built specifically for Next.js applications using TypeScript and Tailwind CSS. Built with modern web standards and optimized for performance, accessibility, and developer experience.

## 🚀 Features

- **Next.js 14+ Ready**: Full compatibility with App Router and Server Components
- **TypeScript First**: Strict typing with comprehensive interfaces
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Monorepo Architecture**: Organized packages for scalability
- **Accessibility Built-in**: WCAG 2.1 compliant components
- **Email Templates**: React Email components with cross-client support
- **Comprehensive Testing**: Unit, integration, and visual regression tests
- **Storybook Integration**: Interactive component documentation
- **Design Token System**: Consistent theming across platforms

## 📦 Packages

This monorepo contains the following packages:

- **`@boombox/components`** - Core UI components
- **`@boombox/tokens`** - Design tokens and theme configuration
- **`@boombox/utils`** - Utility functions and helpers
- **`@boombox/icons`** - Icon library and components
- **`@boombox/email`** - Email templates and components
- **`@boombox/content`** - Content management and i18n utilities

## 🛠 Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Next.js 14+ project

### Install Core Packages

```bash
# Install the core component library
npm install @boombox/components @boombox/tokens

# Install additional packages as needed
npm install @boombox/utils @boombox/icons @boombox/email @boombox/content
```

### Setup Tailwind CSS

1. Install Tailwind CSS dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Configure your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@boombox/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Import Boombox design tokens
      ...require('@boombox/tokens/tailwind'),
    },
  },
  plugins: [],
}
```

3. Add Tailwind directives to your CSS:

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import Boombox CSS variables */
@import '@boombox/tokens/css/variables.css';
```

### Next.js Configuration

Update your `next.config.js` to transpile Boombox packages:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@boombox/components',
    '@boombox/tokens',
    '@boombox/utils',
    '@boombox/icons',
    '@boombox/email',
    '@boombox/content'
  ],
}

module.exports = nextConfig
```

## 🎯 Quick Start

### Basic Usage

```tsx
// app/page.tsx
import { Button, Card, Typography } from '@boombox/components';

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <Typography variant="h1" className="mb-6">
        Welcome to Boombox Design System
      </Typography>
      
      <Card className="p-6">
        <Typography variant="body1" className="mb-4">
          Get started with our comprehensive component library.
        </Typography>
        
        <div className="flex gap-4">
          <Button variant="primary" size="md">
            Get Started
          </Button>
          <Button variant="secondary" size="md">
            Learn More
          </Button>
        </div>
      </Card>
    </div>
  );
}
```

### Using Design Tokens

```tsx
// Access design tokens directly
import { tokens } from '@boombox/tokens';

// Use in Tailwind classes
<div className="bg-primary-500 text-white p-4 rounded-lg">
  Themed content
</div>

// Or use CSS variables
<div style={{ 
  backgroundColor: 'var(--color-primary-500)',
  padding: 'var(--spacing-4)' 
}}>
  Custom styled content
</div>
```

### Theme Provider Setup

```tsx
// app/layout.tsx
import { ThemeProvider } from '@boombox/components';
import '@boombox/tokens/css/variables.css';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## 🏗 Architecture

### Component Structure

Components follow atomic design principles:

```
packages/components/src/
├── primitives/     # Atoms (Button, Input, Typography)
├── patterns/       # Molecules (Card, Modal, Dropdown)
├── layouts/        # Organisms (AppShell, Grid, Container)
├── navigation/     # Navigation components
├── forms/          # Form-specific components
├── feedback/       # Loading, error, empty states
└── providers/      # Context providers
```

### File Organization

Each component follows a consistent structure:

```
ComponentName/
├── ComponentName.tsx          # Main component
├── ComponentName.stories.tsx  # Storybook stories
├── ComponentName.test.tsx     # Unit tests
├── ComponentName.module.css   # Component styles (if needed)
├── variants.ts               # Variant definitions
├── types.ts                  # Type definitions
└── index.ts                  # Barrel export
```

## 🎨 Design Tokens

### Token Categories

- **Colors**: Primary, secondary, neutral, semantic colors
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale
- **Breakpoints**: Responsive design breakpoints
- **Shadows**: Elevation and depth
- **Borders**: Border radius and width values
- **Z-index**: Layering system

### Platform Support

Tokens are available for multiple platforms:

```typescript
// Web (Tailwind CSS)
import { webTokens } from '@boombox/tokens/web';

// Email (inline styles)
import { emailTokens } from '@boombox/tokens/email';

// Mobile (React Native)
import { mobileTokens } from '@boombox/tokens/mobile';
```

## 📧 Email Templates

Create responsive email templates with React:

```tsx
import { 
  EmailTemplate, 
  EmailButton, 
  EmailText 
} from '@boombox/email';

export function WelcomeEmail({ name }: { name: string }) {
  return (
    <EmailTemplate>
      <EmailText>Welcome {name}!</EmailText>
      <EmailButton href="https://example.com">
        Get Started
      </EmailButton>
    </EmailTemplate>
  );
}
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

### Visual Testing

We use Chromatic for visual regression testing:

```bash
# Build and test visual changes
npm run chromatic
```

## 📚 Documentation

### Storybook

Run Storybook locally to explore components:

```bash
npm run storybook
```

Visit [our Storybook](https://boombox-storybook.vercel.app) to see all components in action.

### Documentation Site

Our comprehensive documentation is available at [boombox-docs.vercel.app](https://boombox-docs.vercel.app).

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Setup

1. Clone the repository:

```bash
git clone https://github.com/hemingto/boombox-design-system.git
cd boombox-design-system
```

2. Install dependencies:

```bash
npm install
```

3. Start development servers:

```bash
# Start all development servers
npm run dev

# Start specific apps
npm run dev --filter=playground
npm run dev --filter=documentation
```

### Available Scripts

```bash
# Development
npm run dev              # Start all development servers
npm run build           # Build all packages
npm run lint            # Lint all packages
npm run type-check      # Run TypeScript checks

# Testing
npm run test            # Run unit tests
npm run test:e2e        # Run E2E tests
npm run test:coverage   # Run tests with coverage

# Documentation
npm run storybook       # Start Storybook
npm run docs           # Start documentation site

# Release
npm run changeset      # Create a changeset
npm run version        # Version packages
npm run publish        # Publish to npm
```

### Contributing

1. Create a feature branch from `main`
2. Make your changes following our coding standards
3. Add tests for new functionality
4. Update documentation as needed
5. Create a changeset for your changes
6. Submit a pull request

### Code Standards

- **TypeScript**: Strict mode enabled, no implicit any
- **Tailwind CSS**: Utility-first approach, no custom CSS unless necessary
- **Testing**: 80%+ code coverage required
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Core Web Vitals optimization

## 🌟 Examples

### Form with Validation

```tsx
import { 
  FormField, 
  FormLabel, 
  FormError, 
  Input, 
  Button 
} from '@boombox/components';

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <form className="space-y-4">
      <FormField>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input 
          id="email" 
          type="email" 
          placeholder="Enter your email"
          error={!!errors.email}
        />
        {errors.email && <FormError>{errors.email}</FormError>}
      </FormField>

      <Button type="submit" variant="primary" size="md">
        Submit
      </Button>
    </form>
  );
}
```

### Responsive Layout

```tsx
import { Container, Grid, Card } from '@boombox/components';

export function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Grid 
        cols={{ base: 1, md: 2, lg: 3 }} 
        gap={6}
        className="py-8"
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Analytics</h3>
          <p className="text-gray-600">View your metrics</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <p className="text-gray-600">Configure your account</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <p className="text-gray-600">Get help when needed</p>
        </Card>
      </Grid>
    </Container>
  );
}
```

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- **Documentation**: [boombox-docs.vercel.app](https://boombox-docs.vercel.app)
- **Storybook**: [boombox-storybook.vercel.app](https://boombox-storybook.vercel.app)
- **Issues**: [GitHub Issues](https://github.com/hemingto/boombox-design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/hemingto/boombox-design-system/discussions)

## 🗺 Roadmap

- [ ] React Native components
- [ ] Figma plugin for design tokens
- [ ] Advanced animation system
- [ ] Additional email templates
- [ ] Enhanced accessibility features
- [ ] Performance optimizations

---

Built with ❤️ by the Boombox team 