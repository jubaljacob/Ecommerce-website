import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import mainbanner from '../images/main-banner-1.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import mainbanner1 from "../images/main-banner.jpg";
import catbanner1 from '../images/catbanner-01.jpg';
import catbanner2 from '../images/catbanner-02.jpg';
import catbanner3 from '../images/catbanner-03.jpg';
import catbanner4 from '../images/catbanner-04.jpg';
import service1 from '../images/service.png';
import service2 from '../images/service-02.png';
import service3 from '../images/service-03.png';
import service4 from '../images/service-04.png';
import service5 from '../images/service-05.png';
import camera from '../images/camera.jpg';
import lap from '../images/laptop.jpg';
import watch from '../images/watch.jpg';
import speaker from '../images/speaker.jpg';
import home from '../images/homeapp.jpg';
import music from '../images/headphone.jpg';
import acc from '../images/acc.jpg';
// import mob from '../images/tab.jpg';
import Marquee from "react-fast-marquee";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";






const MainBanner = () => {
  const mainBannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Slider {...mainBannerSettings}>
      <div className="main-banner position-relative">
        <img src={mainbanner} className="img-fluid rounded-3" alt="main banner" />
        <div className="main-banner-content position-absolute">
          <h4>Era of spatial computing</h4>
          <h5>Vision Pro.</h5>
          <p>From ₹2,89,999.</p>
          <button className="button">BUY NOW</button>
        </div>
      </div>
      <div className="main-banner position-relative">
        <img src={mainbanner1} className="img-fluid rounded-3" alt="main banner" />
        <div className="main-banner-content position-absolute">
          <h4>Era of spatial computing</h4>
          <h5>Vision Pro.</h5>
          <p>From ₹2,89,999.</p>
          <button className="button">BUY NOW</button>
        </div>
      </div>
    </Slider>
  );
};


const Home = () => {
  return <>
  <section className="home-wrapper-1 py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-6">
          <MainBanner />
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
            <div className="small-banner position-relative">
              <img
                src={catbanner1}
                className="img-fluid rounded-3"
                alt="small banner 1"
              />
              <div className="small-banner-content position-absolute">
                <h4>Current Sale</h4>
                <h5>MacBook Air.</h5>
                <p>From ₹92,000 onwards</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img
                src={catbanner2}
                className="img-fluid rounded-3"
                alt="small banner 2"
              />
              <div className="small-banner-content position-absolute">
                <h4>New arrival</h4>
                <h5>Watch Pro.</h5>
                <p>From ₹59,000 onwards</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img
                src={catbanner3}
                className="img-fluid rounded-3"
                alt="small banner 3"
              />
              <div className="small-banner-content position-absolute">
                <h4>Current Sale</h4>
                <h5>iPad(9th gen).</h5>
                <p>From ₹49,000 onwards</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img
                src={catbanner4}
                className="img-fluid rounded-3"
                alt="small banner 4"
              />
              <div className="small-banner-content position-absolute">
                <h4>Current Sale</h4>
                <h5>AirPods Max.</h5>
                <p>From ₹59,900 onwards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="home-wrapper-2 py-3">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
        <div className="services d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-center gap-15">
            <img src={service1} alt="services" />
            <h6>Free Shipping</h6>
            <p>For all orders above 1000</p>
          </div>
          <div className="d-flex flex-column align-items-center gap-15">
            <img src={service2} alt="services" />
            <h6>Daily Surprise Offers</h6>
            <p>Save up to 25% off</p>
          </div>
          <div className="d-flex flex-column align-items-center gap-15">
            <img src={service3} alt="services" />
            <h6>Support 24/7</h6>
            <p>Shop with an expert</p>
          </div>
          <div className="d-flex flex-column align-items-center gap-15">
            <img src={service4} alt="services" />
            <h6>Affordable Prices</h6>
            <p>Get the Best Deals and Prices</p>
          </div>
          <div className="d-flex flex-column align-items-center gap-15">
            <img src={service5} alt="services" />
            <h6>Secure Payments</h6>
            <p>100% Protected Payments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  <section className="home-wrapper-2  py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
        <div className="categories rounded-6 d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Laptop</h6>
                  <p>10 Items</p>
                </div>
                <img src={lap} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music</h6>
                  <p>10 Items</p>
                </div>
                <img src={music} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={watch} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Mobiles and Tablets</h6>
                  <p>10 Items</p>
                </div>
                <img src={home} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Accessories</h6>
                  <p>10 Items</p>
                </div>
                <img src={acc} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Portable Speakers</h6>
                  <p>10 Items</p>
                </div>
                <img src={speaker} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Home Appliances</h6>
                  <p>10 Items</p>
                </div>
                <img src={home} alt="camera" />
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  <section className='blog-wrapper py-5 home-wrapper-2'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            Featured Collection
          </h3>
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </section>
  <section className="marque-wrapper py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className='d-flwx'>
              <div className='mx-4 w-25'>
                <img src={brand1} alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src={brand2} alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src={brand3} alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src={brand4} alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src={brand5} alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src={brand6} alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src={brand7} alt="brand" />
              </div>
              <div className='mx-4 w-25'>
                <img src={brand8} alt="brand" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className='blog-wrapper py-5 home-wrapper-2'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            Our Latest Blogs
          </h3>
        </div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  </section>
  
  </>
}

export default Home