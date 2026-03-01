# Vingo Roll - Premium Curtains E-Commerce Platform

<div align="center">

![Vingo Roll Logo](https://img.shields.io/badge/Vingo_Roll-Premium_Curtains-purple?style=for-the-badge)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**A modern, full-featured e-commerce platform for premium window treatments**

[Live Demo](https://vingo-roll.netlify.app) • [Documentation](./docs) • [Report Bug](https://github.com/Mostafa-SAID7/Vingo-Roll/issues) • [Request Feature](https://github.com/Mostafa-SAID7/Vingo-Roll/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

Vingo Roll is a comprehensive e-commerce platform specializing in premium curtains, blinds, and window treatments. Built with modern web technologies, it offers a seamless shopping experience with advanced features like real-time search, filtering, product customization, and detailed product pages.

### ✨ Key Highlights

- 🛍️ **Full E-Commerce Experience** - Complete shopping flow from browsing to checkout
- 🔍 **Advanced Search & Filters** - Real-time search with category, price, and rating filters
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Beautiful animations and intuitive navigation
- 🚀 **High Performance** - Fast loading times with optimized assets
- ♿ **Accessible** - WCAG compliant design principles

---

## 🚀 Features

### Shopping Experience
- **Product Catalog** - Browse 16+ premium curtain products
- **Advanced Filtering** - Filter by category, price range, and ratings
- **Search Functionality** - Real-time product search
- **Sort Options** - Sort by price, rating, popularity, or featured
- **View Modes** - Toggle between grid and list views
- **Pagination** - Smooth navigation through product pages

### Product Details
- **Image Gallery** - Multiple product images with thumbnail navigation
- **Size Selection** - Choose from multiple size options
- **Color Selection** - Visual color picker with previews
- **Quantity Selector** - Easy quantity adjustment
- **Customer Reviews** - Read and filter customer feedback
- **Related Products** - Discover similar items

### User Features
- **Wishlist** - Save favorite products
- **Shopping Cart** - Manage cart items
- **User Profile** - Personal account management
- **Custom Orders** - Request custom designs
- **Design Inspiration** - Browse curated room designs

### Business Pages
- **About Us** - Company story and values
- **Services** - Professional services offered
- **Contact** - Multiple contact methods
- **FAQ** - Comprehensive help section
- **Blog/Inspiration** - Design ideas and tips

For a complete feature list, see [FEATURES.md](./docs/FEATURES.md)

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.8** - Build tool
- **React Router DOM 6.27.0** - Routing

### Styling
- **Tailwind CSS 3.4.14** - Utility-first CSS
- **Framer Motion 11.11.11** - Animations
- **Lucide React 0.454.0** - Icons

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

For detailed technology information, see [TECHNOLOGIES.md](./docs/TECHNOLOGIES.md)

---

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mostafa-SAID7/Vingo-Roll.git
   cd Vingo-Roll
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## 📁 Project Structure

```
vingo-roll/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── CallToAction.tsx
│   │   ├── CustomerReviews.tsx
│   │   ├── FeaturedCategories.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Newsletter.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── SecuritySection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TransactionJourney.tsx
│   │   └── WhyChooseUs.tsx
│   ├── pages/           # Page components
│   │   ├── About.tsx
│   │   ├── Cart.tsx
│   │   ├── Categories.tsx
│   │   ├── ContactUs.tsx
│   │   ├── CustomDesign.tsx
│   │   ├── FAQ.tsx
│   │   ├── Home.tsx
│   │   ├── Inspiration.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── Profile.tsx
│   │   ├── Services.tsx
│   │   ├── Shop.tsx
│   │   ├── Wishlist.tsx
│   │   └── ... (30+ pages)
│   ├── styles/          # Style documentation
│   │   └── designSystem.md
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── docs/                # Documentation
│   ├── CHANGELOG.md
│   ├── CODE_OF_CONDUCT.md
│   ├── CONTRIBUTING.md
│   ├── FEATURES.md
│   ├── SECURITY.md
│   ├── STRUCTURE.md
│   ├── STYLES.md
│   ├── TECHNOLOGIES.md
│   └── USE_CASES.md
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

For detailed structure information, see [STRUCTURE.md](./docs/STRUCTURE.md)

---

## 📚 Documentation

Comprehensive documentation is available in the `docs/` folder:

- **[FEATURES.md](./docs/FEATURES.md)** - Complete feature list and descriptions
- **[TECHNOLOGIES.md](./docs/TECHNOLOGIES.md)** - Technology stack details
- **[STRUCTURE.md](./docs/STRUCTURE.md)** - Project structure and organization
- **[STYLES.md](./docs/STYLES.md)** - Design system and styling guidelines
- **[USE_CASES.md](./docs/USE_CASES.md)** - User stories and use cases
- **[CONTRIBUTING.md](./docs/CONTRIBUTING.md)** - Contribution guidelines
- **[CODE_OF_CONDUCT.md](./docs/CODE_OF_CONDUCT.md)** - Community guidelines
- **[SECURITY.md](./docs/SECURITY.md)** - Security policies
- **[CHANGELOG.md](./docs/CHANGELOG.md)** - Version history

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./docs/CONTRIBUTING.md) for details on:

- Code of Conduct
- Development process
- Submitting pull requests
- Coding standards
- Testing requirements

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mostafa Said**

- Portfolio: [m-said-portfolio.netlify.app](https://m-said-portfolio.netlify.app/)
- GitHub: [@Mostafa-SAID7](https://github.com/Mostafa-SAID7)

---

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce platforms
- Icons by [Lucide](https://lucide.dev/)
- Images from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

---

## 📞 Support

For support, email hello@vingoroll.com or open an issue on GitHub.

---

<div align="center">

**Made with ❤️ by Mostafa Said**

⭐ Star this repo if you find it helpful!

</div>
