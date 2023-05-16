import React, { useEffect } from "react";
import { getCardOfTheDay } from "/src/tarot_deck/helpers.js";
import { tarotDeck } from "/src/tarot_deck/tarot_deck.js";
import "./Home.scss";
import { Header } from "./Home_Header.jsx";
import { MessageBox } from "./Home_MessageBox";
import { CardOfTheDay } from "./Home_CardOfTheDay.jsx";
import { DrawCardOrShowFeeling } from "./Home_DrawCardOrShowFeeling.jsx";
import { Registration } from "./Registration";
import { Login } from "./Login";
console.log(tarotDeck.length);
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
  const handleClick = () => {
    console.log("clicked");
    let i = 76;

    const sendRequest = () => {
      if (i < 78) {
        fetch("http://localhost:3333/tarot_deck", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name_of_card: tarotDeck[i].name,
            card_description: tarotDeck[i].description,
            card_image: tarotDeck[i].image,
            meaning_rev: tarotDeck[i].reversed,
            meaning_up: tarotDeck[i].meaning,
            element: tarotDeck[i].element,
            astrology: tarotDeck[i].astrology,
            numerology: tarotDeck[i].number,
            major_minor: tarotDeck[i].majorArcana,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            i++;
            setTimeout(sendRequest, 1000); // recursive call with delay
          });
      }
    };

    sendRequest(); // start the recursive function
  };

  return (
    <div id="Home">
      <Header setState={setState} />
      <Login state={state} setState={setState} />
      <Registration />
      <MessageBox username={state.username} />
      <CardOfTheDay
        cardOfTheDay={cardOfTheDay}
        setCardOfTheDay={setCardOfTheDay}
      />
      <DrawCardOrShowFeeling cardOfTheDay={cardOfTheDay} />
      <button onClick={handleClick}> POST ALL CARDS TO DB</button>
    </div>
  );
}
