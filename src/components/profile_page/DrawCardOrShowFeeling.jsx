import React, { useState } from "react";
import { sendCardToBackend } from "../api.js";

//TODO: Move into a parent component with a conditional render for either draw card or feeling buttons.
const DrawCardButton = ({ cardOfTheDay, setIsCardDrawn }) => {
  const handleClick = (setIsCardDrawn) => {
    sendCardToBackend(cardOfTheDay);
    setIsCardDrawn(true);
  };

  return (
    <button
      id="card-of-the-day-button"
      onClick={() => handleClick(setIsCardDrawn)}
    >
      Draw Your card of the day!
    </button>
  );
};

const FeelingPositiveOrNegative = () => {
  return (
    <div className="feeling-positive-or-negative">
      <button id="feeling-positive-button">Feeling Positive</button>
      <button id="feeling-negative-button">Feeling Negative</button>
    </div>
  );
};

const DrawCardOrShowFeeling = ({ cardOfTheDay }) => {
  const [isCardDrawn, setIsCardDrawn] = useState(false);
  return (
    <>
      {isCardDrawn ? (
        <FeelingPositiveOrNegative />
      ) : (
        <DrawCardButton
          cardOfTheDay={cardOfTheDay}
          setIsCardDrawn={setIsCardDrawn}
        />
      )}
    </>
  );
};
export { DrawCardOrShowFeeling };
