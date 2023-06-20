import React from 'react'
import './Header.css'
import Navigation from './Navigation'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Header() {
  return (
  <>
<header>
  <div className='container-fluid'>
   <div className='row d-flex justify-content-between'>
    <div className='col-6 col-xxl-12 col-xl-6 col-md-12 col-xs-12 col-sm-12'>
      <div className='imageheader'>
        <p className='h1 logotitle'>craze</p> 
        <div className='iconlogo mx-4'>
        <AccountCircleIcon className='mt-3 Account'/>
<NotificationsNoneIcon className='mt-3 Account'/>
<ShoppingCartOutlinedIcon className='mt-3 Account'/>
        </div>

      </div>
    </div>

   </div>
  </div>
</header>
<Navigation/>


  </>
  )
}
