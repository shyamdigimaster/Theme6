import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dairlymilk from '../ThemeImage/dairlymilk.jpeg'
import cake from '../ThemeImage/chcolate-2.jpeg'
import cake2 from '../ThemeImage/chcolate-3.jpeg'
import cake3 from '../ThemeImage/chcolate-3.webp'
import Heart from '../ThemeImage/heart.png';
import Bag from '../ThemeImage/cart.svg';
import Cart from '../ThemeImage/cart.png'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Displaycard() {
  return (
   <>
   
   <div className="carousel-wrapper">
            <Carousel 
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
           showThumbs={true} 
         >
             
<div className='container'>
    <div className='row'>
    <div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={dairlymilk} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row logoicons'  >
      <div className='col-sm-12 col-lg-12  col-xxl-12 col-xl-12 col-xs-12'>
<div className='d-flex justify-content-around gap-5 '>
<FavoriteBorderOutlinedIcon className=' w-100 text-center '/>
<ShoppingCartOutlinedIcon className='w-100 text-center'/>
{/* <img src={Cart} className='img-fluid w-25'/> */}
</div>

      </div>

      


    </div>

<div className='row mt-3'>
    <div className='col-lg-12 col-xl-12 col-xxl-12 col-sm-12 col-xs-12 col-md-12'>
    <Stack spacing={1}>
      <Rating name="size-large" defaultValue={4} size="medium" />
    </Stack>
    </div>
</div>

<div className='row'>
    <div className='col-xl-12 col-lg-12 col-xs-12 col-sm-12 col-md-12 col-xxl-12'>
<h4 className='display-6 text-center'>Dairy milk</h4>
    </div>
</div>

   <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xl-6 col-xxl-6'>
<p className='text-dark'>₹350.00</p>
    </div>
    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xl-6 col-xxl-6'>
        <del className='text-muted'>₹500.00</del>
        </div>
   </div>

  </div>



</div>












</div>





{/* <div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={cake} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center ' />
      </div>
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 '  />
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>
      </div>
    </div>
    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'>Strawberry black forest cake</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>
  </div>
</div>
</div>

<div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={cake2} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center ' />
      </div>

      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 '  />
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
  
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>

      </div>
    </div>

    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'>Black forest cake</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>
  </div>
</div>
</div>



<div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={cake3} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center '/>
      </div>
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 '/>
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>
      </div>
    </div>
    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'>Choco cup cake</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>
  </div>
</div>
</div> */}




    </div>




    
</div>
   





{/* 
   <div className='container'>
    <div className='row'>
    <div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={dairlymilk} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center ' />
      </div>

      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 ' />

      </div>


    </div>



    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
  
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>

      </div>
    </div>



    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'> Dairy milk</p>
      </div>
    </div>



    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>


  </div>



</div>












</div>





<div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={cake} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center '  />
      </div>
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 ' />
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>
      </div>
    </div>
    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'>Strawberry black forest cake</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>
  </div>
</div>
</div>

<div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={cake2} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center '  />
      </div>

      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 '  />
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
  
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>

      </div>
    </div>

    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'>Black forest cake</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>
  </div>
</div>
</div>



<div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={cake3} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center ' />
      </div>
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 ' />
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>
      </div>
    </div>
    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'>Choco cup cake</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>
  </div>
</div>
</div>




    </div>




    
</div>      */}





{/* <div className='container'>
    <div className='row'>
    <div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={dairlymilk} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center '  />
      </div>

      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 ' />

      </div>


    </div>



    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
  
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>

      </div>
    </div>



    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'> Dairy milk</p>
      </div>
    </div>



    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>


  </div>



</div>












</div>





<div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={cake} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center ' />
      </div>
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 ' />
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>
      </div>
    </div>
    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'>Strawberry black forest cake</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>
  </div>
</div>
</div>

<div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={cake2} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center '  />
      </div>

      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 '  />
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
  
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>

      </div>
    </div>

    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'>Black forest cake</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>
  </div>
</div>
</div>



<div className='col-lg-3 col-xl-3 col-md-3 col-sm-3 col-xs-3 col-xxl-3'>

<div className="card image-container border-0">

  <img src={cake3} alt="Your Image" className="wineimage" />

  <div className="blackandwhite ">
    <div className='row icons row-cols-xs-12 text-center '  >
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Bag} className='img-fluid  w-50 text-center '  />
      </div>
      <div className='col-sm-6 col-lg-6 col-xs-6 col-xxl-6 col-xl-6 col-xs-5'>
        <img src={Heart} className='img-fluid  w-50 ' />
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-6'>
        <Stack spacing={3}>
          <Rating name="size-medium" defaultValue={2} />
        </Stack>
      </div>
    </div>
    <div className='row  mt-3'  >
      <div className='col-sm-12 col-lg-12 col-xs-12 col-xxl-12 col-xl-12 col-xs-12'>
        <p className='h5'>Choco cup cake</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <span className='applenumber'>₹350.00</span>
      </div>
      <div className='col-xl-6 col-xxl-6 col-lg-6 col-sm-12 col-xs-12 col-md-12'>
        <del className='text-muted applenumber'>₹500.00</del>
      </div>
    </div>
  </div>
</div>
</div>




    </div>




    
</div>         */}
            </Carousel>
        </div>
   </>
  )
}
