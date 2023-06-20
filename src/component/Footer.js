import React from 'react';

import { useState } from 'react';
import Facebook from '../ThemeImage/facebook.png';
import youtube from '../ThemeImage/youtube.png';
import Whats from '../ThemeImage/whatapp.png';
import  Instagram from '../ThemeImage/instagram.png';
import Arrow from '../ThemeImage/arrow.png'

export default function Footer() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const handleclick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <hr />
            <div className='col-xl-3 col-xxl-5 col-md-5 col-sm-5 col-xs-5 col-lg-3'>
            <p className='h1 logotitle'>craze</p> 
            </div>
            <div className='col-xl-3 col-xxl-5 col-md-5 col-sm-5 col-xs-5 col-lg-5 mx-5 d-flex'>
              <button class="border-0 bg-white">
                <img src={Facebook} className='text-white w-25' />
              </button>
              <button class="border-0 bg-white ">
                <img src={youtube} className='text-white w-25 ' />
              </button>
              <button class="border-0 bg-white">
              <img src={Whats} className='text-white w-25' />
              </button>
              <button class="border-0 bg-white">
              <img src={Instagram} className='text-white w-25' />
              </button>
            
            </div>
            <div className='col-xl-2 col-xxl-2 col-md-2 col-sm-2 col-xs-2 col-lg-3'>
              <button className="stylearrow " onClick={handleclick}
              style={{display: visible ? 'inline' : 'none'}} >
                <img src={Arrow} className='Arrow' id="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
