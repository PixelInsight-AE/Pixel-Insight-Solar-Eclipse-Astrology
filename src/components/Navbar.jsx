import { useState } from "react";
import { useAuth } from "../../src/hooks/useAuth";

const NavBar = () => {
  const { login, logout, isAuthenticated, authError } = useAuth();
  const [hamburger, setHamburger] = useState(false);
  const currentUser = localStorage.getItem("sea-username");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleClick = () => {
    setHamburger(!hamburger);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <nav id="navbar">
      <div>
        <h1>Solar Eclipse Astrology</h1>
      </div>
      <div></div>
      {currentUser ? (
        <button onClick={handleClick}>{currentUser}</button>
      ) : (
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder={authError ? "Username is required" : "Username:"}
            required={true}
            autoComplete="on"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder={authError ? "Password is required" : "Password:"}
            required={true}
            autoComplete="on"
          />
          <button type="submit">Login</button>
        </form>
      )}
      {hamburger && (
        <div id="hamburger">
          <button onClick={logout}>Logout</button>
          <button>Account</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
