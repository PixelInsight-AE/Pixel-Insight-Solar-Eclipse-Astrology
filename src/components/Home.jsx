import React, { useEffect } from "react";
import { getCardOfTheDay } from "/src/tarot_deck/helpers.js";
import { tarotDeck } from "/src/tarot_deck/tarot_deck.js";
import "./Home.scss";
import { Header } from "./Home_Header.jsx";
import { MessageBox } from "./Home_MessageBox";
import { CardOfTheDay } from "./Home_CardOfTheDay.jsx";
import { DrawCardOrShowFeeling } from "./Home_DrawCardOrShowFeeling.jsx";

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

export default function Home({ cardOfTheDay, setCardOfTheDay, user, setUser }) {
  const handleClick = () => {
    console.log("clicked");
    let i = 0;

    const sendRequest = () => {
      if (i < tarotDeck.length) {
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
            setTimeout(sendRequest, 3000); // recursive call with delay
          });
      }
    };

    sendRequest(); // start the recursive function
  };
  //console.log(cardOfTheDay);
  // const handleClick = () => {
  //   console.log("clicked");
  //   // POST all cards to the DB in a for loop on a set interval
  //   for (let i = 0; i < tarotDeck.length - 1; i++) {
  //     setInterval(() => {
  //       fetch("http://localhost:3333/tarot_deck", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name_of_card: tarotDeck[i].name,
  //           card_description: tarotDeck[i].description,
  //           card_image: tarotDeck[i].image,
  //           meaning_rev: tarotDeck[i].reversed,
  //           meaning_up: tarotDeck[i].meaning,
  //           element: tarotDeck[i].element,
  //           astrology: tarotDeck[i].astrology,
  //           numerology: tarotDeck[i].number,
  //           major_minor: tarotDeck[i].majorArcana,
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => console.log(data));
  //     }, 3000);
  //   }
  // };

  return (
    <div id="Home">
      <Header user={user} setUser={setUser} />
      <MessageBox />
      <CardOfTheDay
        cardOfTheDay={cardOfTheDay}
        setCardOfTheDay={setCardOfTheDay}
      />
      <DrawCardOrShowFeeling cardOfTheDay={cardOfTheDay} />
      <button onClick={handleClick}> POST ALL CARDS TO DB</button>
    </div>
  );
}

/* 
 body: JSON.stringify({
      name_of_card: card.name,
      card_description: card.description,
      card_image: card.image,
      meaning_rev: card.reversed,
      meaning_up: card.meaning,
      element: card.element,
      astrology: card.astrology,
      numerology: card.number,
      major_minor: card.majorArcana,
      user_feeling: card.user_feeling,
      user_thoughts: card.user_thoughts,
    }),
*/
