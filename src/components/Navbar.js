import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='mylogo'>
            < a href='/'>
                <img  src='/img/logo.png' alt="1st Product"/>
            </a>
        </div>

        <div className='navsta'>
        <a className='navlinks' href='askdoctor'>Ask a Doctor</a>
        <a className='navlinks' href='booktets'>Book a Test</a>
        <a className='navlinks' href='aboutus'>About Us</a>

        
        <a className='navlinks' href='Contact'>Contact</a>
        <a className='navlinks' href='View Reports Online'>Contact</a>
        <a className='navlinks' href='Login'>login</a>
        </div>
    
        

    </div>
  )
}

export default Navbar