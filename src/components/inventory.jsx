// InventoryPage.js

import React, { useState, useEffect } from 'react';
import './css/inventory.css'; // Create a CSS file for styling
import napa from "./image/napa.jpg"

import SearchBar from './searchbar';

const InventoryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {


    //   const fetchData = async () => {
    //     try {
    //      
    //       const response = await fetch(//api endpoint//);
    //       const data = await response.json();
  
    //       setProducts(data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);


    // need to fetch product data
    const fetchedProducts = [
      {
        id: 1,
        name: 'Napa-Ext',
        imageUrl: napa,
        cr_date: "1-1-2023",
        exp_date: "31-12-2023",
        buyingPrice: 450.0,
        sellingPrice: 550.0,
        stock: 2000,
      },
      {
        id: 1,
        name: 'Napa',
        imageUrl: napa,
        cr_date: "1-1-2023",
        exp_date: "31-12-2023",
        buyingPrice: 450.0,
        sellingPrice: 550.0,
        stock: 2000,
      } ,
      {
        id: 1,
        name: 'Napa',
        imageUrl: napa,
        cr_date: "1-1-2023",
        exp_date: "31-12-2023",
        buyingPrice: 450.0,
        sellingPrice: 550.0,
        stock: 2000,
      },
      {
        id: 1,
        name: 'Napa',
        imageUrl: napa,
        cr_date: "1-1-2023",
        exp_date: "31-12-2023",
        buyingPrice: 450.0,
        sellingPrice: 550.0,
        stock: 2000,
      },
      {
        id: 1,
        name: 'Napa',
        imageUrl: napa,
        cr_date: "1-1-2023",
        exp_date: "31-12-2023",
        buyingPrice: 450.0,
        sellingPrice: 550.0,
        stock: 2000,
      },
      {
        id: 1,
        name: 'Napa',
        imageUrl: napa,
        cr_date: "1-1-2023",
        exp_date: "31-12-2023",
        buyingPrice: 450.0,
        sellingPrice: 550.0,
        stock: 2000,
      },
      {
        id: 1,
        name: 'Napa',
        imageUrl: napa,
        cr_date: "1-1-2023",
        exp_date: "31-12-2023",
        buyingPrice: 450.0,
        sellingPrice: 550.0,
        stock: 2000,
      },
      {
        id: 1,
        name: 'Napa',
        imageUrl: napa,
        cr_date: "1-1-2023",
        exp_date: "31-12-2023",
        buyingPrice: 450.0,
        sellingPrice: 550.0,
        stock: 2000,
      },
      {
        id: 1,
        name: 'Napa',
        imageUrl: napa,
        cr_date: "1-1-2023",
        exp_date: "31-12-2023",
        buyingPrice: 450.0,
        sellingPrice: 550.0,
        stock: 2000,
      },
      {
        id: 1,
        name: 'Napa',
        imageUrl: napa,
        cr_date: "1-1-2023",
        exp_date: "31-12-2023",
        buyingPrice: 450.0,
        sellingPrice: 550.0,
        stock: 2000,
      }


    ];

    setProducts(fetchedProducts);
  }, []);

  return (
    <><div><SearchBar/></div>
    
    <div className="inventory-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>Manufacturing date: {product.cr_date}</p>
            <p>Expiration date: {product.exp_date}</p>
            <p>Buying Price: BDT {product.buyingPrice}</p>
            <p>Selling Price: BDT {product.sellingPrice}</p>
            <p>Stock: {product.stock}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default InventoryPage;
