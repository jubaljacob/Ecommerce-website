import React, { useState } from "react";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
//import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { Helmet } from "react-helmet";
import watch from "../images/watch.jpg";
const Store = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"Store"} />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock(0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      style={{"height":"45px"}}
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      style={{"height":"45px"}}
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <div className="">
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>

                    </ul>
                  </div>
                </div>
                <h5 className="sub-title">Size</h5>
                <div className="form-check">
                  <input 
                     className="form-check-input"
                     type="checkbox" 
                     value=""
                     id="color-1"
                  />
                  <label className="form-check-label" htmlFor="color-1">
                    S (2)
                  </label>
                </div>
                <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                    M (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-3"
                    />
                    <label className="form-check-label" htmlFor="color-3">
                    L (0)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-4"
                    />
                    <label className="form-check-label" htmlFor="color-4">
                    XL (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-5"
                    />
                    <label className="form-check-label" htmlFor="color-5">
                    XXL (1)
                    </label>
                  </div>
                </div>
              </div>
            
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-itmes-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3"> 
                    Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3"> 
                    Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3"> 
                    Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3"> 
                    Camera
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3"> 
                    Tablet
                    </span>
                  </div>
               
                </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-25">
                    <img src={watch} 
                    className="img-fluid" 
                    alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Apple Galaxy watch 3 pro
                    </h5>
                    <ReactStars 
                      count={5}
                      size={24}
                      value="4"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b> $ 400</b>
                    <p></p>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-25">
                    <img src={watch} 
                    className="img-fluid" 
                    alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Apple Galaxy watch 3 pro
                    </h5>
                    <ReactStars 
                      count={5}
                      size={24}
                      value="4"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b> $ 400</b>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            </div> 
          </div>
          <div className="col-9"></div>
      </Container>
    </>
    );
  };

            

export default Store;