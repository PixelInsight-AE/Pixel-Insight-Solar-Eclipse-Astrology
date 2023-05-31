import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../landing_page/Home_Header";
import "./MyCards.scss";
const MyCards = () => {
  const [allCards, setAllCards] = useState([]);
  const currentUser = localStorage.getItem("sea-username");
  useEffect(() => {
    const token = localStorage.getItem("sea-token");
    fetch("http://localhost:3333/api/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllCards(data);
      });
  }, []);

  return (
    <div id="MyCards">
      <h1>{currentUser}'s cards</h1>
      <div id="users-cards">
        {allCards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h2>{card.name}</h2>
              <img src={card.image_url} alt={card.name} />
              <p>{card.user_thoughts}</p>
              <p>{card.user_feelings}</p>
            </div>
          );
        })}
      </div>

      <Link to="/profile">Back to Profile</Link>
    </div>
  );
};

export { MyCards };
