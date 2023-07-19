import React from 'react'
import { Link } from 'react-router-dom'
import "../style.css"

const NavigationMenu = () => {
  return (
    <>
    <div className='navmenu'>
        <h1>Navigation Menu</h1>
        <ul className='navUl'>
        <li className='navLi'><Link to={'/home'}>Home</Link></li>
        <li className='navLi'><Link to={'/products'}>Products</Link></li>
        <li className='navLi'><Link to={'/cart'}>Cart</Link></li>

        <br/><br/>

        </ul>
        <hr/>
    </div>
    </>
  )
}

export default NavigationMenu