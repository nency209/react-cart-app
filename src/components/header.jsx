import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className=" border-bottom ">
        <div className="row">
          <div className="col-12 container">
            <ul className="d-flex gap-5 content">
              <Link to="/home" className="list-unstyled text-decoration-none text-white">Home</Link>

              <Link to="/cart" className="list-unstyled text-decoration-none  text-white "><span><FaCartShopping /></span>Cart</Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
