import {link} from 'react-router-dom';

export default function Navbar(){
    return(
        <>
        <link to="/">home</link>
        <link to="/about">about</link>
        <link to="/carlist">carlist</link>
        </>
    )
}