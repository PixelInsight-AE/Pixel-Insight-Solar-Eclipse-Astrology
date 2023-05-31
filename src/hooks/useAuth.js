import {
  createUser,
  loginUser,
  fetchCardOfTheDay,
} from "../tarot_deck/helpers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
  const navigator = useNavigate();
  const [authError, setAuthError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = (user) => {
    //! create user's backend takes a user object with username, password, and email
    createUser(user)
      .then((data) => {
        if (data.error) {
          setAuthError(data.error);
        } else {
          setIsAuthenticated(true);
          navigator("/profile");
        }
      })
      .catch((error) => {
        setAuthError(error);
      });
    navigator("/profile");
  };

  const login = (user) => {
    //! login user's backend takes a user object with username and password
    loginUser(user)
      .then(() => {
        navigator("/profile");
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setAuthError(error);
      });
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("sea-token");
    localStorage.removeItem("sea-username");
    navigator("/");
  };

  const getLoginCard = () => {
    const token = localStorage.getItem("sea-token");
    return fetchCardOfTheDay();
  };

  return { isAuthenticated, authError, login, logout, signup, getLoginCard };
};
export { useAuth };
