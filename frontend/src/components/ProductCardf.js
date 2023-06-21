import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import mag1 from "../images/mag1.png";
import mag2 from "../images/mag2.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCardd = (props) => {

  return(
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wish} alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src={mag1} className="img-fluid" alt="product" />
          <img src={mag2} className="img-fluid" alt="product" />

        </div>
        <div className="product-details">
          <h6 className="brand">
            Apple
          </h6>
          <h5 className="product-title">
            Apple MagSafe Charger | for iPhone, AirPods Pro, AirPods with Wireless Charging Case
          </h5>
          <ReactStars 
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">
            ₹3,849
          </p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={prodcompare} alt="compare" />
            </Link>
            <Link>
              <img src={view} alt="view" />
            </Link>
            <Link>
              <img src={addcart} alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  )
};
export default ProductCardd;