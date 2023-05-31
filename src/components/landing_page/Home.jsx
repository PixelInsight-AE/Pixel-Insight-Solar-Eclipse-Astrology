import React, { useEffect, useState } from "react";
import { SignUp } from "../sign_up_page/Sign_up";

import "./Home.scss";

//TODO: make this a conditional render with the parent component of the draw card and feelings buttons

export default function Home() {
  return (
    <div id="Home">
      <SignUp />
    </div>
  );
}
