import { Link } from 'react-router-dom';
import { React } from 'react'
import ServiceList from '../ServiceList';
import "./style.css"

const Services = (props) => {
  const { serviceList } = props;

  return(
    <div>
      <div>
        <img src = 'src/content/img_service.png' />
      </div>
      <div>
        <h1 class = "servicelist-header">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
        <p class = "servicelist-p">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
        <div class ="servicelist-list">
        {serviceList.map((itemService => (
              <ServiceList itemService={itemService}/>
          )
          ))
        }
        </div>
      </div>
    </div>
  )
}
export default Services;