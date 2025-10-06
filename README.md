# Hackmamba Docs Template

A Fumadocs-based documentation template designed for Hackmamba to deliver comprehensive documentation projects. This template provides a robust and customizable foundation for technical documentation, inspired by modern documentation sites.

## Features

- **Hackmamba Branding**: Fully rebranded from Celo to Hackmamba with purple/violet theme
- **Modular Content**: Organize your documentation with MDX, supporting rich and interactive content
- **Configurable Navigation**: Easily manage your sidebar and top navigation using `meta.json` and `layout.shared.tsx`
- **Persistent Top Navigation**: Includes logo, internal links, search bar, and external support link
- **Collapsible Sidebar**: Responsive sidebar navigation that collapses smoothly on all devices
- **Section Labels**: Clear navigation sections with labels like "Guide", "API References", "Community & Support"
- **AI Page Actions**: Built-in AI integration with copy markdown and AI tool integration
- **Theme-Aware Styling**: Utilizes Fumadocs' built-in styling with custom color accents, supporting light and dark modes
- **Responsive Design**: Optimized for a seamless experience across desktops, tablets, and mobile devices
- **SEO Friendly**: Built with Next.js for optimal search engine performance

## Project Structure

```
├── app/
│   ├── (home)/
│   │   ├── layout.tsx          # Home page layout with sidebar
│   │   └── page.tsx            # Home page content
│   ├── docs/
│   │   ├── layout.tsx          # Docs page layout with sidebar configuration
│   │   └── [[...slug]]/
│   │       └── page.tsx         # Dynamic docs page routing with AI actions
│   ├── llms-full.txt/
│   │   └── route.ts            # Complete documentation for AI consumption
│   ├── llms.mdx/
│   │   └── [[...slug]]/
│   │       └── route.ts         # Individual page content as Markdown
│   ├── layout.tsx               # Root layout for the entire application
│   └── global.css              # Global styles and custom theme variables
├── content/
│   └── docs/
│       ├── meta.json            # Defines the sidebar navigation structure
│       ├── index.mdx            # Main documentation landing page
│       ├── overview.mdx         # Overview of Hackmamba Docs
│       ├── getting-started/
│       │   ├── _meta.json       # Defines pages in Getting Started section
│       │   ├── installation.mdx
│       │   ├── configuration.mdx
│       │   └── customization.mdx
│       ├── api-reference/
│       │   ├── _meta.json       # Defines pages in API Reference section
│       │   ├── api-overview.mdx
│       │   ├── authentication.mdx
│       │   └── rate-limits.mdx
│       ├── developer-tools/
│       │   ├── _meta.json       # Defines pages in Developer Tools section
│       │   ├── sdks.mdx
│       │   ├── webhooks.mdx
│       │   ├── testing.mdx
│       │   └── troubleshooting.mdx
│       └── community-support/
│           ├── _meta.json       # Defines pages in Community & Support section
│           ├── community.mdx
│           ├── support.mdx
│           ├── contributing.mdx
│           ├── feedback.mdx
│           └── feature-requests.mdx
├── components/
│   ├── page-actions.tsx         # AI page actions (copy markdown, AI tools)
│   └── ui/
│       └── button.tsx           # UI button components
├── lib/
│   ├── layout.shared.tsx        # Shared layout configurations (nav, links, cta, search)
│   ├── source.ts               # Fumadocs content source configuration
│   ├── get-llm-text.ts         # LLM text processing for AI consumption
│   └── cn.ts                   # Utility for class name merging
├── public/                     # Static assets
└── mdx-components.tsx          # Custom MDX components
```

## Getting Started

Follow these steps to set up and run your Hackmamba Docs template:

1. **Clone the repository**:

   ```bash
   git clone [repository-url]
   cd hmb-docs-template
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Generate Source Files**:

   ```bash
   npx fumadocs-mdx
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Navigation Configuration

The main navigation structure (sidebar) is defined in `content/docs/meta.json` and `content/docs/*/meta.json`.
The top navigation bar (links) is configured in `lib/layout.shared.tsx`.

### Example `content/docs/meta.json`:

```json
{
  "title": "Documentation",
  "pages": [
    "index",
    "overview",
    "---Guide---",
    "getting-started",
    "developer-tools",
    "---API References---",
    "api-reference/api-overview",
    "api-reference/authentication",
    "api-reference/rate-limits",
    "---Community & Support---",
    "community-support"
  ]
}
```

### Example `content/docs/getting-started/_meta.json`:

```json
{
  "title": "Getting Started",
  "pages": ["installation", "configuration", "customization"]
}
```

### Example `lib/layout.shared.tsx` (Top Navigation):

```typescript
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            ...
          </svg>
          Hackmamba Docs
        </>
      ),
    },
    links: [
      {
        text: "Home",
        url: "/docs",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            ...
          </svg>
        ),
      },
      {
        text: "Overview",
        url: "/docs/overview",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            ...
          </svg>
        ),
      },
      {
        text: "Support",
        url: "https://hackmamba.io/",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            ...
          </svg>
        ),
      },
    ],
  };
}
```

## Adding New Pages

1. **Create a new `.mdx` file** in the relevant subdirectory (e.g., `content/docs/getting-started/my-new-page.mdx`):

   ```bash
   touch content/docs/getting-started/my-new-page.mdx
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

3. **Update the relevant `_meta.json`** to include the new page in navigation (e.g., `content/docs/getting-started/_meta.json`):

   ```json
   {
     "title": "Getting Started",
     "pages": [
       "installation",
       "my-new-page"
       // ... other pages
     ]
   }
   ```

4. **Regenerate Source Files**:
   ```bash
   npx fumadocs-mdx
   ```

## Customization

### Colors and Styling

The color scheme is defined in `app/global.css` using CSS variables. You can modify `--primary-purple` and other variables to match your brand.

```css
:root {
  --primary-purple: #8b5cf6;
  --primary-purple-dark: #7c3aed;
  --accent-blue: #3b82f6;
  --secondary-indigo: #6366f1;

  /* Fumadocs sidebar variables */
  --fd-sidebar-width: 280px;
  --fd-sidebar-offset: -280px;
}
```

### Call-to-Action Buttons

The main CTA button in the top navigation is configured in `lib/layout.shared.tsx` under the `links` property (as a `ButtonItemType` if needed, though currently removed due to `BaseLayoutProps` limitations).

### Navigation Links

Additional links in the top navigation bar are defined in `lib/layout.shared.tsx` under the `links` array.

## AI Integration

This template includes built-in AI functionality for enhanced documentation interaction:

### AI Page Actions

Every documentation page includes AI-powered features:

- **Copy Markdown**: One-click copy of page content as Markdown
- **AI Tool Integration**: Direct links to open pages in various AI tools:
  - GitHub (source code)
  - Scira AI
  - ChatGPT
  - Claude
  - T3 Chat

### LLM-Friendly Content

The template automatically generates AI-consumable content:

- **`/llms-full.txt`**: Complete documentation as plain text
- **`/docs/*.mdx`**: Individual pages as Markdown (via rewrite rules)
- **Processed Content**: Clean, structured content optimized for AI consumption

### Implementation

AI features are automatically included in all documentation pages via the `components/page-actions.tsx` component.

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

2. **Generate Source Files**:

   ```bash
   npx fumadocs-mdx
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Deployment

This boilerplate is a standard Next.js application and can be deployed to any platform that supports Next.js, such as Vercel, Netlify, Railway, or self-hosted environments.

## License

MIT License - feel free to use this boilerplate for your own documentation projects.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
