import React from 'react'
import {Link} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css';


export default function NavBar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link to={'/CC1_REACT'} className='nav-link '>Home page</Link>
                  </li>
                  <li className="nav-item">
                      <Link to={'/CC1_REACT/Calculator'} className='nav-link'>Calculator</Link>
                  </li>
                  <li className="nav-item">
                      <Link to={'/CC1_REACT/Slider'} className='nav-link'>Slider</Link>
                  </li>
                  <li className="nav-item">
                      <Link to={'/CC1_REACT/TodoListApp'} className='nav-link'>TodoListApp</Link>
                  </li>
                  <li className="nav-item">
                      <Link to={'/CC1_REACT/Products'} className='nav-link'>Products</Link>
                  </li>
              </ul>
          </div>
        </nav>
    </div>

    
  )
}
