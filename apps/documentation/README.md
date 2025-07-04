# Boombox Design System Documentation

This Next.js application serves as the comprehensive documentation site for the Boombox Design System.

## 🚀 Getting Started

```bash
# Install dependencies (from root)
npm install

# Start the documentation site
cd apps/documentation
npm run dev
```

Visit `http://localhost:3000` to view the documentation site.

## 📁 Documentation Structure

```
apps/documentation/
├── app/                          # Next.js 13+ App Router
│   ├── getting-started/          # Installation and setup guides
│   │   ├── installation/
│   │   ├── quick-start/
│   │   └── page.tsx
│   ├── guides/                   # Development guides
│   │   ├── testing/              # Testing guide and examples
│   │   ├── contributing/         # How to contribute
│   │   ├── theming/             # Theme customization
│   │   ├── accessibility/        # Accessibility guidelines
│   │   └── page.tsx
│   ├── components/               # Component documentation
│   │   ├── primitives/           # Basic components (Button, Input, etc.)
│   │   ├── patterns/             # Complex components (Modal, Dropdown)
│   │   ├── layouts/              # Layout components (Grid, Container)
│   │   └── page.tsx
│   ├── design-tokens/            # Design system tokens
│   │   ├── colors/
│   │   ├── typography/
│   │   ├── spacing/
│   │   └── page.tsx
│   ├── examples/                 # Usage examples and patterns
│   │   ├── forms/
│   │   ├── layouts/
│   │   ├── dashboards/
│   │   └── page.tsx
│   ├── api-reference/            # Component API documentation
│   │   └── page.tsx
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Documentation-specific components
│   ├── CodeBlock.tsx
│   ├── ComponentDemo.tsx
│   ├── PropsTable.tsx
│   └── Navigation.tsx
├── content/                      # MDX content files (optional)
├── public/                       # Static assets
├── styles/                       # Documentation-specific styles
└── package.json
```

## 🎯 Content Guidelines

### Component Documentation

Each component should have:
- **Overview** - What the component does
- **Usage** - Basic usage examples
- **Props** - Complete API reference
- **Variants** - All available variants
- **Examples** - Real-world usage scenarios
- **Accessibility** - A11y considerations
- **Best Practices** - Do's and don'ts

### Guide Structure

Development guides should include:
- **Introduction** - Why this guide exists
- **Prerequisites** - What you need to know
- **Step-by-step instructions**
- **Code examples**
- **Common pitfalls**
- **Additional resources**

## 🛠 Features

### Interactive Examples

```tsx
import { ComponentDemo } from '../components/ComponentDemo';
import { Button } from '@boombox/components';

<ComponentDemo>
  <Button variant="primary">Primary Button</Button>
  <Button variant="secondary">Secondary Button</Button>
</ComponentDemo>
```

### Code Syntax Highlighting

```tsx
import { CodeBlock } from '../components/CodeBlock';

<CodeBlock language="tsx">
{`import { Button } from '@boombox/components';

export function MyComponent() {
  return <Button>Click me</Button>;
}`}
</CodeBlock>
```

### Props Documentation

```tsx
import { PropsTable } from '../components/PropsTable';

<PropsTable
  component="Button"
  props={[
    {
      name: 'variant',
      type: 'primary | secondary | outline',
      default: 'primary',
      description: 'Visual style variant'
    }
  ]}
/>
```

## 📝 Content Management

### Adding New Documentation

1. **Create the page structure**:
   ```bash
   mkdir apps/documentation/app/new-section
   touch apps/documentation/app/new-section/page.tsx
   ```

2. **Add to navigation** (in layout.tsx or navigation component)

3. **Follow the content guidelines** above

### MDX Support (Optional)

For complex documentation, consider adding MDX support:

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

## 🎨 Styling

The documentation site uses:
- **Tailwind CSS** - For styling consistency with the design system
- **Design System Components** - Uses actual components from `@boombox/components`
- **Custom Documentation Components** - For specialized documentation needs

## 🚀 Deployment

The documentation site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Build for Production

```bash
npm run build
npm run start
```

## 🔗 Integration

### With Storybook

The documentation site complements Storybook by providing:
- **Comprehensive guides** vs. component isolation
- **Real-world examples** vs. component variations
- **Getting started tutorials** vs. component playground

### With Design System Packages

The documentation automatically imports and uses:
- `@boombox/components` - For live examples
- `@boombox/tokens` - For design token documentation
- `@boombox/utils` - For utility documentation

## 📚 Best Practices

### Documentation Writing

- **Write for your audience** - Consider both beginners and experts
- **Use clear, concise language**
- **Include visual examples** whenever possible
- **Keep examples simple** but realistic
- **Update documentation** when components change

### Code Examples

- **Always test your examples** - Ensure they work
- **Use realistic data** - Avoid "foo", "bar" examples
- **Show complete examples** - Include necessary imports
- **Highlight best practices** - Show the right way to do things

### Maintenance

- **Regular reviews** - Keep documentation up to date
- **Link checking** - Ensure all links work
- **Accessibility testing** - Documentation should be accessible too
- **Performance monitoring** - Keep the site fast

## 🤝 Contributing

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for general contribution guidelines.

For documentation-specific contributions:
1. Follow the content guidelines above
2. Test your changes locally
3. Ensure examples work correctly
4. Update navigation if adding new sections
5. Submit a pull request with clear description

---

For questions about the documentation site, please open an issue or start a discussion in the main repository.