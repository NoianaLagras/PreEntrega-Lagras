import React from 'react'
import Slider1 from '../../assets/images/AnillosSlider.webp'
import Slider2 from '../../assets/images/AnillosSlider1.webp'
import Slider3 from '../../assets/images/PulseraSlider1.webp'
const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item">
      <img src={Slider1} className="d-block w-100" alt='Anillos' />
    </div>
    <div className="carousel-item">
      <img src={Slider2} className="d-block w-100" alt='Anillos' />
    </div>
    <div className="carousel-item active">
      <img src={Slider3} className="d-block w-100" alt='Pulsera'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel