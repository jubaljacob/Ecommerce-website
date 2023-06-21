import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";



const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <Container className="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="contact-inner-wrapper">
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-1">
              <div className="map-responsive">
                <iframe
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858.207743138319!2d76.36361720000001!3d10.008278350000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b62a7688a1d%3A0xea20f6a86d090450!2sInfopark%20Campus%2C%20Kochi%2C%20Kerala%20682030!5e0!3m2!1sen!2sin!4v1686639892526!5m2!1sen!2sin"
                  className="border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

      </Container>
      
    </>
  );
};

export default Contact;
