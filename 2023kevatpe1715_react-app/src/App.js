import React from "react";
import {Message} from  "./pages/Message";
import {Buttons} from "./pages/Buttons";
import {Router} from "./pages/Router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counters } from "./pages/Counter";
function App() {
  return (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Router/>}>
          <Route index element={<Message/>}/>
          <Route path ='Buttons' element={<Buttons/>}/>
          <Route path ='Counters' element={<Counters/>}/>
        </Route> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
