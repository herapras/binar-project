import { useState } from 'react';
import Home from './components/Home'
import About from './components/About'
import CarList from './components/CarList'
import CarDetail from './components/CarDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App(){
  return(
    <div>hhhai</div>

  )
}

export default App;

      // <BrowserRouter>
        {/* <Navbar /> */}
        // <Routes>
          // <Route path = "/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/cars" element={<CarList />} /> */}
          {/* <Route path="/cars/:id" element={<CarDetail />} /> */}
        // </Routes>
        // <Footer />
      // </BrowserRouter>