import React, { useEffect, useState } from "react";

//TODO: Move into a parent component with a conditional render for either draw card or feeling buttons.
const DrawCardButton = ({ handleClick }) => {
  return (
    <button id="card-of-the-day-button" onClick={handleClick}>
      Thoughts?
    </button>
  );
};

const ShareFeelings = ({ cardOfTheDay, handleClick }) => {
  const [userFeelings, setUserFeelings] = useState(null);
  const [userThoughts, setUserThoughts] = useState("");

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
      <button onClick={handleClick}>close</button>
    </>
  );
};

const DrawCardOrShowFeeling = ({ cardOfTheDay }) => {
  const [isCardDrawn, setIsCardDrawn] = useState(false);
  const handleClick = () => {
    setIsCardDrawn(!isCardDrawn);
  };
  return (
    <>
      {isCardDrawn ? (
        <ShareFeelings cardOfTheDay={cardOfTheDay} handleClick={handleClick} />
      ) : (
        <DrawCardButton handleClick={handleClick} cardOfTheDay={cardOfTheDay} />
      )}
    </>
  );
};
export { DrawCardOrShowFeeling };
