import { loginUser, logoutUser, createUser } from "../tarot_deck/helpers.js";

const Header = () => {
  return (
    <header>
      <div className="buttons-wrapper">
        <h1>Solar Eclipse Astrology</h1>
        <button className="login-button" onClick={loginUser}>
          log In
        </button>
        <button className="signup-button" onClick={createUser}>
          Sign Up
        </button>
        <button className="logout-button" onClick={logoutUser}>
          logout
        </button>
      </div>
    </header>
  );
};

export { Header };
