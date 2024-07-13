import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navigationbar/Navbar";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import ChangePassword from "./pages/changePassword/changePassword";
import ForgotPassword from "./pages/forgotPassword/emailSending";
import About from "./pages/about/About";
import UserDeshbord from "./pages/userDeshbord/UserDeshbord";
import Storys from "./pages/story/Story";
import Timeline from "./pages/timeline/Timeline";
import Gallery from "./pages/gallary/Gallary";
import Rsvp from "./pages/rsvp/RSVP";
import Logout from "./pages/logout/Logout";
import Registration from "./pages/registration/Registration";
import Sidebar from "./components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import UserProfile from "./pages/userProfile/UserProfile";
import Venue from "./pages/venue/Venue";
import Product from "./pages/products/Product";

function App() {
  // const isLogin = useSelector((state) => state.isLogin);
  const isLogin = true;
  return (
    <>
      <Navbar />
      {!isLogin ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Storys />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/RSVP" element={<Rsvp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route paht="/user-deshbord" element={<UserDeshbord />} />
          <Route path="/venues" element={<Venue />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      ) : (
        <Sidebar />
      )}
      <Footer />
    </>
  );
}

export default App;
