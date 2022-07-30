import { useState } from 'react';
import NavbarList from '../NavbarList'

const Navbar = (props) => {
    const { navList, logo, handleShowSide, showSide } = props;

    return(
    <div>
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