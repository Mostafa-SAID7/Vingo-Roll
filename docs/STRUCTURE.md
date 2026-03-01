# Project Structure Documentation

Detailed explanation of the Vingo Roll project structure and organization.

## 📁 Root Directory

```
vingo-roll/
├── public/              # Static assets
├── src/                 # Source code
├── docs/                # Documentation
├── node_modules/        # Dependencies (git-ignored)
├── dist/                # Build output (git-ignored)
├── .git/                # Git repository
├── .gitignore           # Git ignore rules
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project metadata & dependencies
├── package-lock.json    # Locked dependency versions
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript base config
├── tsconfig.app.json    # TypeScript app config
├── tsconfig.node.json   # TypeScript node config
└── vite.config.ts       # Vite configuration
```

## 📂 Source Directory (`src/`)

### Overview
```
src/
├── components/          # Reusable React components
├── pages/               # Page-level components
├── styles/              # Style documentation
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── index.css            # Global styles
└── vite-env.d.ts        # Vite type definitions
```

### Components Directory (`src/components/`)

**Purpose:** Reusable UI components used across multiple pages

```
components/
├── CallToAction.tsx         # CTA section component
├── CustomerReviews.tsx      # Customer reviews carousel
├── FeaturedCategories.tsx   # Category showcase
├── Footer.tsx               # Site footer
├── Hero.tsx                 # Homepage hero section
├── Navbar.tsx               # Navigation bar
├── Newsletter.tsx           # Newsletter signup
├── ProductShowcase.tsx      # Featured products
├── SecuritySection.tsx      # Security features
├── Testimonials.tsx         # Customer testimonials
├── TransactionJourney.tsx   # Transaction flow
└── WhyChooseUs.tsx          # Benefits section
```

**Component Structure:**
```typescript
// Example component structure
import React from 'react';
import { motion } from 'framer-motion';

const ComponentName = () => {
  // State and hooks
  // Event handlers
  // Render logic
  
  return (
    <section className="...">
      {/* Component JSX */}
    </section>
  );
};

export default ComponentName;
```

### Pages Directory (`src/pages/`)

**Purpose:** Full-page components mapped to routes

```
pages/
├── About.tsx                # About us page
├── Accessibility.tsx        # Accessibility statement
├── BlackoutCurtains.tsx     # Blackout category page
├── CareInstructions.tsx     # Care guide
├── Cart.tsx                 # Shopping cart
├── Categories.tsx           # All categories
├── ContactUs.tsx            # Contact form
├── CookiePolicy.tsx         # Cookie policy
├── CustomDesign.tsx         # Custom design service
├── CustomOrders.tsx         # Custom order form
├── DesignerCollection.tsx   # Designer products
├── FAQ.tsx                  # Frequently asked questions
├── Home.tsx                 # Homepage
├── Inspiration.tsx          # Design inspiration
├── Installation.tsx         # Installation service
├── MeasuringService.tsx     # Measuring service
├── OurStory.tsx             # Company story
├── PrivacyPolicy.tsx        # Privacy policy
├── ProductDetail.tsx        # Product detail page
├── Profile.tsx              # User profile
├── ReturnsExchanges.tsx     # Returns policy
├── Reviews.tsx              # All reviews
├── SaleItems.tsx            # Sale products
├── Services.tsx             # Services overview
├── SheerCurtains.tsx        # Sheer category page
├── ShippingInfo.tsx         # Shipping information
├── Shop.tsx                 # Main shop page
├── SizeGuide.tsx            # Size guide
├── TermsOfService.tsx       # Terms of service
├── ThermalCurtains.tsx      # Thermal category page
└── Wishlist.tsx             # User wishlist
```

**Page Structure:**
```typescript
// Example page structure
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageName = () => {
  // Page-specific state
  // Data fetching (future)
  // Event handlers
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page content */}
      </div>
    </div>
  );
};

export default PageName;
```

## 🎨 Styles Directory (`src/styles/`)

```
styles/
└── designSystem.md      # Design system documentation
```

**Design System Contents:**
- Color palette
- Typography scale
- Spacing system
- Component patterns
- Animation guidelines

## 🔧 Configuration Files

### `package.json`
**Purpose:** Project metadata and dependencies

```json
{
  "name": "vite-react-typescript-starter",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.27.0",
    "framer-motion": "^11.11.11",
    "lucide-react": "^0.454.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.3",
    "typescript": "~5.5.3",
    "vite": "^5.4.8",
    "tailwindcss": "^3.4.14",
    "postcss": "^8.4.47",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.13.0"
  }
}
```

### `vite.config.ts`
**Purpose:** Vite build configuration

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### `tailwind.config.js`
**Purpose:** Tailwind CSS customization

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `tsconfig.json`
**Purpose:** TypeScript compiler options

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

### `eslint.config.js`
**Purpose:** Code linting rules

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

## 📚 Documentation Directory (`docs/`)

```
docs/
├── CHANGELOG.md           # Version history
├── CODE_OF_CONDUCT.md     # Community guidelines
├── CONTRIBUTING.md        # Contribution guide
├── FEATURES.md            # Feature documentation
├── SECURITY.md            # Security policies
├── STRUCTURE.md           # This file
├── STYLES.md              # Style guide
├── TECHNOLOGIES.md        # Tech stack details
└── USE_CASES.md           # User stories
```

## 🗂️ File Naming Conventions

### Components & Pages
- **Format:** PascalCase
- **Examples:** `ProductDetail.tsx`, `ShoppingCart.tsx`
- **Reason:** React component convention

### Configuration Files
- **Format:** kebab-case or camelCase
- **Examples:** `vite.config.ts`, `tailwind.config.js`
- **Reason:** Standard configuration naming

### Documentation
- **Format:** UPPERCASE.md
- **Examples:** `README.md`, `CONTRIBUTING.md`
- **Reason:** Visibility and convention

## 📦 Import Structure

### Absolute Imports (Future Enhancement)
```typescript
// Instead of:
import Component from '../../../components/Component'

// Use:
import Component from '@/components/Component'
```

### Current Import Order
1. React and external libraries
2. React Router
3. Components
4. Types/Interfaces
5. Utilities
6. Styles

**Example:**
```typescript
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
```

## 🔄 Data Flow

### Current Architecture
```
User Interaction
    ↓
Component State (useState)
    ↓
Event Handler
    ↓
State Update
    ↓
Re-render
```

### Future Architecture (with API)
```
User Interaction
    ↓
Action Dispatch
    ↓
API Call
    ↓
State Update (Redux/Context)
    ↓
Component Re-render
```

## 🎯 Component Hierarchy

```
App
├── Navbar
│   ├── Logo
│   ├── Navigation Links
│   ├── Search Modal
│   └── User Actions
├── Routes
│   ├── Home
│   │   ├── Hero
│   │   ├── FeaturedCategories
│   │   ├── ProductShowcase
│   │   ├── WhyChooseUs
│   │   └── Newsletter
│   ├── Shop
│   │   ├── SearchBar
│   │   ├── Filters
│   │   ├── ProductGrid
│   │   └── Pagination
│   ├── ProductDetail
│   │   ├── ImageGallery
│   │   ├── ProductInfo
│   │   ├── Reviews
│   │   └── RelatedProducts
│   └── ... (other pages)
└── Footer
    ├── Links
    ├── Newsletter
    └── Copyright
```

## 📊 Code Statistics

### Lines of Code (Approximate)
- **Components:** ~3,000 lines
- **Pages:** ~8,000 lines
- **Configuration:** ~500 lines
- **Documentation:** ~5,000 lines
- **Total:** ~16,500 lines

### File Count
- **Components:** 12 files
- **Pages:** 30 files
- **Config Files:** 10 files
- **Documentation:** 9 files
- **Total:** 61 files

## 🔍 Code Organization Best Practices

### Component Organization
1. Imports
2. Type definitions
3. Component function
4. State declarations
5. Effect hooks
6. Event handlers
7. Render helpers
8. Return JSX
9. Export

### File Size Guidelines
- **Components:** < 300 lines
- **Pages:** < 500 lines
- **Utilities:** < 200 lines

### When to Split Components
- Component exceeds 300 lines
- Reusable logic identified
- Multiple responsibilities
- Complex state management

## 🚀 Scalability Considerations

### Future Enhancements
- **Feature Modules:** Group related components
- **Shared Utilities:** Common helper functions
- **API Layer:** Centralized API calls
- **State Management:** Redux or Context API
- **Testing:** Unit and integration tests

### Recommended Structure (Future)
```
src/
├── features/
│   ├── products/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── api/
│   ├── cart/
│   └── user/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
├── api/
├── store/
└── types/
```

---

*Last Updated: 2024*
