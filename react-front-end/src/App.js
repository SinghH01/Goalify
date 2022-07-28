import React from 'react';
import './App.css';
import MyLandingPage from './components/MyLandingPage';
import Discover from './components/Discover';
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLandingPage />} />
        <Route path="/Discover" element={<Discover />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
