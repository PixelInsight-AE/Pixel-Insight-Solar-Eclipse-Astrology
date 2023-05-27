import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Registration } from "./Registration.jsx";

const Header = ({ user, setUser, homeState, setHomeState }) => {
  const navigator = useNavigate();
  const logOutUser = () => {
    localStorage.removeItem("sea-username");
    localStorage.removeItem("sea-token");
    navigator("/");
  };
  return (
    <header>
      <div className="buttons-wrapper">
        <h1>Solar Eclipse Astrology</h1>
        <button className="signup-button">
          <Link to="/sign-up" component={<Registration />}>
            Sign Up
          </Link>
        </button>

        <button className="logout-button" onClick={logOutUser}>
          logout
        </button>
      </div>
    </header>
  );
};

export { Header };
