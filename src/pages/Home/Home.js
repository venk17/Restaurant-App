import React, { useState, useEffect } from 'react';
import { fetchMenuData } from '../../data/api';
import Header from '../../components/Header/Header';
import CategoryTabs from '../../components/CategoryTabs/CategoryTabs';
import DishCard from '../../components/DishCard/DishCard';
import './Home.css';

const Home = () => {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const loadMenuData = async () => {
      try {
        const data = await fetchMenuData();
        setMenuData(data[0]); // Assuming API returns array with one restaurant
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMenuData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!menuData) return <div className="no-data">No menu data available</div>;

  const { restaurant_name, table_menu_list } = menuData;

  return (
    <div className="home">
      <Header restaurantName={restaurant_name} />
      
      <CategoryTabs 
        categories={table_menu_list} 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="dishes-container">
        {table_menu_list[activeCategory]?.category_dishes.map(dish => (
          <DishCard
            key={dish.dish_id}
            dish={dish}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;