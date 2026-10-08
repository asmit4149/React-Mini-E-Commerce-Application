import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import productsData from '../data/products.json';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);
  
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="not-found-container container">
        <div className="not-found-content">
          <span className="not-found-icon">😕</span>
          <h2>Product Not Found</h2>
          <p>We couldn't find the product you're looking for. It may have been removed or the link is incorrect.</p>
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="product-details-page container">
      <div className="breadcrumb">
        <Link to="/" className="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Products
        </Link>
      </div>

      <div className="product-details-grid">
        <div className="product-details-image">
          {!imageError ? (
            <img 
              src={product.image} 
              alt={product.name}
              onError={handleImageError} 
            />
          ) : (
            <div className="details-image-fallback">
              <span className="fallback-icon">📸</span>
              <span className="fallback-text">Image unavailable</span>
            </div>
          )}
        </div>

        <div className="product-details-info">
          <div className="details-header">
            <span className="details-category">{product.category}</span>
            <h1 className="details-title">{product.name}</h1>
            
            <div className="details-rating">
              <span className="star">★</span>
              <span className="rating-value">{product.rating}</span>
              <span className="rating-count">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="details-price">
            {formatCurrency(product.price)}
          </div>

          <div className="details-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="details-actions">
            <button 
              className="btn-primary details-add-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
