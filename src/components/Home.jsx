import React, { useEffect } from "react";
import { sendCardToBackend, getCardOfTheDay } from "/src/tarot_deck/helpers.js";
import { tarotDeck } from "/src/tarot_deck/tarot_deck.js";
import "./Home.scss";

const Header = () => {
  return (
    <header>
      <h1>Emma's Tarot App</h1>
      <nav></nav>
      <h2>Welcome "INSERT USERNAME FROM DB"</h2>
    </header>
  );
};

const CardOfTheDay = ({ cardOfTheDay, setCardOfTheDay }) => {
  let todaysCard;
  const randomCard = (setCardOfTheDay) => {
    console.log("randomCard");
    const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    setCardOfTheDay(card);
  };
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
  // useEffect(() => {
  //   fetchCardOfTheDay();
  // }, []);
  return (
    <div className="card-of-the-day">
      <h2>{cardOfTheDay.name}</h2>
      <img src={cardOfTheDay.image} alt={cardOfTheDay.name} />
      <p>{cardOfTheDay.description}</p>
      <p>Meaning: {cardOfTheDay.meaning}</p>
      <p>Element: {cardOfTheDay.element}</p>
      <p>Astrology: {cardOfTheDay.astrology}</p>
      <p>Reversed: {cardOfTheDay.reversed}</p>
      <p>Number: {cardOfTheDay.number}</p>

      <button onClick={() => randomCard(setCardOfTheDay)}>
        sets state to new random card
      </button>
      <button onClick={() => fetchCardOfTheDay(setCardOfTheDay)}>
        get card of day
      </button>

      {/* <button onClick={getCardOfTheDayFromBackend(setCardOfTheDay)}>
        get card from backend
      </button> */}
    </div>
  );
};

const DrawCardButton = ({ cardOfTheDay }) => {
  //console.log(cardOfTheDay);
  const handleClick = (cardOfTheDay) => {
    sendCardToBackend(cardOfTheDay);
  };
  return (
    <button onClick={() => handleClick(cardOfTheDay)}>
      Draw Your card of the day!
    </button>
  );
};

export default function Home({ cardOfTheDay, setCardOfTheDay }) {
  //console.log(cardOfTheDay);
  return (
    <div id="Home">
      <Header />
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
