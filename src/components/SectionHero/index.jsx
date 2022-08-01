import { Link } from "react-router-dom";
import './style.css'

const SectionHero = () => {
    return(
        <div class = 'hero--all'>
            <div class = 'hero--container'>
                <h1 class= 'hero--h'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p class = 'hero--p'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Link to = '/carlist'>
                    <button class = 'hero--button'>Mulai Sewa Mobil</button>
                </Link>
            </div>
            <img src ='src/content/img_car.png' class = 'hero--img'/>
        </div>
    )
}

export default SectionHero;