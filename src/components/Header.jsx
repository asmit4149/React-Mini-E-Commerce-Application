import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Header.css';

export default function Header() {
  const { cartCount } = useCart();
  const [headerSearch, setHeaderSearch] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (headerSearch.trim()) {
      navigate(`/?search=${encodeURIComponent(headerSearch.trim())}#shop-section`);
      setHeaderSearch('');
    } else {
      navigate('/#shop-section');
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">🛍️</span>
          ShopEase
        </Link>

        {/* Search Field Area */}
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            placeholder="Search for products, brands and more..." 
            className="search-input"
            aria-label="Search products"
            value={headerSearch}
            onChange={(e) => setHeaderSearch(e.target.value)}
          />
          <button type="submit" className="search-btn" aria-label="Submit search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </form>

        {/* Navigation & Cart */}
        <nav className="nav-actions">
          <div className="category-nav">
            <Link to="/" className="nav-link">Home</Link>
            <span className="nav-link">Categories</span>
            <span className="nav-link">Deals</span>
          </div>

          <Link to="/cart" className="cart-wrapper" aria-label="View cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
