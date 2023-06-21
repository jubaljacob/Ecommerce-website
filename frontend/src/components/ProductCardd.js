import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import mouse1 from "../images/mouse1.png";
import mouse2 from "../images/mouse2.png";
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
          <img src={mouse1} className="img-fluid" alt="product" />
          <img src={mouse2} className="img-fluid" alt="product" />

        </div>
        <div className="product-details">
          <h6 className="brand">
            Logitech
          </h6>
          <h5 className="product-title">
            G502 X Lightspeed wireless gaming mouse
          </h5>
          <ReactStars 
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">
            ₹15,495
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