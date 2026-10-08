import { Link } from 'react-router-dom';
import './Footer.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">🛍️</span>
            ShopEase
          </Link>
          <p className="footer-desc">
            Your premium destination for modern essentials. Quality products, exceptional service.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">Shop</h4>
            <Link to="/">All Products</Link>
            <Link to="/">Featured</Link>
            <Link to="/">New Arrivals</Link>
            <Link to="/">Discounts</Link>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Support</h4>
            <Link to="/">Help Center</Link>
            <Link to="/">Track Order</Link>
            <Link to="/">Returns</Link>
            <Link to="/">Contact Us</Link>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} ShopEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
