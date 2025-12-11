
import './App.css'
import ProductCard from './components/ProductCard'
import ProductSelect from './components/ProductSelect';
import { useState } from 'react';


function App() {
        const [selectValue, setSelectValue ]= useState("");  

  return (

    <div className = "product-grid">
  <>
    
    <ProductSelect setSelectValue = {setSelectValue}/>
    <ProductCard selectValue = {selectValue}/>  
    </>

    </div>
   
  );
}


export default App;


