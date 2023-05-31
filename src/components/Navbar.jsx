import { useState } from "react";
import { useAuth } from "../../src/hooks/useAuth";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const { login, logout, isAuthenticated, authError } = useAuth();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

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
      <div>
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
      </div>
    </nav>
  );
};

export default NavBar;
