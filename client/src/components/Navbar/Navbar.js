import React, {useState} from 'react'
import "./Navbar.css"
import { myFoodListCount } from '../../util/myList'
import { Link } from 'react-router-dom'

function Navbar({ user }) {
  const [foodItemCount, ] = useState(myFoodListCount)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark  bg-secondary">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">Delicious Garden 🍔</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="home">Home</Link>
              </li>
            </ul>
            <form class="d-flex align-items-center">
              <h4 className='me-2 text-light'>Hello {user}</h4>
              <Link to="/MyList" className='text-decoration-none'>
                <h4 className='me-2 my-list'>🍽️ {foodItemCount}</h4>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar