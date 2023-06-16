import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import hk1 from "../images/hk1.png";
import hk2 from "../images/hk2.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCardc = (props) => {

  return(
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wish} alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src={hk2} className="img-fluid" alt="product" />
          <img src={hk1} className="img-fluid" alt="product" />

        </div>
        <div className="product-details">
          <h6 className="brand">
            Harman
          </h6>
          <h5 className="product-title">
            Harman Kardon FLY ANC | Wireless Over-Ear NC Headphones
          </h5>
          <ReactStars 
            count={5}
            size={24}
            value="4"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">
            ₹19,999
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
export default ProductCardc;