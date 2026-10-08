import { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import FeaturedCategories from '../components/FeaturedCategories';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';
import productsData from '../data/products.json';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    
    if (search !== null) {
      setSearchQuery(search);
      // Remove query param from URL so local state can take over without URL clutter
      navigate(location.pathname + location.hash, { replace: true });
      
      // Scroll to shop section
      setTimeout(() => {
        document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.search, navigate, location.pathname, location.hash]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsData];

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(query));
    }

    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }

    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, category, sortOption]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setCategory('All');
    setSortOption('default');
  };

  const handleSelectCategory = (cat) => {
    setCategory(cat);
    document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <HeroBanner />
      <FeaturedCategories onSelectCategory={handleSelectCategory} />
      
      <div className="container" id="shop-section" style={{ paddingTop: '2rem' }}>
        <FilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          category={category}
          setCategory={setCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </div>

      <ProductGrid 
        title={searchQuery ? `Search Results for "${searchQuery}"` : "Our Collection"} 
        products={filteredAndSortedProducts} 
        onClearFilters={handleClearFilters}
      />
    </div>
  );
}
