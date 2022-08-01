import { useState } from 'react';
import NavbarList from '../NavbarList'
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = (props) => {
    const { navList, handleShowSide, showSide } = props;

    return(
    <div>
        <Link to ='/'>
          <img src = 'src/content/BINAR CAR land.png' class ='logo'/>
        </Link>
      <div>
        <h1 onClick={handleShowSide}>{!!showSide ? "X" : "="}</h1>
      </div>
      {navList.map((item => (
            <NavbarList item={item}/>
        )
        ))
      }
      <div>
      </div>
    </div>
    )
  }
export default Navbar;