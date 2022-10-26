import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogin = ()=>{
    navigate("/login");
  }
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">MyPlace.com</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navBtn" >Register</button>
            <button className="navBtn" onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
