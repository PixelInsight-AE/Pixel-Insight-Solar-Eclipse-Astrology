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

export default function Home({ cardOfTheDay, setCardOfTheDay }) {
  //console.log(cardOfTheDay);
  return (
    <div id="Home">
      <Header />
      <MessageBox />
      <CardOfTheDay
        cardOfTheDay={cardOfTheDay}
        setCardOfTheDay={setCardOfTheDay}
      />
      <DrawCardOrShowFeeling cardOfTheDay={cardOfTheDay} />
    </div>
  );
}
