import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../tarot_deck/helpers";
import { useNavigate } from "react-router-dom";
import "./Registration.scss";
const Registration = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    errors: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors, //!! This is the key to the whole thing. It keeps the other errors from being overwritten.
        passwordConfirm:
          (name === "password" && prevState.passwordConfirm !== value) ||
          (name === "passwordConfirm" && prevState.password !== value)
            ? "Passwords do not match"
            : "",
        username:
          name === "username" && value.length < 3 && value.length > 0
            ? "Username must be at least 3 characters"
            : "",
        email:
          name === "email" && value.length > 0 && !emailRegex.test(value)
            ? "Email must be valid email address"
            : "",
        password:
          name === "password" && value.length < 6 && value.length > 0
            ? "Password must be at least 6 characters"
            : "",
      },
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(user);
    setUser({
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      errors: {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
    });
    navigate("/profile");
  };

  return (
    <div id="Registration">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <p>{user.errors.username}</p>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
          required={true}
        />
        <label htmlFor="email">Email</label>
        <p>{user.errors.email}</p>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required={true}
        />
        <label htmlFor="password">Password</label>
        <p>{user.errors.password}</p>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
          required={true}
        />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <p>{user.errors.passwordConfirm}</p>
        <input
          type="password"
          name="passwordConfirm"
          value={user.passwordConfirm}
          onChange={handleChange}
          placeholder="confirm password"
          required={true}
        />

        <button type="submit">Send</button>
      </form>

      <Link to="/">Home</Link>
    </div>
  );
};

export { Registration };
