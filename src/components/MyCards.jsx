import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Home_Header";
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
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="container">
      <Header />
      <h1>{currentUser}'s cards</h1>
      {allCards.map((card) => {
        <div className="card">
          <h2>{card.name}</h2>
          <img src={card.image_url} alt={card.name} />
          <p>{card.user_thoughts}</p>
          <p>{card.user_feelings}</p>
        </div>;
      })}

      <Link to="/profile">Back to Profile</Link>
    </div>
  );
};

export { MyCards };
