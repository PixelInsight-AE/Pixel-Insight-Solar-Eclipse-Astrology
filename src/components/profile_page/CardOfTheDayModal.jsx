import React from "react";

export default function CardOfTheDayModal({ cardOfTheDay, handleModalClick }) {
  function elementColor() {
    switch (cardOfTheDay.element) {
      case "Fire":
        return "red";
      case "Water":
        return "blue";
      case "Earth":
        return "green";
      case "Air":
        return "yellow";
      default:
        return;
    }
  }

  return (
    <div id="card-modal" onClick={handleModalClick}>
      <h2>{cardOfTheDay.name}</h2>
      <p>{cardOfTheDay.description}</p>
      <div id="card-stats">
        <p>
          <span>
            Element:<br></br>
          </span>
          {cardOfTheDay.element}
        </p>
        <p>
          <span>
            Sign:<br></br>
          </span>
          {cardOfTheDay.astrology}
        </p>
        <p>
          <span>
            Number:<br></br>
          </span>
          {cardOfTheDay.numerology}
        </p>
        <p>
          <span>
            Major:<br></br>
          </span>
          {cardOfTheDay.major_minor ? "True" : "False"}
        </p>
      </div>
      <h3> How you feel about this card:</h3>
      <p>{cardOfTheDay.user_thoughts}</p>
      <p>{cardOfTheDay.user_feelings ? "Positive" : "Negative"}</p>
    </div>
  );
}
