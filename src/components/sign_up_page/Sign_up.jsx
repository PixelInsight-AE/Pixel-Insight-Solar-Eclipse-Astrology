import { Registration } from "./Registration.jsx";

import { Header } from "../landing_page/Home_Header.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SignUp = () => {
  return (
    <div id="SignUp">
      <Registration />

      <Link to="/">Home</Link>
    </div>
  );
};

export { SignUp };
