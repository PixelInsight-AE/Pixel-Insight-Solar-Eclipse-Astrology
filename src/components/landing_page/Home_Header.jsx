import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Registration } from "../sign_up_page/Registration.jsx";

const Header = () => {
  const currentUser = localStorage.getItem("sea-username");
  const navigator = useNavigate();
  const logOutUser = () => {
    localStorage.removeItem("sea-username");
    localStorage.removeItem("sea-token");
    navigator("/");
  };
  useEffect(() => {
    if (currentUser) {
      navigator("/profile");
    }
  }, [currentUser, navigator]);

  return (
    <header>
      <div className="buttons-wrapper">
        <h1>Solar Eclipse Astrology</h1>
        <button className="signup-button">
          <Link to="/sign-up" component={<Registration />}>
            Sign Up
          </Link>
        </button>
        {currentUser ? (
          <button className="logout-button" onClick={logOutUser}>
            logout
          </button>
        ) : null}
      </div>
      <div>
        <h2>{currentUser}</h2>
      </div>
    </header>
  );
};

export { Header };
