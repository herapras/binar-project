import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CarDetail(){
    const params = useParams();
    async function getCars(){
        try{
            const res = await window.fetch('${URL}/${id}');
            const data = await res.json();
            setCar (data)
        } catch(e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getCars()
    }, [])

    return(
        <>
            <h1>{car.name}</h1>
            <img src={car.image} alt={car.name}/>
            <link to="/cars">back to list car</link>
        </>
    )
}