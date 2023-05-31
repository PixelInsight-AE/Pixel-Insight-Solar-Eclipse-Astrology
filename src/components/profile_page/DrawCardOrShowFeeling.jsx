import React, { useEffect, useState } from "react";

//TODO: Move into a parent component with a conditional render for either draw card or feeling buttons.
const DrawCardButton = ({ cardOfTheDay, setIsCardDrawn }) => {
  const handleClick = (setIsCardDrawn) => {
    //sendCardToBackend(cardOfTheDay);
    setIsCardDrawn(true);
  };

  return (
    <button
      id="card-of-the-day-button"
      onClick={() => handleClick(setIsCardDrawn)}
    >
      Thoughts?
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
const ShareFeelings = ({ cardOfTheDay }) => {
  const [userFeelings, setUserFeelings] = useState(null);
  const [userThoughts, setUserThoughts] = useState("");
  // const validateUserThoughts = () => {
  //   if (userThoughts === null) {
  //     return "Please enter your feelings about your card of the day.";
  //   }
  //   if (userThoughts.length > 200) {
  //     return "Max 200 characters.";
  //   }
  //   if (userFeelings === null) {
  //     return "Please select whether you are feeling positive or negative.";
  //   }
  // };
  // const error = validateUserThoughts();
  const token = localStorage.getItem("sea-token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:3333/api/cards/${cardOfTheDay.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_feeling: userFeelings,
          user_thoughts: userThoughts,
        }),
      }
    );
    const data = await response.json();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userThoughts">User Thoughts</label>
        <textarea
          id="userThoughts"
          name="userThoughts"
          onChange={(e) => setUserThoughts(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => setUserFeelings(true)}>Posotive</button>
      <button onClick={() => setUserFeelings(false)}>Negative</button>
    </>
  );
};

const DrawCardOrShowFeeling = ({ cardOfTheDay }) => {
  const [isCardDrawn, setIsCardDrawn] = useState(false);
  return (
    <>
      {isCardDrawn ? (
        <ShareFeelings cardOfTheDay={cardOfTheDay} />
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
