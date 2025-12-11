import "./App.css" ;
import RecipeCard from "./components/RecipeCard";
import { sampleRecipes } from "./data";
import SearchInput from "./components/SearchInput";
import Colorpicker from "./components/Colorpicker";
import {useState} from 'react';
import Colorpreview from "./components/Colorpreview";
import Ricefilter from "./components/Ricefilter";
 

function App(){
      const [colorPicked, setColorPicked]= useState('')
       
  return(
    <>

    <SearchInput/>
    <Colorpicker colorPicked={colorPicked} setColorPicked = {setColorPicked}/>
    <Colorpreview colorPicked={colorPicked} setColorPicked ={setColorPicked} />

    <Ricefilter/>

    <div className = "recipe-grid">
    {sampleRecipes.map((recipe)=>(
      <RecipeCard
        image={recipe.image}
        title={recipe.title}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        />
    ))}
    </div>
    </>
  );
}

export default App;