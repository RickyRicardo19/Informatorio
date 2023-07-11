import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
}

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <div>
      <h1>Categories Page</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
