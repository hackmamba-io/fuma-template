# Hackmamba Docs Template

A Fumadocs-based documentation template designed for Hackmamba's documentation projects, providing a modern, accessible, and customizable documentation solution.

## Features

- **Navigation Structure**: Hierarchical navigation with collapsible sections
- **Call-to-Action Buttons**: Prominent CTAs in the header and sidebar
- **Card-based Layout**: Clean card components for content organization
- **Mobile-First Design**: Responsive layout optimized for all devices
- **Custom Styling**: Hackmamba-inspired color scheme and design elements
- **Configuration-Driven**: Easy navigation management through `meta.json`

## Project Structure

```
├── app/
│   ├── docs/
│   │   ├── layout.tsx          # Custom docs layout with CTAs
│   │   └── [[...slug]]/
│   │       └── page.tsx         # Dynamic page routing
│   └── layout.tsx               # Root layout
├── content/
│   └── docs/
│       ├── meta.json            # Navigation configuration
│       ├── index.mdx            # Homepage
│       ├── overview.mdx         # Overview page
│       └── [other pages].mdx    # Additional documentation pages
├── lib/
│   ├── layout.shared.tsx        # Shared layout configuration
│   └── source.ts               # Source configuration
└── app/global.css              # Custom styling
```

## Navigation Configuration

The navigation structure is defined in `content/docs/meta.json`:

```json
{
  "title": "Documentation",
  "pages": [
    "index",
    {
      "title": "Getting Started",
      "pages": ["overview", "installation", "configuration", "customization"]
    },
    {
      "title": "API Reference",
      "pages": ["api-reference", "authentication", "rate-limits"]
    }
  ]
}
```

### Adding New Pages

1. **Create a new `.mdx` file** in `content/docs/`:

   ```bash
   touch content/docs/my-new-page.mdx
   ```

2. **Add frontmatter** to your page:

   ```mdx
   ---
   title: My New Page
   description: Description of my new page
   ---

   # My New Page

   Content goes here...
   ```

3. **Update `meta.json`** to include the new page in navigation:

   ```json
   {
     "title": "Documentation",
     "pages": [
       "index",
       "my-new-page"
       // ... other pages
     ]
   }
   ```

## Customization

### Colors and Styling

The color scheme is defined in `app/global.css`:

```css
:root {
  --primary-green: #35d07f;
  --primary-green-dark: #2bb673;
  --accent-yellow: #fbcc5c;
  --secondary-green: #5ea33b;
}
```

### Call-to-Action Buttons

CTAs are configured in `lib/layout.shared.tsx`:

```typescript
export function baseOptions(): BaseLayoutProps {
  return {
    cta: {
      text: "🚀 Start Building",
      url: "/docs/overview",
    },
  };
}
```

### Navigation Links

Add internal links to the navigation with icons:

```typescript
links: [
  {
    text: "Getting Started",
    url: "/docs/overview",
    icon: <YourIcon />,
  },
  {
    text: "API Reference",
    url: "/docs/api-reference",
    icon: <YourIcon />,
  },
],
```

## Components

### Cards

Use the `<Cards>` and `<Card>` components for content organization:

```mdx
<Cards>
  <Card
    title="Quickstart"
    href="/docs/overview"
    description="Get up and running in minutes"
  />
  <Card
    title="API Reference"
    href="/docs/api-reference"
    description="Complete API documentation"
  />
</Cards>
```

## Development

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

## Deployment

This template is ready to deploy to any platform that supports Next.js:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Deploy from Git
- **Railway**: One-click deployment
- **Self-hosted**: Build and serve the static files

## License

MIT License - feel free to use this template for your own documentation projects.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
