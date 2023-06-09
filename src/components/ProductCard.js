import React from 'react';
import watch from '../images/watch.jpg';
import watch1 from '../images/watch1.jpeg'
import prodcompare from '../images/prodcompare.svg'
import view from '../images/view.svg'
import addcart from '../images/add-cart.svg'
import wish from '../images/wish.svg'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
            <img src={wish} alt="wishlist" />
            </Link>
          </div>
            <div className="product-image">
              <img src={watch} alt="product image" />
              <img src={watch1} alt="product image-2" />
            </div>
            <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">
                Kids Headphones bulk multi coloured for students
              </h5>
              <ReactStars
                count={5} 
                size={24} 
                value='3' 
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">₹8299.49</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link><img src={prodcompare} alt="prodcompare" />
                </Link>
                <Link><img src={view} alt="view" />
                </Link>
                <Link><img src={addcart} alt="addcart" />
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard