import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
const Card = ({ card }) => {
  return (
    <div key={card.id} className="card">
      <h1>{card.name_of_card}</h1>
      <h2>{card.meaning_up}</h2>
      <h2>{card.meaning_rev}</h2>
      <h2>{card.description}</h2>
      <img src={card.card_image} alt={card.name_of_card} />
    </div>
  );
};

const UserCards = ({ state }) => {
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    getUsersCards(state, setUserCards);
  }, []);
  return (
    <div className="user-cards">
      {userCards.map((card) => {
        return <Card card={card} />;
      })}

      <Link to="/">Home</Link>
    </div>
  );
};

export { UserCards };
