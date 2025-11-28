# GitHub Explorer

A GitHub search application built with React 19, Next.js 16, and TypeScript.

## Features

- 🔍 **Search GitHub** - Search for repositories or users
- 🔄 **Infinite Scroll** - Load more results automatically
- 📊 **Repository Details** - View languages, stars, forks, and recent forkers
- 👤 **User Cards** - View user avatars and profile links
- ⚡ **Debounced Search** - Optimized API calls with 500ms debounce
- 💾 **Cached Results** - 5-minute cache to reduce API requests
- ⌨️ **Keyboard Shortcut** - `Cmd/Ctrl + K` to focus search

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **MUI 7** (Material UI)
- **TanStack Query** (data fetching & caching)
- **Jest + Testing Library** (unit tests)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Scripts

| Command                 | Description             |
| ----------------------- | ----------------------- |
| `npm run dev`           | Start dev server        |
| `npm run build`         | Build for production    |
| `npm test`              | Run tests               |
| `npm run test:coverage` | Run tests with coverage |

## Project Structure

```
src/
├── components/       # React components (each with styles & tests)
├── hooks/            # Custom hooks (useDebounce, useGitHubSearch)
├── lib/              # API service & constants
├── providers/        # MUI & Query providers
├── types/            # TypeScript types
└── utils/            # Utility functions
```

## Testing

```bash
npm test
```

Tests cover: SearchBar, SearchTypeToggle, UserCard, RepositoryCard, LanguageBadge, EmptyState, ErrorState, LoadingState, ResultsHeader, useDebounce hook, and API service.
