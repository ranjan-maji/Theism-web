import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className='text1' >
            <h1>Search Doctor or Lab Tests from the comfort of your Home</h1>
        </div>
        <div className='text2' >
        <h4>Discover the best doctors, clinic & hospital the city nearest to you.</h4>
        </div>

        <div className='homelogo'>
            < a href='/'>
                <img  src='/img/search-bg.png' alt="1st Product" />
            </a>
        </div>




    </div>
  )
}

export default Home