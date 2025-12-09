import React from 'react'

const Colorpicker = (props) => {

  return (
    <div>
        <select onChange={(e)=> props.setColorPicked(e.target.value)}>
            <option value= 'red' >Red</option>
            <option value= 'blue' >Blue</option>
            <option value= 'green' >Green</option>
            <option value= 'yellow' >Yellow</option>
            <option value= 'white' >White</option>
        </select>
        
    </div>
  );
};

export default Colorpicker;