import React from 'react';
import bannerImage from '../assets/image/R.jpeg';
import './Style/HomePage.css';
import Navbar from './Navbar';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Navbar /> {/* Agregar el componente Navbar aquí */}
      <section className="banner-section">
        <h1 className="home-page-title">¡Bienvenido!</h1>
        <img src={bannerImage} alt="Promotional Banner" className="home-page-banner" />
      </section>
      <section className="content-section">
        <h2>De todo un poco</h2>
        <p>Ecommercer</p>
      </section>
    </div>
  );
};

export default HomePage;
