import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <Link to='home'>Home</Link>
     <Link to='insert'>insert</Link>
     <Link to='display'>Display</Link>
     <Link to='search'>Search</Link>
     <Link to='update'>Update</Link>
     

     <hr />
     
     <Outlet/>

     <hr />
     <p>www.akshaynamdev.com</p>
    </div>
  )
}

export default Navbar
