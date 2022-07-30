import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const CarDetail = () => {

    const [data, setData] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return(
        <div>
            <img src = {data.image} />
            <h1>{data.name}</h1>
        </div>
    )
}

export default CarDetail;