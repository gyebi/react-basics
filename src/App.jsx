import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Products from "./Products"

function App(){
  return(
    <>
   <Routes>
          <Route path='/'  element={<Homepage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />}/>          
        </Routes>

    </>

  );
}

export default App