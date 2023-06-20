import React from 'react'
import Shop1 from '../ThemeImage/pexels-photo-2858266.webp'
import Shop2 from '../ThemeImage/pixel1.jpeg'
import './Header.css'
import Shop3 from '../ThemeImage/shop3.jpeg'

export default function Home() {
  return (
    <div>
     <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Shop1} className="d-block Imagebanner img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-center">
        <p className='h3'>First slide label</p>
        <p className='display-6'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Shop2} className="d-block Imagebanner img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-center">
        <h5 className='h3'>Second slide label</h5>
        <p className='display-6'>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Shop3} className="d-block img-fluid  Imagebanner" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-center">
        <h5 className='h3'>Third slide label</h5>
        <p className='display-6'>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
