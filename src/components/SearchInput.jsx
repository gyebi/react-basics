import React from 'react'
import { useState } from 'react';

const SearchInput = () => {
    const [inputValue, setInputValue]= useState("");
  return (
    <div>
        
        <input 
        type = 'text'
        placeholder='Type you name'
        onChange = {(e) => setInputValue(e.target.value)}
        />

        <button onClick={(e)=>console.log(inputValue)}>Click Me </button>

        Input Value: {inputValue}
        
    </div>
  );
};

export default SearchInput;