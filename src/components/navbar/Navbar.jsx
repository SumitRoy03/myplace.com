import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">MyPlace.com</span>
        </Link>
        <div className="navItems">
            <button className="navBtn">Register</button>
            <button className="navBtn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
