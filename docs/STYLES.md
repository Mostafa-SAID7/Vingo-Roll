# Styles & Design System Documentation

Complete guide to the design system, styling conventions, and visual guidelines for Vingo Roll.

## 🎨 Design Philosophy

### Core Principles
1. **Consistency** - Uniform design across all pages
2. **Simplicity** - Clean, uncluttered interfaces
3. **Accessibility** - WCAG compliant design
4. **Responsiveness** - Mobile-first approach
5. **Performance** - Optimized for speed

### Brand Identity
- **Modern & Premium** - Reflects quality products
- **Trustworthy** - Professional and reliable
- **Approachable** - Friendly and welcoming
- **Elegant** - Sophisticated without being stuffy

## 🎨 Color System

### Primary Colors
```css
/* Purple - Primary Brand Color */
--purple-50:  #faf5ff
--purple-100: #f3e8ff
--purple-200: #e9d5ff
--purple-300: #d8b4fe
--purple-400: #c084fc
--purple-500: #a855f7
--purple-600: #9333ea  /* Main */
--purple-700: #7e22ce
--purple-800: #6b21a8
--purple-900: #581c87

/* Pink - Secondary Brand Color */
--pink-50:  #fdf2f8
--pink-100: #fce7f3
--pink-200: #fbcfe8
--pink-300: #f9a8d4
--pink-400: #f472b6
--pink-500: #ec4899
--pink-600: #db2777  /* Main */
--pink-700: #be185d
--pink-800: #9f1239
--pink-900: #831843
```

### Neutral Colors
```css
/* Gray Scale */
--gray-50:  #f9fafb
--gray-100: #f3f4f6
--gray-200: #e5e7eb
--gray-300: #d1d5db
--gray-400: #9ca3af
--gray-500: #6b7280
--gray-600: #4b5563  /* Body Text */
--gray-700: #374151
--gray-800: #1f2937
--gray-900: #111827  /* Headings */

/* White & Black */
--white: #ffffff
--black: #000000
```

### Semantic Colors
```css
/* Success */
--success-light: #d1fae5
--success: #10b981
--success-dark: #047857

/* Warning */
--warning-light: #fef3c7
--warning: #f59e0b
--warning-dark: #d97706

/* Error */
--error-light: #fee2e2
--error: #ef4444
--error-dark: #dc2626

/* Info */
--info-light: #dbeafe
--info: #3b82f6
--info-dark: #1d4ed8
```

### Gradients
```css
/* Primary Gradient */
.gradient-primary {
  background: linear-gradient(to right, #9333ea, #db2777);
}

/* Background Gradient */
.gradient-bg {
  background: linear-gradient(to bottom, #faf5ff, #ffffff);
}

/* Dark Gradient */
.gradient-dark {
  background: linear-gradient(to bottom right, #1e293b, #0f172a);
}
```

## 📝 Typography

### Font Family
```css
/* System Font Stack */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
             'Helvetica Neue', sans-serif;
```

### Font Sizes
```css
/* Tailwind Scale */
text-xs:   0.75rem   (12px)
text-sm:   0.875rem  (14px)
text-base: 1rem      (16px)
text-lg:   1.125rem  (18px)
text-xl:   1.25rem   (20px)
text-2xl:  1.5rem    (24px)
text-3xl:  1.875rem  (30px)
text-4xl:  2.25rem   (36px)
text-5xl:  3rem      (48px)
text-6xl:  3.75rem   (60px)
text-7xl:  4.5rem    (72px)
```

### Font Weights
```css
font-light:     300
font-normal:    400
font-medium:    500
font-semibold:  600
font-bold:      700
font-extrabold: 800
```

### Line Heights
```css
leading-none:    1
leading-tight:   1.25
leading-snug:    1.375
leading-normal:  1.5
leading-relaxed: 1.625
leading-loose:   2
```

### Typography Usage
```css
/* Headings */
h1: text-5xl md:text-7xl font-bold text-gray-900
h2: text-4xl md:text-5xl font-bold text-gray-900
h3: text-3xl font-bold text-gray-900
h4: text-2xl font-bold text-gray-900
h5: text-xl font-semibold text-gray-900
h6: text-lg font-semibold text-gray-900

/* Body Text */
p: text-base text-gray-600 leading-relaxed

/* Small Text */
small: text-sm text-gray-500

/* Links */
a: text-purple-600 hover:text-purple-700 transition-colors
```

## 📏 Spacing System

### Spacing Scale
```css
0:   0px
1:   0.25rem  (4px)
2:   0.5rem   (8px)
3:   0.75rem  (12px)
4:   1rem     (16px)
5:   1.25rem  (20px)
6:   1.5rem   (24px)
8:   2rem     (32px)
10:  2.5rem   (40px)
12:  3rem     (48px)
16:  4rem     (64px)
20:  5rem     (80px)
24:  6rem     (96px)
32:  8rem     (128px)
```

### Common Patterns
```css
/* Section Padding */
.section: py-20 (80px vertical)

/* Container */
.container: max-w-7xl mx-auto px-6

/* Card Padding */
.card: p-6 md:p-8

/* Button Padding */
.button: px-8 py-4

/* Gap Between Elements */
.grid: gap-8
.flex: space-x-4 space-y-4
```

## 🎯 Component Styles

### Buttons
```css
/* Primary Button */
.btn-primary {
  @apply bg-gradient-to-r from-purple-600 to-pink-600 
         text-white px-8 py-4 rounded-full 
         font-semibold text-lg 
         hover:shadow-xl transition-all duration-300;
}

/* Secondary Button */
.btn-secondary {
  @apply border-2 border-purple-600 text-purple-600 
         px-8 py-4 rounded-full font-semibold text-lg 
         hover:bg-purple-600 hover:text-white 
         transition-all duration-300;
}

/* Icon Button */
.btn-icon {
  @apply w-10 h-10 rounded-full 
         flex items-center justify-center 
         hover:bg-gray-100 transition-colors;
}
```

### Cards
```css
/* Standard Card */
.card {
  @apply bg-white rounded-2xl shadow-lg 
         p-8 hover:shadow-xl transition-all;
}

/* Product Card */
.product-card {
  @apply bg-white rounded-3xl shadow-lg 
         hover:shadow-2xl transition-all duration-500 
         overflow-hidden;
}

/* Feature Card */
.feature-card {
  @apply bg-gray-50 rounded-3xl p-8 
         hover:bg-white hover:shadow-xl 
         transition-all duration-500;
}
```

### Inputs
```css
/* Text Input */
.input {
  @apply w-full px-4 py-3 
         border-2 border-gray-200 rounded-lg 
         focus:ring-2 focus:ring-purple-500 
         focus:border-transparent 
         transition-all;
}

/* Search Input */
.input-search {
  @apply w-full pl-12 pr-4 py-3 
         rounded-full border-2 border-gray-200 
         focus:border-purple-600 focus:outline-none;
}

/* Select */
.select {
  @apply px-4 py-3 rounded-full 
         border-2 border-gray-200 
         focus:border-purple-600 focus:outline-none 
         bg-white;
}
```

### Badges
```css
/* Badge */
.badge {
  @apply bg-gradient-to-r from-purple-600 to-pink-600 
         text-white px-3 py-1 rounded-full 
         text-sm font-medium;
}

/* Status Badge */
.badge-success {
  @apply bg-green-100 text-green-700 
         px-3 py-1 rounded-full text-sm font-semibold;
}

.badge-warning {
  @apply bg-yellow-100 text-yellow-700 
         px-3 py-1 rounded-full text-sm font-semibold;
}
```

## 🎭 Animations

### Framer Motion Variants
```typescript
// Fade In
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// Scale
const scale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}

// Slide In
const slideIn = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
}
```

### Transition Classes
```css
/* Standard Transition */
.transition-all {
  transition: all 0.3s ease;
}

/* Slow Transition */
.transition-slow {
  transition: all 0.5s ease;
}

/* Transform Transition */
.transition-transform {
  transition: transform 0.3s ease;
}
```

### Hover Effects
```css
/* Scale on Hover */
.hover-scale {
  @apply hover:scale-105 transition-transform;
}

/* Shadow on Hover */
.hover-shadow {
  @apply hover:shadow-xl transition-shadow;
}

/* Lift on Hover */
.hover-lift {
  @apply hover:-translate-y-2 transition-transform;
}
```

## 📱 Responsive Design

### Breakpoints
```css
/* Tailwind Breakpoints */
sm:  640px   /* Small devices */
md:  768px   /* Medium devices */
lg:  1024px  /* Large devices */
xl:  1280px  /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### Responsive Patterns
```css
/* Mobile First */
.responsive-grid {
  @apply grid grid-cols-1 
         md:grid-cols-2 
         lg:grid-cols-4 
         gap-8;
}

/* Responsive Text */
.responsive-heading {
  @apply text-4xl md:text-5xl lg:text-6xl;
}

/* Responsive Padding */
.responsive-section {
  @apply py-12 md:py-16 lg:py-20;
}
```

## 🎨 Layout Patterns

### Page Layout
```css
/* Standard Page */
.page {
  @apply min-h-screen 
         bg-gradient-to-b from-purple-50 to-white 
         py-20;
}

/* Container */
.container {
  @apply max-w-7xl mx-auto px-6;
}

/* Narrow Container */
.container-narrow {
  @apply max-w-4xl mx-auto px-6;
}
```

### Grid Layouts
```css
/* Product Grid */
.product-grid {
  @apply grid grid-cols-1 
         md:grid-cols-2 
         lg:grid-cols-4 
         gap-8;
}

/* Feature Grid */
.feature-grid {
  @apply grid md:grid-cols-2 
         lg:grid-cols-3 
         gap-8;
}

/* Two Column */
.two-column {
  @apply grid lg:grid-cols-2 gap-12;
}
```

## 🔍 Accessibility

### Focus States
```css
/* Focus Ring */
.focus-ring {
  @apply focus:ring-2 focus:ring-purple-500 
         focus:ring-offset-2 focus:outline-none;
}

/* Focus Visible */
.focus-visible {
  @apply focus-visible:ring-2 
         focus-visible:ring-purple-500;
}
```

### Color Contrast
- **Text on White:** Gray-900 (21:1 ratio)
- **Text on Purple:** White (4.5:1+ ratio)
- **Links:** Purple-600 (4.5:1+ ratio)

### Screen Reader Only
```css
.sr-only {
  @apply absolute w-px h-px p-0 -m-px 
         overflow-hidden whitespace-nowrap 
         border-0;
}
```

## 🎯 Best Practices

### Do's
✅ Use consistent spacing (multiples of 4px)  
✅ Maintain color contrast ratios  
✅ Use semantic HTML elements  
✅ Provide hover and focus states  
✅ Test on multiple devices  
✅ Use Tailwind utility classes  
✅ Follow mobile-first approach  

### Don'ts
❌ Use arbitrary values without reason  
❌ Mix different design patterns  
❌ Ignore accessibility guidelines  
❌ Use inline styles  
❌ Create custom CSS when Tailwind exists  
❌ Forget responsive breakpoints  

## 📊 Design Tokens

### Border Radius
```css
rounded-none:   0px
rounded-sm:     0.125rem  (2px)
rounded:        0.25rem   (4px)
rounded-md:     0.375rem  (6px)
rounded-lg:     0.5rem    (8px)
rounded-xl:     0.75rem   (12px)
rounded-2xl:    1rem      (16px)
rounded-3xl:    1.5rem    (24px)
rounded-full:   9999px
```

### Shadows
```css
shadow-sm:   0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow:      0 1px 3px 0 rgb(0 0 0 / 0.1)
shadow-md:   0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg:   0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl:   0 20px 25px -5px rgb(0 0 0 / 0.1)
shadow-2xl:  0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Opacity
```css
opacity-0:    0
opacity-25:   0.25
opacity-50:   0.5
opacity-75:   0.75
opacity-100:  1
```

---

*Last Updated: 2024*
