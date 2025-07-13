import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/1200x/c7/0d/12/c70d12ec23b1b03e4d5d49c3cc368d8c.jpg" class="d-block w-100" alt="..." height={500}></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/24/c9/16/24c9167c6fda797eeb0f750581b038fe.jpg" class="d-block w-100" alt="..." height={500}></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/74/c2/36/74c2363dfccf78a26110e77c972b48e5.jpg" class="d-block w-100" alt="..."height={500}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home