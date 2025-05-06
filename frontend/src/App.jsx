import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
//import api from './services/api';
//import jwt_decode from 'jwt-decode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;