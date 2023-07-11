import React from 'react';
import { useParams } from 'react-router-dom';

interface ProductDetailPageProps {
  // Propiedades del componente, si las hay
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
      {/* Aquí puedes mostrar los detalles del producto con el ID proporcionado */}
    </div>
  );
};

export default ProductDetailPage;