import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { sendCardToBackend } from "/src/tarot_deck/helpers.js";
import { tarotDeck } from "/src/tarot_deck/tarot_deck.js";
import "./App.scss";

function App() {
  //const card = getCard(tarotDeck);

  const [cardOfTheDay, setCardOfTheDay] = React.useState({
    name: "The Fool",
    number: 0,
    image: "src/assets/TarotDeck/the fool.png",
    meaning: "New beginnings, adventure, opportunity",
    reversed: "Carelessness, recklessness, foolishness",
    astrology: "Aries",
    element: "Fire",
    keywords: "New beginnings, adventure, opportunity",
    majorArcana: true,
    description:
      "The Fool card represents new beginnings and the start of a new journey. The figure on the card is carefree and ready for adventure, with his head held high and a small bag slung over his shoulder. He is about to step off a cliff, but he does not seem to be worried or afraid. This card is associated with the element of fire and the zodiac sign Aries, which both represent energy, passion, and impulsiveness. When this card appears in a reading, it is a reminder to embrace change and take risks, even if they seem daunting at first. Reversed, the Fool can indicate carelessness or recklessness, so it is important to balance spontaneity with caution.",
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home cardOfTheDay={cardOfTheDay} setCardOfTheDay={setCardOfTheDay} />
        }
      />
      {/*       <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
}

export default App;
