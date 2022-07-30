import { Link } from "react-router-dom";

const SectionHero = () => {
    return(
        <div>
            <div>
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Link to = '/carlist'>
                    <button>Mulai Sewa Mobil</button>
                </Link>
            </div>
            <div>
                <img src ='src/content/img_car.png' />
            </div>
        </div>
    )
}

export default SectionHero;