import React from 'react'
import {Link} from "react-router-dom"
import mainbanner from '../images/main-banner-1.jpg'

const Home = () => {
  return <>
  <section className="home-wrapper-1 py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="cl-6">
          <div className="main-banner position-relative p-3">
            <img src={mainbanner} className='img-fluid rounded-3' 
            alt="main-banner" 
            />
            <div className="main-banner-content position-absolute">
              <h4>Era of spacial computing</h4>
              <h5>Apple Vision Pro.</h5>
              <p>From $3499 onwards.</p>
              <Link className='button'>Buy now</Link>
            </div>
          </div>
        </div>
        <div className="cl-6"></div>
      </div>
    </div>
  </section>
  </>
}

export default Home