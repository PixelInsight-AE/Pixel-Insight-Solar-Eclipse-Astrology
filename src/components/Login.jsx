import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
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

  useEffect(() => {
    console.log(user);
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3333/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
        },
      }),
    });
    const data = await response.json();
    localStorage.setItem("sea-token", data.token);
    localStorage.setItem("sea-username", data.user.username);
    setUser({
      username: "",
      password: "",
      Errors: [],
    });
    navigator("/profile");
  };

  return (
    <div id="Login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export { Login };
