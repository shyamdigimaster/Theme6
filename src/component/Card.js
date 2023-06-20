import React from 'react'
import Chip from '../ThemeImage/temp1.jpg';
import Chicken from '../ThemeImage/temp2.jpg';
import burger from '../ThemeImage/temp1.jpg';

import Cart5 from '../ThemeImage/cart5.jpg'
import Cart6 from '../ThemeImage/cart6.jpg'
import Cart7 from '../ThemeImage/cart7.jpg'
import fashion from '../ThemeImage/fashion.jpg'
import './Header.css';
import Preview from '../ThemeImage/preview.jpg'
import Cart from '../ThemeImage/cart.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Card() {
  return (
    <>

<br/>
<div className='container '>

  <div className='card border-0'>
  <div className='shadow bg-success-subtle'>
  <div className='row p-3  preview'>
    <div className='col-lg-4 col-xl-4 col-xxl-4 col-md-10'>
<img src={Preview} className='img-fluid w-100 preview'/>
  </div>

  <div className='col-lg-4 col-xl-4 col-xxl-4 col-md-10'>
  <p className='h6'>Backin - Bags And Backpack Modern Shopify Theme</p>
<div className='row '>
  <div className='col-lg-12 col-xl-4 col-xxl-4 col-md-6'>
    <ul>

      <li className='text-muted'>Bag Store ecommerce html</li>
<li className='text-muted'>Bags ecommerce, Wallet html
</li >
<li className='text-muted'>Fashion, Bag & Accessories</li>
    </ul>
  </div>
</div>
</div>
<div className='col-lg-4 col-xl-4 col-xxl-4 col-md-5'>
  <div className='buttton'>
  <img src={Cart} className='img-fluid image'/>
<button className='buynow'>Buy Now</button>
  </div>
 
</div>
</div>



    </div>
  </div>
</div>


<br/>

<div className='container'>
  <div className='card border-0'>
  <div className='shadow bg-success-subtle '>
  <div className='row p-3 preview'>
    <div className='col-lg-4 col-xl-4 col-xxl-4 col-md-10'>
      
     <div class="carousel-wrapper w-100 preview">
            <Carousel  showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
           showThumbs={false}  >
                <div>
                    <img src={Chicken} />
                </div>
                <div>
                    <img src={Chip} />
                </div>
                <div>
                    <img src={burger} />
                </div>
            </Carousel>
        </div>
  </div>

<div className='col-lg-4 col-xl-4 col-xxl-4 col-md-10'>
<p className='h6'>Shopping Bag - Responsive Ecommerce Email Template</p>
<div className='row '>
  <div className='col-lg-12 col-xl-4 col-xxl-4 col-md-6'>
 <ul>



  <li className='text-muted'> 9+ homepages</li>
<li className='text-muted'>Megamenu</li>
<li className='text-muted'>
Product Countdown

</li>
 </ul>
</div>
</div>
</div>


<div className='col-lg-4 col-xl-4 col-xxl-4 col-md-10'>
  <div className='button'>
  <img src={Cart} className='img-fluid image border-3'/>
<button className='buynow'>Buy Now</button>
  </div>
 
</div>


    </div>
  </div>
</div>
   </div>
<br/>





<div className='container'>
  <div className='card border-0'>
  <div className='shadow bg-success-subtle '>
  <div className='row p-3 preview'>
    <div className='col-lg-4 col-xl-4 col-xxl-4 col-md-10'>
      
     <div class="carousel-wrapper w-100 preview">
            <Carousel  showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
           showThumbs={false}  >
                <div>
                    <img src={Cart5} />
                </div>
                <div>
                    <img src={Cart6} />
                </div>
                <div>
                    <img src={Cart7} />
                </div>
            </Carousel>
        </div>
  </div>

<div className='col-lg-4 col-xl-4 col-xxl-4 col-md-10'>
<p className='h6'>Unero - Minimalist eCommerce PSD Template</p>
<div className='row '>
  <div className='col-lg-12 col-xl-4 col-xxl-4 col-md-6'>
 <ul>





  <li className='text-muted'>  12 Demos Unique</li>
<li className='text-muted'>Clean & Minimalist Design</li>
<li className='text-muted'>
Free Google Fonts
</li>
 </ul>
</div>
</div>
</div>


<div className='col-lg-4 col-xl-4 col-xxl-4 col-md-10'>
  <div className='button'>
  <img src={Cart} className='img-fluid image border-3'/>
<button className='buynow'>Buy Now</button>
  </div>
 
</div>


    </div>
  </div>
</div>
   </div>

<br/>


<div className='container '>

  <div className='card border-0 '>
  <div className='shadow bg-success-subtle'>
  <div className='row p-3 preview '>
    <div className='col-lg-4 col-xl-4 col-xxl-4 col-md-10 '>
<img src={fashion} className='img-fluid w-100 mt-3 preview'/>
  </div>

  <div className='col-lg-4 col-xl-4 col-xxl-4 col-md-10'>
  <p className='h6'>Azura - Fashion Store Prestashop Theme</p>
<div className='row '>
  <div className='col-lg-12 col-xl-4 col-xxl-4 col-md-6'>
    <ul>
    

      <li className='text-muted'>React Native App for Android & IOS, Mobile Ap</li>
<li className='text-muted'>Rb Theme Dream - Elementor Page Builder
</li >
<li className='text-muted'>Fashion Store & Shoes, Clothing & Apparels
</li>
    </ul>
  </div>
</div>
</div>
<div className='col-lg-4 col-xl-4 col-xxl-4 col-md-5'>
  <div className='buttton'>
  <img src={Cart} className='img-fluid image'/>
<button className='buynow'>Buy Now</button>
  </div>
 
</div>
</div>



    </div>
  </div>
</div>

<br/>

{/* <div className='container'>
  <div className='row shawdow'>
    <div className='col-lg-12'>
    <div className=' w-50 h-50'>
    <Content />
    </div>
    
    </div>
  </div>
</div> */}
<br/>


    </>
 
  )
}
