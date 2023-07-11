import React, { useState } from 'react';

interface CreateProductPageProps {
    //propiedades del componente
}

const CreateProductPage: React.FC<CreateProductPageProps> = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');

    const hanleCreateProduct = () => {
        //logica de creacion de producto
        console.log('Creating Produc:', productName, price);
    };

    return (
        <div>
            <h1>Create Product</h1>
            <input 
              type='tect'
              placeholder='Product Name'
              value={productName}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type='number'
              placeholder='Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              />
              <button onClick={hanleCreateProduct}>Create Prodcut</button>
        </div>
    )
};

export default CreateProductPage