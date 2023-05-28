import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  const navigator = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    errors: {
      username: "",
      password: "",
    },
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        username:
          name === "username" && value.length < 3 && value.length > 0
            ? "Enter a valid username"
            : "",
        password:
          name === "password" && value.length < 6 && value.length > 0
            ? "Enter a valid password"
            : "",
      },
    }));
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
      errors: "",
    });
    navigator("/profile");
  };

  return (
    <div id="Login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username{" "}
          <span className="error-messages">{user.errors.username}</span>
        </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
          required={true}
        />
        <label htmlFor="password">Password</label>
        <span className="error-messages">{user.errors.password}</span>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
          required={true}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export { Login };
