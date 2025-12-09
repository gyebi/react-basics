import React from 'react'
import {useState} from "react";


const Ricefilter = () => {
    const[riceFilter, setRiceFilter] = useState("all")

  return (
    <div>
        <select 
        value = {riceFilter}
        onChange = {(e) => setRiceFilter(e.target.value)  }>

        <option value = "all">All Meals</option>
        <option value = "with-rice">With Rice</option>
        <option value = "without-rice">No Rice</option>
        </select>
    </div>
  )
}

export default Ricefilter;