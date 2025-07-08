# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `pnpm dev` - Start development server (uses pnpm, not yarn)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linter

## Project Architecture

### Core Stack

- **Next.js 13.4.12** using Pages Router (not App Router)
- **React 18.2.0** with functional components
- **SCSS** with CSS Modules for styling
- **MDX** for blog posts with `next-mdx-remote`
- **AWS DynamoDB** for view counts and guestbook
- **NextAuth.js** for GitHub OAuth authentication
- **Framer Motion** for animations and page transitions

### Key Architectural Patterns

#### Global State Management

The app uses React Context for global state:

- **ThemeProvider** (next-themes) - Dark/light mode toggle
- **SoundProvider** (`/components/soundToggle/SoundContext.js`) - Sound effects toggle
- **PageTransitionProvider** (`/components/pageTransition/PageTransitionContext.js`) - Page transition animations
- **SessionProvider** (NextAuth) - User authentication state

#### Content & Data Flow

- **Blog Posts**: MDX files in `/posts/` directory, processed by `getPosts()` utility
- **Static Generation**: Uses `getStaticProps` and `getStaticPaths` for blog posts
- **MDX Components**: Custom components defined in `/static/types/Components.js`
- **View Tracking**: DynamoDB integration for post view counts
- **Guestbook**: DynamoDB storage with GitHub authentication requirement

#### File Organization

- **Components**: Each component in its own directory with `.js` and `.module.scss` files
- **Static Types**: Reusable data structures in `/static/types/`
- **Utilities**: Helper functions and hooks in `/utils/`
- **API Routes**: DynamoDB operations in `/pages/api/dynamo/`

### Environment Configuration

Requires environment variables for DynamoDB and NextAuth:

- `DYNAMO_ACCESS_KEY_ID` / `DYNAMO_SECRET_ACCESS_KEY`
- `DYNAMO_GUESTBOOK_TABLE_NAME`
- `NEXTAUTH_SECRET` / `NEXTAUTH_URL`
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`

## Code Style Guidelines

- **Imports**: Use absolute imports with `@/` prefix (e.g., `@/components/link/Link`)
- **Components**: React functional components with named exports
- **Styling**: CSS Modules with .module.scss extension
- **Naming**:
  - Files: PascalCase for components (e.g., `NavArrow.js`)
  - Components: PascalCase (e.g., `NavArrow`)
  - CSS modules: camelCase (e.g., `styles.rightWrapper`)
- **Props**: Destructure props in function parameters
- **Context**: Use React Context for global state (Theme, Sound, PageTransition)
- **File Structure**: One component per directory with its module.scss file
- **Hooks**: Custom hooks in `/utils/hooks/` with `use` prefix

## Working with Blog Posts

- Posts are MDX files in `/posts/` directory
- Frontmatter includes: `title`, `date`, `description`, `published` (boolean)
- Posts with `published: false` are filtered out
- Custom MDX components available: `YouTubeVideo`, `XKCD`, custom `Link`
- Math support via KaTeX and syntax highlighting via rehype-highlight

## DynamoDB Integration

- Two tables: guestbook (primary key: "note") and view tracking (primary key: "slug")
- Guestbook requires GitHub authentication
- View counting is automatic on post page loads
- IP addresses are hashed for privacy in guestbook entries
