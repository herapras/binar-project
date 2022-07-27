import { useState } from 'react';
import List from '../List'

const Navbar = (props) => {
    const { navList, logo, handleShowSide, showSide } = props;

    return(
    <div>
      <div>
        <h1 onClick={handleShowSide}>{!!showSide ? "X" : "="}</h1>
      </div>
      {navList.map((item => (
            <List item={item}/>
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