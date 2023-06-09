import React from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card-LOGIN">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="btnn border-0" type="submit">
                      login
                    </button>
                    <Link to="/loginpass" className="btnn signup">
                      Login with password
                    </Link>
                    <Link to="/signup" className="btnn signup">
                      Signup
                    </Link>
                    <a href=".D:\internship\Ecommerce-website\frontend\src\pages\Signup.js">
                      <button className="btnn signup">Sign up</button>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;