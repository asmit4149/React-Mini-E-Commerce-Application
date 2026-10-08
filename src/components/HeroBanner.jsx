import { Link } from 'react-router-dom';
import './HeroBanner.css';

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">New Collection</span>
          <h1 className="hero-title">Elevate Your Everyday Essentials</h1>
          <p className="hero-subtitle">
            Discover our curated selection of premium products designed to enhance your lifestyle with quality and style.
          </p>
          <div className="hero-actions">
            <a 
              href="/#shop-section" 
              className="btn-primary"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Shop Now
            </a>
            <a 
              href="/#shop-section" 
              className="btn-outline"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Deals
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" 
            alt="Fashion and lifestyle showcase" 
            className="hero-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
