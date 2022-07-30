import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SearchCar = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('https://bootcamp-rent-car.herokuapp.com/admin/car')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    console.log('data', data);

    return (
        <div>
            <Link to ='/' >
                {data.map((item) => (
                        <div>
                            <img src = {item.image} />
                            <h1>{item.name}</h1>
                            <Link to = {`/cardetail/${item.id}`}>
                                <button>Pilih Mobil</button>
                            </Link>
                        </div>
                    ))}
            </Link>
        </div>
    );
}

export default SearchCar;