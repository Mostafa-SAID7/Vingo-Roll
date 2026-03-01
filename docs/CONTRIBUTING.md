# Contributing to Vingo Roll

Thank you for your interest in contributing to Vingo Roll! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

## 📜 Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git
- Code editor (VS Code recommended)

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Vingo-Roll.git
   cd Vingo-Roll
   ```

3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/Mostafa-SAID7/Vingo-Roll.git
   ```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

## 🔄 Development Process

### 1. Create a Branch

Create a new branch for your feature or bugfix:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bugfix-name
```

**Branch Naming Convention:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `style/` - Code style changes
- `refactor/` - Code refactoring
- `test/` - Adding tests
- `chore/` - Maintenance tasks

### 2. Make Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes

```bash
# Run linter
npm run lint

# Build project
npm run build

# Preview build
npm run preview
```

### 4. Commit Your Changes

Follow our [commit guidelines](#commit-guidelines)

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create Pull Request

- Go to GitHub and create a Pull Request
- Fill out the PR template
- Link related issues
- Request review

## 💻 Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type when possible
- Use meaningful variable names

**Example:**
```typescript
// Good
interface Product {
  id: number;
  name: string;
  price: number;
}

const getProduct = (id: number): Product => {
  // implementation
}

// Bad
const getProduct = (id: any): any => {
  // implementation
}
```

### React Components

- Use functional components
- Use hooks for state management
- Keep components small and focused
- Extract reusable logic into custom hooks

**Example:**
```typescript
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  onSubmit: (value: string) => void;
}

const MyComponent: React.FC<Props> = ({ title, onSubmit }) => {
  const [value, setValue] = useState('');

  return (
    <motion.div>
      {/* Component JSX */}
    </motion.div>
  );
};

export default MyComponent;
```

### Styling

- Use Tailwind CSS utility classes
- Follow existing design system
- Maintain responsive design
- Ensure accessibility

**Example:**
```tsx
// Good
<button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all">
  Click Me
</button>

// Avoid custom CSS when Tailwind exists
<button style={{ backgroundColor: '#9333ea' }}>
  Click Me
</button>
```

### File Organization

- One component per file
- Group related files together
- Use meaningful file names
- Follow existing structure

```
src/
├── components/
│   └── ComponentName.tsx
├── pages/
│   └── PageName.tsx
└── utils/
    └── helperFunctions.ts
```

## 📝 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
# Feature
git commit -m "feat(shop): add product filtering functionality"

# Bug fix
git commit -m "fix(cart): resolve quantity update issue"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Style
git commit -m "style(navbar): improve responsive layout"
```

### Commit Best Practices

- Write clear, concise messages
- Use present tense ("add" not "added")
- Keep subject line under 50 characters
- Add detailed description in body if needed
- Reference issues in footer

## 🔀 Pull Request Process

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] Tested on multiple browsers
- [ ] Responsive design verified

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How to test the changes

## Screenshots
If applicable

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings
```

### Review Process

1. Maintainer reviews PR
2. Feedback provided if needed
3. Make requested changes
4. Re-request review
5. PR merged when approved

## 🧪 Testing

### Manual Testing

- Test all affected features
- Check responsive design
- Verify browser compatibility
- Test accessibility features

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing

Test on:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## 📚 Documentation

### Code Comments

```typescript
/**
 * Calculates the total price including tax
 * @param subtotal - The subtotal amount
 * @param taxRate - The tax rate as decimal (e.g., 0.13 for 13%)
 * @returns The total price with tax
 */
const calculateTotal = (subtotal: number, taxRate: number): number => {
  return subtotal * (1 + taxRate);
};
```

### Component Documentation

```typescript
/**
 * ProductCard Component
 * 
 * Displays a product with image, name, price, and actions
 * 
 * @param product - Product object with id, name, price, image
 * @param onAddToCart - Callback when add to cart is clicked
 * 
 * @example
 * <ProductCard 
 *   product={productData} 
 *   onAddToCart={handleAddToCart}
 * />
 */
```

### README Updates

- Update README.md for new features
- Add usage examples
- Update screenshots if UI changed
- Keep documentation in sync with code

## 🐛 Reporting Bugs

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 120]
- Version: [e.g., 1.0.0]
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
Description of the problem

**Describe the solution**
How you'd like it to work

**Describe alternatives**
Other solutions considered

**Additional context**
Any other information
```

## 🎯 Areas for Contribution

### High Priority

- [ ] Add unit tests
- [ ] Improve accessibility
- [ ] Performance optimization
- [ ] Mobile experience enhancement

### Medium Priority

- [ ] Add more product categories
- [ ] Implement user authentication
- [ ] Add payment integration
- [ ] Create admin dashboard

### Low Priority

- [ ] Add dark mode
- [ ] Implement PWA features
- [ ] Add internationalization
- [ ] Create mobile app

## 📞 Getting Help

- **Questions:** Open a GitHub Discussion
- **Bugs:** Create an Issue
- **Chat:** Join our Discord (if available)
- **Email:** hello@vingoroll.com

## 🙏 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Vingo Roll! 🎉

*Last Updated: 2024*
