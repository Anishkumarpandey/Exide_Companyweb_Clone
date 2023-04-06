import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from './Component.js/Header';
import Home from './Pages.js/Home';
import About from './Pages.js/About';
import Contact from './Pages.js/Contact';
import './Style.css'
import Product from './Pages.js/Product';
import Investors from './Pages.js/Investors';
import Header1 from './Component.js/Header1';
const App = () => {
  return (
    <>
       <BrowserRouter>
          <Header1/>
          <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='About' element={<About/>}/>
              <Route path='Product' element={<Product/>}/>
              <Route path='Investors' element={<Investors/>}/>
              <Route path='Contact' element={<Contact/>}/>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
