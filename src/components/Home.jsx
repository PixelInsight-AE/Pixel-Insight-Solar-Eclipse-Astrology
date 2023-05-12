import React, { useEffect } from "react";
import { sendCardToBackend, getCardOfTheDay } from "/src/tarot_deck/helpers.js";
import { tarotDeck } from "/src/tarot_deck/tarot_deck.js";
import "./Home.scss";
import { Header } from "/src/components/Home_Header.jsx";

//TODO: display messages from backend particularry a random greeting with the users name
const MessageBox = (props) => {
  const { message } = props;
  return (
    <div className="message-box">
      <h2>Message Box</h2>
    </div>
  );
};

// TODO: Make conditional render for back of card, and front of card when card is drawn
const CardOfTheDay = ({ cardOfTheDay, setCardOfTheDay }) => {
  let todaysCard;
  const randomCard = (setCardOfTheDay) => {
    console.log("randomCard");
    const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    setCardOfTheDay(card);
  };

  // TODO: Move to api.js or similar
  const fetchCardOfTheDay = async () => {
    const response = await fetch("http://localhost:3333/card_of_the_day");
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      console.log(data);
      setCardOfTheDay({
        name: data.card.name_of_card,
        image: data.card.card_image,
        description: data.card.card_description,
        meaning: data.card.meaning_up,
        element: data.card.element,
        astrology: data.card.astrology,
        reversed: data.card.meaning_rev,
        number: data.card.numerology,
      });
    }
  };

  return (
    <div className="card-of-the-day">
      <img
        src="https://i.pinimg.com/originals/df/ae/6f/dfae6f96808e261ce8340d9aa79ee7b3.png"
        alt={cardOfTheDay.name}
      />
      <h3>{cardOfTheDay.meaning}</h3>
    </div>
  );
};

const DrawCardOrShowFeeling = () => {
  return <div className="draw-card-or-show-feeling"></div>;
};

//TODO: Move into a parent component with a conditional render for either draw card or feeling buttons.
const DrawCardButton = ({ cardOfTheDay }) => {
  //console.log(cardOfTheDay);
  const handleClick = (cardOfTheDay) => {
    sendCardToBackend(cardOfTheDay);
  };
  return (
    <button
      id="card-of-the-day-button"
      onClick={() => handleClick(cardOfTheDay)}
    >
      Draw Your card of the day!
    </button>
  );
};

const FeelingPositiveOrNegative = () => {
  return <div className="feeling-positive-or-negative"></div>;
};

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
      <DrawCardButton
        cardOfTheDay={cardOfTheDay}
        setCardOfTheDay={setCardOfTheDay}
      />
    </div>
  );
}
