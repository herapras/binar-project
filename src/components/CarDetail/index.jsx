import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import { Button, Paper } from '@mui/material';
import './style.css'
import PersonIcon from '@mui/icons-material/Person';

const CarDetail = () => {

    const [data, setData] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
        <Box>
            <Paper variant="outlined">
                <p class = 'cardetail'>Tentang Paket</p>
                <ul class = 'cardetail'>Include</ul>
                    <li class = 'cardetail--list'>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li class = 'cardetail--list'>Sudah termasuk bensin selama 12 jam</li>
                    <li class = 'cardetail--list'>Sudah termasuk Tiket Wisata</li>
                    <li class = 'cardetail--list'>Sudah termasuk pajak</li>
                <ul class = 'cardetail'>Exclude</ul>
                    <li class = 'cardetail--list'>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li class = 'cardetail--list'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li class = 'cardetail--list'>Tidak termasuk akomodasi penginapan</li>
                <ul class = 'cardetail'>Refund, Reschedule, Overtime</ul>
                    <li class = 'cardetail--list'>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li class = 'cardetail--list'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li class = 'cardetail--list'>Tidak termasuk akomodasi penginapan</li>
                    <li class = 'cardetail--list'>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li class = 'cardetail--list'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li class = 'cardetail--list'>Tidak termasuk akomodasi penginapan</li>
                    <li class = 'cardetail--list'>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li class = 'cardetail--list'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li class = 'cardetail--list'>Tidak termasuk akomodasi penginapan</li>
            </Paper>
        </Box>
        <div>
            <Paper variant="outlined">
                <img src = {data.image} />
                <p>{data.name}</p>
                <p><PersonIcon/>{data.category}</p>
                <p>Rp {data.price}</p>
                <Button variant="contained">
                    <Link to="/carlist">Back to Car List</Link>
                </Button>
            </Paper>
        </div>
        </>
    )
}

export default CarDetail;