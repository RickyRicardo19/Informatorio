import React, { useState } from "react";

import { useParams } from "react-router-dom";

interface EditProductPageProps {
    // Propiedades de compoente
}

const  EditProductPage: React.FC<EditProductPageProps> = () => {
    const { id } = useParams<{ id: string}>();
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    
    const handleEditProduct = () => {
        //logica
        console.log('Editing Product:', id, productName, price);
    };

    return(
        <div>
            <h1>Edit Product Page</h1>
            <p>Product ID: {id}</p>
            <input 
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            />
            <input 
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)} 
            />
            <button onClick={handleEditProduct}></button>
        </div>
    );
};

export default EditProductPage;