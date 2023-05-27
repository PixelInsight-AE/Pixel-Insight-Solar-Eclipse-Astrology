import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { tarotDeck } from "/src/tarot_deck/tarot_deck.js";
import "./Home.scss";
import { Header } from "./Home_Header.jsx";
import { MessageBox } from "./Home_MessageBox";
import { CardOfTheDay } from "./Home_CardOfTheDay.jsx";
import { DrawCardOrShowFeeling } from "./Home_DrawCardOrShowFeeling.jsx";
import { Registration } from "./Registration";
import { Login } from "./Login";

//TODO: make this a conditional render with the parent component of the draw card and feelings buttons
const UserFeelingsAboutCard = () => {
  return (
    /* Form for collecting user feelings about their card of the day to send of to the backend */
    <div className="user-feelings-about-card">
      <h2>How did you feel about your card of the day?</h2>
      <form>
        <label htmlFor="userFeelings">User Feelings</label>
        <input type="text" id="userFeelings" name="userFeelings" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default function Home({
  cardOfTheDay,
  setCardOfTheDay,
  state,
  setState,
}) {
  // const handleClick = () => {
  //   console.log("clicked");
  //   let i = 0;

  //   const sendRequest = () => {
  //     if (i < 78) {
  //       fetch("http://localhost:3333/api/tarots", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name: tarotDeck[i].name,
  //           description: tarotDeck[i].description,
  //           image_url: tarotDeck[i].image,
  //           meaning_rev: tarotDeck[i].reversed,
  //           meaning_up: tarotDeck[i].meaning,
  //           element: tarotDeck[i].element,
  //           astrology: tarotDeck[i].astrology,
  //           numerology: tarotDeck[i].number,
  //           major_minor: tarotDeck[i].majorArcana,
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           i++;
  //           setTimeout(sendRequest, 500); // recursive call with delay
  //         });
  //     }
  //   };

  //   sendRequest(); // start the recursive function
  // };

  return (
    <div id="Home">
      <Header />

      <Login />

      {/* <MessageBox state={state} />
      <CardOfTheDay
        cardOfTheDay={cardOfTheDay}
        setCardOfTheDay={setCardOfTheDay}
      />
      <DrawCardOrShowFeeling cardOfTheDay={cardOfTheDay} />
      <button onClick={handleClick}> POST ALL CARDS TO DB</button>
      <Link to="/my-cards">My Cards</Link> */}
    </div>
  );
}
