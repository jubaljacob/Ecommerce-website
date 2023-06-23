import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import Loginpass from "./pages/loginpass";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
// import SingleBlog from "./pages/SingleBlog";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import RefundPloicy from "./pages/RefundPloicy";
// import ShippingPolicy from "./pages/ShippingPolicy";
// import TermAndContions from "./pages/TermAndContions";
// import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Store" element={<Store />} />
            <Route path="compare-product" element={<CompareProducts />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="loginpass" element={<Loginpass />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />



            {/* <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            
            
            
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPloicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndContions />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;