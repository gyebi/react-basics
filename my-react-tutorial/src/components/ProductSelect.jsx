import React from 'react'
import { products } from '../data'
import {useState} from 'react';

const ProductSelect = (props) => {
  return (
    <div>
        <select onChange = {(e) => props.setSelectValue(e.target.value)}>
            
            <option value= "" >All</option>
            <option value= "USA">USA</option>
            <option value= "France">FRANCE</option>
            <option value= "Japan">JAPAN</option>
            <option value= "Ghana">GHANA</option>
        </select>
      </div>
  )
}

export default ProductSelect;