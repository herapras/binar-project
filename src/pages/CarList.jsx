import { useState, useEffect } from 'react';
const URL ='https://bootcamp-rent-car.herokuapp.com/admin/car'

const Carlist = () => {
    const [cars, setCars] = useState([])

    async function getCars(){
        try{
            const rest = window.fetch(URL);
            const data = await rest.json();
            setCars [data]
        } catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        getCars()
    }, [])

    function handleViewDetail(id){
        navigate('/cars/${id}')
    }

    return(
        <>
        <h1>CarList</h1>
        <ul>
            {cars.map(car => {
                <li>
                    <img src={car.image} alt={car.name}/>
                    <div>{car.name}</div>
                    <div>{car.price}</div>
                    <button onClick={() => handleViewDetail()}>view detail</button>
                </li>
            })}
        </ul>
        </>
    )
}

export default CarList