import { useState } from 'react';
import NavbarList from '../NavbarList'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { navList, handleShowSide, showSide } = props;

    return(
    <div>
      <div class ='logo'>
        <Link to ='/'>
          <img src = 'src/content/BINAR CAR land.png'/>
        </Link>
        </div>
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

// export default function Navbar(){
//     return(
//         <>
//         <Link to="/">home</Link>
//         <Link to="/about">about</Link>
//         <Link to="/carlist">carlist</Link>
//         </>
//     )
// }

// console.log(props.logo);