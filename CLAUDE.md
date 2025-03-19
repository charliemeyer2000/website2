# CLAUDE.md - Working with this Next.js website

## Build & Development Commands
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run linter

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