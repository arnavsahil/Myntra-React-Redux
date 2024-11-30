import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const bagItems = useSelector((store) => store.bag);
  //console.log("bagitems", bagItems);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="search_icon">
          <IoSearchOutline />
        </span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoPersonOutline />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <CiHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <IoBagOutline />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagItems.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
