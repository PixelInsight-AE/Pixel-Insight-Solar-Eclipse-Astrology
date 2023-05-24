import { useState, useEffect } from "react";
import { checkAuth, loginUser } from "../tarot_deck/helpers";
const Login = ({ setState, state, setHomeState, homeState }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    Errors: [],
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
    setUser({
      username: "",
      password: "",
      Errors: [],
    });
    setHomeState({
      ...homeState,
      loginModal: !homeState.loginModal,
    });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export { Login };
