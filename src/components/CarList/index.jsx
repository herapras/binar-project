import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as React from 'react';
import { Box, Paper, Button } from '@mui/material';
import './style.css'

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
                {data.map((item) => (
                            <Box
                                sx={{
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  flexDirection: 'row',
                                  justifyContent: 'space-around',
                                  '& > :not(style)': {
                                    m: 2,
                                    width: 333,
                                    height: 478,
                                  },
                                }}
                              >
                            <Paper variant="outlined">
                                <img src = {item.image} class = 'carlist--img'/>
                                <h1 class = 'carlist--name'>{item.name}</h1>
                                <p class = 'carlist--price'>Rp {item.price} / hari</p>
                                <p class = 'carlist--desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <Link to = {`/cardetail/${item.id}`}>
                                    <Button class = 'carlist--button'>Pilih Mobil</Button>
                                </Link>
                            </Paper>
                        </Box>
                    ))}
        </div>
    );
}

export default SearchCar;