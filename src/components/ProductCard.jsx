import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link-wrapper">
        <div className="product-image-container">
          {!imageError ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="product-image-fallback">
              <span className="fallback-icon">📸</span>
              <span className="fallback-text">Image unavailable</span>
            </div>
          )}
          <span className="product-category-badge">{product.category}</span>
        </div>
        
        <div className="product-info">
          <h3 className="product-name" title={product.name}>{product.name}</h3>
          
          <div className="product-meta">
            <div className="product-rating">
              <span className="star">★</span>
              <span className="rating-value">{product.rating}</span>
              <span className="rating-count">({product.reviews})</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="product-footer-action">
        <span className="product-price">{formatCurrency(product.price)}</span>
        <button 
          className="add-to-cart-btn"
          onClick={(e) => { 
            e.preventDefault(); 
            addToCart(product); 
          }}
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
