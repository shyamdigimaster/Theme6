import React from 'react'
import './Header.css'
export default function Navigation() {
  return (
    <div>
 <navbar className="container-fluid navigation">
<nav class="navbar navbar-expand-lg ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navigation navbarlist" id="navbarNav">
      <ul className="navbar-nav gap-3">
        <li className=" nav-item">
          <a className=" nav-link text-dark" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a className="nav-link text-dark" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Wishlist</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Cart</a>
        </li>
      </ul>
    </div>

</nav>


</navbar> 
    </div>
  )
}
