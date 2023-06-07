import React from 'react'
import { NavLink,Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <p>Free shipping all Over Rs.1000/-</p>
          </div>
          <div className='col-6'>
            <p className="text-end"></p>
            <p>Hotline: <a href="tel:+91 67893456">+91 67893456</a> </p> 
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header