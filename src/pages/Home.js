import React from 'react';
import {Link} from "react-router-dom";
import mainbanner from '../images/main-banner-1.jpg';
import catbanner1 from '../images/catbanner-01.jpg';
import catbanner2 from '../images/catbanner-02.jpg';
import catbanner3 from '../images/catbanner-03.jpg';
import catbanner4 from '../images/catbanner-04.jpg'




const Home = () => {
  return <>
  <section className="home-wrapper-1 py-5">
    <div className="container-xxl">
    <div className="row">
          <div className="col-6">
          <div className="main-banner position-relative ">
              <img
                src={mainbanner}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Era of spacial computing</h4>
                <h5>Vision Pro.</h5>
                <p>From ₹2,89,999.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={catbanner1}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Current Sale</h4>
                  <h5>MacBook Air.</h5>
                  <p>
                    From ₹92,000 onwards
                    {/* <br /> or $41.62/mo. */}
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner2}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                <h4>New arrival</h4>
                  <h5>Watch Pro.</h5>
                  <p>
                    From ₹59,000 onwards
                    {/* <br /> or $41.62/mo. */}
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={catbanner3}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                <h4>Current Sale</h4>
                  <h5>iPad(9th gen) .</h5>
                  <p>
                    From ₹49,000 onwards
                    {/* <br /> or $41.62/mo. */}
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={catbanner4}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                <h4>Current Sale</h4>
                  <h5>AirPods Max.</h5>
                  <p>
                    From ₹59,900 onwards
                    {/* <br /> or $41.62/mo. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
  </>
}

export default Home