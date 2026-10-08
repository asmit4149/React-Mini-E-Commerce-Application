import './FilterBar.css';

export default function FilterBar({ 
  searchQuery, setSearchQuery, 
  category, setCategory, 
  sortOption, setSortOption 
}) {
  return (
    <div className="filter-bar">
      <div className="search-group">
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input 
          type="text" 
          placeholder="Search products by name..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="filter-search"
        />
      </div>
      <div className="filter-group">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="filter-select">
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home & Living">Home & Living</option>
          <option value="Accessories">Accessories</option>
        </select>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="filter-select">
          <option value="default">Sort By: Recommended</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="rating-desc">Highest Rated</option>
        </select>
      </div>
    </div>
  );
}
