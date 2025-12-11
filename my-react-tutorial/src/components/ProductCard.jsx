import React from 'react'
import { products } from '../data';


const ProductCard = (props) => {

  const filterProducts = () => 

    props.selectValue !==''
    ? products.filter((prod) => prod.country===props.selectValue)
    : products;


  const filteredProducts = filterProducts();


  return (
    <div >
    {filteredProducts.map((item) => {
      return(
      <div className = "product-card">
        <img src ={item.image} alt="shoe pict" />
        <h4>{item.category}</h4>
        
        <p className="country-badge">{item.country}</p>

        <p>{item.description}</p>
        <p> <strong>${item.price}</strong> </p>
        </div>

      );
    })}
    </div>
  )};

export default ProductCard;