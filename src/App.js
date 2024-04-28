//1. import area

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {route} from "./Routes/Routes"
import Layout from "./Component/ui/Layout";

//2. defination area

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout/>}>
        {
          route.map((currentValue,index,array)=>{
            return (<Route  key={index} path= {currentValue.path} element = {currentValue.element} />) 
  
          })
        }
        </Route>
        
        
        
      </Routes>
    </BrowserRouter>
    
  );
}

//3. export area 
export default App;
