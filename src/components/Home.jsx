import React, { useEffect } from "react";
import { sendCardToBackend } from "/src/tarot_deck/helpers.js";
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

const CardOfTheDay = ({ cardOfTheDay }) => {
  return (
    <div className="card-of-the-day">
      <h2>{cardOfTheDay.name}</h2>
      <img src={cardOfTheDay.image} alt={cardOfTheDay.name} />
      <p>{cardOfTheDay.description}</p>
    </div>
  );
};

const DrawCardButton = ({ cardOfTheDay }) => {
  const handleClick = () => {
    sendCardToBackend(cardOfTheDay);
  };
  return <button>Draw Your card of the day!</button>;
};

export default function Home({ cardOfTheDay }) {
  return (
    <div id="Home">
      <Header />
      <CardOfTheDay cardOfTheDay={cardOfTheDay} />
      <DrawCardButton />
    </div>
  );
}
