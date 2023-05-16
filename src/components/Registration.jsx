import { useEffect, useState } from "react";
import {
  loginUser,
  logoutUser,
  checkAuth,
  createUser,
} from "../tarot_deck/helpers";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
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
    createUser(user);
    setUser({
      username: "",
      email: "",
      password: "",
      Errors: [],
    });
  };
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="registration">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
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

export { Registration };
