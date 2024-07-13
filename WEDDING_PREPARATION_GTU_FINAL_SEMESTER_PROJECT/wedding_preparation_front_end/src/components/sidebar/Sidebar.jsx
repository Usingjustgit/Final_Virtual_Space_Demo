import React from "react";
import "./Sidebar.css";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Storys from "../../pages/story/Story";
import Timeline from "../../pages/timeline/Timeline";
import Gallery from "../../pages/gallary/Gallary";
import Rsvp from "../../pages/rsvp/RSVP";
import Product from "../../pages/products/Product";
import Guests from "../../pages/guests/Guests";
import AllUsers from "../../pages/allUserList/AllUser";
import Blogs from "../../pages/userBlogs/Blogs";
import UserProfile from "../../pages/userProfile/UserProfile";
import UpdateProfile from "../../pages/updateProfile/UpdateProfile";
import ChangePassword from "../../pages/changePassword/changePassword";
import Logout from "../../pages/logout/Logout";
import ContectUs from "../../pages/contectUs/ContectUs";
import AdminProfile from "../../pages/adminProfile/AdminProfile";
import AllVenues from "../../pages/allVenues/AllVenues";
import AllBlogs from "../../pages/allBlogs/AllBlogs";
import AllProducts from "../../pages/AllProducts/AllProducts";
import AllBooking from "../../pages/allBooking/AllBooking";
import Contect from "../../pages/userContects/Contect";
import AddProduct from "../../pages/addProduct/AddProduct";
import AddBlogs from "../../pages/AddBlogs/AddBlogs";
import AddVenue from "../../pages/AddVenue/AddVenue";
import AddGuest from "../../pages/AddGuest/AddGuest";
import AddCart from "../../pages/AddCart/AddCart";
import Orderd from "../../pages/Orderd/Orderd";
import Booking from "../../pages/Booking/Booking";
import Venue from "../../pages/venue/Venue";
import Card from "../../pages/card/Card";

const Sidebar = () => {
  return (
    <div className="full-page">
      <div className="sidebar shadow container-fluid sticky-top px-0 shadow">
        {/* <div className="box">
          <NavLink to="/" className="nav-item nav-link link">
            Profile
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/all-users" className="nav-item nav-link link">
            All Users
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/venues" className="nav-item nav-link link">
            Venue
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/guests" className="nav-item nav-link link">
            Guest
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/blogs" className="nav-item nav-link link">
            Blog
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/products" className="nav-item nav-link link">
            Products
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/carts" className="nav-item nav-link link">
            Cart
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/orders" className="nav-item nav-link link">
            Orders
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/logout" className="nav-item nav-link link">
            Logout
          </NavLink>
        </div> */}
        {/*========================================== //User Sidebar ================================================= */}
        <div className="box">
          <NavLink to="/user-profile" className="nav-item nav-link link">
            Profile
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/guests" className="nav-item nav-link link">
            Guests
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/blogs" className="nav-item nav-link link">
            Blogs
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/venues" className="nav-item nav-link link">
            Venues
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/products" className="nav-item nav-link link">
            Products
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/carts" className="nav-item nav-link link">
            Cart
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/orders" className="nav-item nav-link link">
            Orders
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/booking" className="nav-item nav-link link">
            Booking
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/all-users" className="nav-item nav-link link">
            Logout
          </NavLink>
        </div>
        {/*========================================== //Admin Sidebar ================================================= */}
        {/* <div className="box">
          <NavLink to="/admin-profile" className="nav-item nav-link link">
            Profile
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/all-users" className="nav-item nav-link link">
            All User
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/all-venue" className="nav-item nav-link link">
            All Venues
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/all-blogs" className="nav-item nav-link link">
            All Blogs
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/all-products" className="nav-item nav-link link">
            All Products
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/all-booking" className="nav-item nav-link link">
            Booking
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/all-request" className="nav-item nav-link link">
            Request
          </NavLink>
        </div>
        <div className="box">
          <NavLink to="/logout" className="nav-item nav-link link">
            Logout
          </NavLink>
        </div> */}
      </div>
      <div className="sidebar-overlay">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Storys />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/RSVP" element={<Rsvp />} />
          <Route path="/venues" element={<Venue />} />
          <Route path="/products" element={<Product />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/all-venues" element={<AllVenues />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/all-booking" element={<AllBooking />} />
          <Route path="/all-request" element={<Contect />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-blog" element={<AddBlogs />} />
          <Route path="/add-venue" element={<AddVenue />} />
          <Route path="/add-guest" element={<AddGuest />} />
          <Route path="/add-cart" element={<AddCart />} />
          <Route path="/card" element={<Card />} />
          <Route path="/add-Order" element={<Orderd />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/contect-us" element={<ContectUs />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default Sidebar;
