import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"}/>
      <BreadCrumb title={"Contact us"}/>
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858.207743138319!2d76.36361720000001!3d10.008278350000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b62a7688a1d%3A0xea20f6a86d090450!2sInfopark%20Campus%2C%20Kochi%2C%20Kerala%20682030!5e0!3m2!1sen!2sin!4v1686639892526!5m2!1sen!2sin" 
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>


  );
  
};

export default Contact;