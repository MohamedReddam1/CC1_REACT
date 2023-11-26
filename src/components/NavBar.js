import React from 'react'
import {Link} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css';




export default function NavBar() {
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand mx-5" href="#" >9OTBII</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
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
