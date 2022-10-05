import React from 'react';
import './UserNav.css';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='UserNav row'>
<nav className="navbar sticky-top navbar-light bg-light ">




 {/* Home Link */}

  <NavLink className='navToHome' to='/'>Home</NavLink>








{/* Search Bar */}

  <div className="searchBar">
<div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
   
</div>
</div>


{/* About us */}

<NavLink className='navToAboutUs' to='/aboutUs'>About Us</NavLink>


{/* Account */}

<NavLink className='navToAccount' to='/account'>Account</NavLink>

{/* Logout */}
   
<NavLink className='navToLogout' to='/logout'>Log out</NavLink>
  
    
</nav>

    </div>
  )
}
