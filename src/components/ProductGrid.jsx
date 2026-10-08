import ProductCard from './ProductCard';
import './ProductGrid.css';

export default function ProductGrid({ title, products, onClearFilters }) {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <span className="product-count">Showing {products.length} products</span>
        </div>
        
        {products.length > 0 ? (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3 className="empty-title">No products found</h3>
            <p className="empty-desc">We couldn't find any products matching your current filters.</p>
            <button className="btn-primary clear-btn" onClick={onClearFilters}>
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
