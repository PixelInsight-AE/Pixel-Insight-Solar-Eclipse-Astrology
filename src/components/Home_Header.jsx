import { useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser, logoutUser, createUser } from "../tarot_deck/helpers.js";
import { Registration } from "./Registration.jsx";

const Header = ({ user, setUser, homeState, setHomeState }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(homeState);
  }, [homeState]);
  return (
    <header>
      <div className="buttons-wrapper">
        <h1>Solar Eclipse Astrology</h1>
        <button
          className="login-button"
          onClick={() =>
            setHomeState({
              ...homeState,
              loginModal: !homeState.loginModal,
            })
          }
        >
          log In
        </button>

        <button className="signup-button">
          <Link to="/sign-up" component={<Registration />}>
            Sign Up
          </Link>
        </button>

        <button className="logout-button" onClick={logoutUser}>
          logout
        </button>
      </div>
    </header>
  );
};

export { Header };
