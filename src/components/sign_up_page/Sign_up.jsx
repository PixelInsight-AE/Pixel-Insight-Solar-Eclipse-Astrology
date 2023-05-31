import { useEffect, useState } from "react";
import { createUser } from "../../tarot_deck/helpers";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const SignUp = () => {
  const { signup, isAuthenticated, authError } = useAuth();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
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

  useEffect(() => {}, [newUser.errors]);

  const handleChange = (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    const { name, value } = e.target;
    setNewUser((prevState) => ({
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
    let user;
    signup(
      (user = {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      })
    );
    setNewUser({
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
  };

  return (
    <div id="SignUp">
      <div id="card-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>

          <input
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleChange}
            placeholder="Username"
            required={true}
            autoComplete="on"
          />
          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            placeholder="Email"
            required={true}
            autoComplete="on"
          />
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
            placeholder="password"
            required={true}
            autoComplete="on"
          />
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            value={newUser.passwordConfirm}
            onChange={handleChange}
            placeholder="confirm password"
            required={true}
            autoComplete="on"
          />

          <button type="submit">Send</button>
          {/* <p>
            Already have an account?
            <Link to="/sign-up">
              <span>Login</span>
            </Link>
          </p> */}
        </form>
      </div>

      <p
        id="errors"
        style={
          Object.values(newUser.errors).some((error) => error !== "")
            ? { border: "1px solid #d32752" }
            : { border: "none" }
        }
      >
        {newUser.errors.email ||
          newUser.errors.username ||
          newUser.errors.username.passwordConfirm ||
          newUser.errors.password}
      </p>
    </div>
  );
};

export { SignUp };
