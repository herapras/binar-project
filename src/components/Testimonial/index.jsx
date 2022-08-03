import './style.css'
import TestimonialSlider from '../TestimonialSlider'

export default function Testimonial(){
    return(
        <>
        <h1 class = 'testimonial--h'>Testimonial</h1>
        <p class = 'testimonial--p'>Berbagai review positif dari para pelanggan kami</p>
        <TestimonialSlider />
        </>
    )
}