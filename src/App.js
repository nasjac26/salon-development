import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;
