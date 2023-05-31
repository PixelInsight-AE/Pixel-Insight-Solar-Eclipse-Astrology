import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tarotDeck } from "/src/tarot_deck/tarot_deck.js";
import "./Home.scss";
import { Header } from "./Home_Header.jsx";
import { Login } from "./Login";
import { SignUp } from "../sign_up_page/Sign_up";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store/counter";
import { authActions } from "../../store/auth";
//TODO: make this a conditional render with the parent component of the draw card and feelings buttons

export default function Home() {
  //!! function to load the tarot deck into the database is in the api.js file

  return (
    <div id="Home">
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}
