import './FeaturedCategories.css';

const categories = [
  { id: 1, name: 'Electronics', icon: '💻' },
  { id: 2, name: 'Fashion', icon: '👕' },
  { id: 3, name: 'Home & Living', icon: '🪴' },
  { id: 4, name: 'Accessories', icon: '👜' }
];

export default function FeaturedCategories({ onSelectCategory }) {
  const handleCategoryClick = (categoryName) => {
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }
  };

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div 
              key={category.id} 
              className="category-card" 
              tabIndex="0" 
              role="button"
              onClick={() => handleCategoryClick(category.name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCategoryClick(category.name);
                }
              }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
