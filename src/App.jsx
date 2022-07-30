import { useState } from 'react';
import Home from './components/Home'
import CarList from './components/CarList'
import CarDetail from './components/CarDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  const navList = ["Our Service", "Why Us", "Testimonial", "FAQ"];

  const [showSide, setshowSide] = useState(false);
  console.log(showSide);

  const handleShowSide = () => {
    console.log("hai");
    setshowSide(!showSide);
  }

  const props = {
    navList,
    handleShowSide,
    showSide
  }
  
  return(
    <BrowserRouter>
      <Navbar {...props} />
      <Routes>
          <Route path='/' element={<Home {...props} />} />
          <Route path='/carlist' element={<CarList {...props} />} />
          <Route path='/cardetail/:id' element={<CarDetail {...props} />} />
      </Routes>
      <Footer {...props} />
    </BrowserRouter>
  )
}

export default App;
