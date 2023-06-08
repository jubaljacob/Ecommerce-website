import React from 'react'
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row align-itmes-center">
                    <div className="col-5">
                        <div className="footer-top-data d-flex gap 30 align-items-center">
                            <img src={newsletter} alt="newletter" />
                            <h2 className="mb=0 text-white">Sign Up for Newsletter</h2>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control py-1"
                                placeholder="Your Email Address"
                                aria-label="Your Email Address"
                                aria-aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text p-2"  id="basic-addon2">
                                Subscribe
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="py-3"></footer>
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                       <p className="text-center mb-0 text-white ">
                        &copy; {new Date().getFullYear()}; Powered by 
                        </p> 
                    </div>
                </div>
            </div>
        </footer>  
    </>
  );
};
export default Footer;