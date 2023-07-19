import React from 'react'
import NormalLayout from '../Layout/NormalLayout'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <NormalLayout>
          <>
          <h1 style={{textAlign:'center',backgroundColor:'darkgray'}}>Welcome to Book Lover BookStore<p style={{fontSize:'20px'}}>Books for all Book Lovers</p></h1>
                <hr/>
              <div className='homeDiv'>
              <div>
                <h2>To Succeed you must <br/>Read Creative  Books</h2>
                <ul>
                   <li>Fastest</li>
                   <li>Flexible</li>
                   <li>Unique</li>
                  <li>Minimalist</li>
                </ul>
              </div>
              <div>
                <h2>Get Your New Book <br/>With The Best Price</h2>
                <p>Not Sure What to read Next?<br/>
                  Visit <Link to={'/products'}>Products</Link> Page</p>
                  <p>The books content will take your
                  future far forward from others. </p>
              </div>
              </div>
              <hr/>
              <div>
                <footer>
                      <Footer/>
                </footer>
              </div>
          </>
    </NormalLayout>
  )
}

export default Home