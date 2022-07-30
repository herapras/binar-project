import { useState } from 'react';
import SectionHero from "../SectionHero"
import Services from "../Services";
import Testimonial from "../Testimonial";
import WhyUs from "../WhyUs";
import Banner from "../Banner";
import Faq from "../Faq";

export default function Home(){

    const serviceList = [
        "Sewa Mobil Dengan Supir di Bali 12 Jam",
        "Sewa Mobil Lepas Kunci di Bali 24 Jam",
        "Sewa Mobil Jangka Panjang Bulanan",
        "Gratis Antar - Jemput Mobil di Bandara",
        "Layanan Airport Transfer / Drop In Out"
      ];

    const props = {
        serviceList
      }

    return(
        <div>
        <SectionHero {...props}/>
        <Services {...props}/>
        <WhyUs />
        <Testimonial />
        <Banner />
        <Faq />
        </div>
    )
}