import { useState } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import CarList from './pages/CarList'
import CarDetail from './pages/CarDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App(){
  return(
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App;