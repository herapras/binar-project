import Button from '@mui/material/Button';

export default function CarList(){
    return(
        <>
        <h1>car list</h1>
        <Button variant='contained' onClick={() => handleViewDetail(car.id)} />
        </>
    )
}