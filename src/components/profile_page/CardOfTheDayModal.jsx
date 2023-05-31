import React from "react";

export default function CardOfTheDayModal({ cardOfTheDay, handleModalClick }) {
  return (
    <div onClick={handleModalClick}>
      <h1>Card of the Day</h1>
      <p>{cardOfTheDay.name}</p>
      <p>{cardOfTheDay.description}</p>
      <p>{cardOfTheDay.meaning_up}</p>
      <p>{cardOfTheDay.element}</p>
      <p>{cardOfTheDay.astrology}</p>
      <p>{cardOfTheDay.meaning_rev}</p>
      <p>{cardOfTheDay.numerology}</p>
      <p>{cardOfTheDay.major_minor}</p>
      <p>{cardOfTheDay.user_thoughts}</p>
    </div>
  );
}
