import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/landing_page/Home";
import { tarotDeck } from "/src/tarot_deck/tarot_deck.js";
import { SignUp } from "./components/sign_up_page/Sign_up";

import { Profile } from "./components/profile_page/Profile";
import { MyCards } from "./components/profile_page/MyCards";
import "./App.scss";
import { createUser } from "./tarot_deck/helpers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-cards" element={<MyCards />} />
    </Routes>
  );
}

export default App;
