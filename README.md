# ShopEase Mini E-Commerce

A modern, responsive, and functional frontend e-commerce application built with React, Vite, and React Router. Developed as a take-home assessment for a React Developer Intern position.

## 🚀 Implemented Features

* **Local JSON Dataset**: Serves 16+ rich product items (Electronics, Fashion, Home & Living, Accessories) with realistic images, ratings, and descriptions.
* **Dynamic Routing**: Uses React Router DOM for seamless navigation between Home, Product Details, and Cart views.
* **Product Discovery**: 
  * Functional, real-time case-insensitive search by product name.
  * Category filtering hooked into an interactive UI.
  * Sorting capabilities (Price Asc/Desc, Name A-Z, Highest Rated).
* **Product Details**: Dedicated details view per item loaded dynamically via URL parameter, with graceful "Product Not Found" fallback handling.
* **Shopping Cart**:
  * Shared global cart state using Context API and `useCart` hook.
  * LocalStorage persistence to ensure cart data survives page refreshes.
  * Accurate real-time syncing of total items (badge) and total cost.
  * Interactive cart page allowing users to increment/decrement quantities and remove items.
* **Resilient UI**:
  * Graceful fallback logic for broken images (e.g., Unsplash downtime).
  * Comprehensive empty states for both searches (no matching items) and the cart (no items added).
  * Responsive layouts for desktop, tablet, and mobile breakpoints.
* **Formatting**: Standardized Indian Rupee (₹) currency formatting globally.

## 🛠️ Technologies Used

* **React 19**
* **Vite** (Build Tool)
* **React Router DOM 7**
* **Vanilla CSS** (Custom CSS properties, Flexbox, CSS Grid)
* **Oxlint** (Linting)

## 📁 Project Structure

```
src/
├── assets/            # Static assets
├── components/        # Reusable UI components (Header, Footer, Cards, Grid)
├── context/           # React Context (CartContext)
├── data/              # JSON dataset (products.json)
├── hooks/             # Custom React Hooks (useCart)
├── pages/             # Route views (Home, Cart, ProductDetails)
├── utils/             # Helper functions (formatCurrency)
├── App.jsx            # Main app shell & Routing
├── index.css          # Global styles & CSS variables
└── main.jsx           # Entry point & Context Providers
```

## 💻 Setup & Installation

### Prerequisites
* Node.js (v16.0 or higher recommended)
* npm (Node Package Manager)

### Installation
1. Clone or download the repository.
2. Navigate into the project directory:
   ```bash
   cd ShopEase-Mini-Ecommerce
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally
To spin up the local development server:
```bash
npm run dev
```
Open your browser and navigate to the localhost URL provided in the terminal (usually `http://localhost:5173`).

### Production Build
To create an optimized production build:
```bash
npm run build
```
This compiles the application into the `dist/` directory. You can preview it using:
```bash
npm run preview
```

### Automated Checks
To run the included linter:
```bash
npm run lint
```
*Note: Automated unit/integration tests (e.g., Jest/Vitest) are not included in this scaffold, so testing remains manual via browser interactions.*
