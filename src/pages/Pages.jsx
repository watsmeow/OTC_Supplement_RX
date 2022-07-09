import React from 'react';
import Home from './Home';
import CategorySupp from './CategorySupp';
import Searched from './Searched'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CategorySupp/:type' element={<CategorySupp />} />
        <Route path='/searched/:search' element={<Searched />} />
    </Routes>
  );
}

export default Pages