import React from "react";
import Meta from "../components/Meta";

import wish1 from "../images/s23.png";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      
      <div className='compare-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className="col-4">
              <div className="card-wishlist">
                <div className="image-wishlist"> <img src={wish1} alt="" /></div>
                <span className="title">S23 Ultra</span>
                <span className="price">₹1,29,999</span>
                </div>
              </div>
            <div className="col-4">
              <div className="card-wishlist">
                <div className="image-wishlist"> <img src={wish1} alt="" /></div>
                <span className="title">S23 Ultra</span>
                <span className="price">₹1,29,999</span>
              </div>
            </div>
            <div className="col-4">
              <div className="card-wishlist">
                <div className="image-wishlist"> <img src={wish1} alt="" /></div>
                <span className="title">S23 Ultra</span>
                <span className="price">₹1,29,999</span>
              </div>
            </div>
            <div className="col-4">
              <div className="card-wishlist">
                <div className="image-wishlist"> <img src={wish1} alt="" /></div>
                <span className="title">S23 Ultra</span>
                <span className="price">₹1,29,999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;