import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Home_Header";
import { CardOfTheDay } from "./Home_CardOfTheDay";
import { DrawCardOrShowFeeling } from "./Home_DrawCardOrShowFeeling";

const Profile = () => {
  const user = localStorage.getItem("sea-username");
  const [cardOfTheDay, setCardOfTheDay] = useState({
    name: "",
    description: "",
    meaning_up: "",
    meaning_rev: "",
    image_url: "",
    numerology: "",
    astrology: "",
    element: "",
    major_minor: "",
    user_thoughts: "",
    user_feelings: null,
  });

  useEffect(() => {
    const response = fetch("http://localhost:3333/api/random")
      .then((response) => response.json())
      .then((data) => setCardOfTheDay(data));
  }, []);

  return (
    <div className="profile">
      <Header />

      <CardOfTheDay cardOfTheDay={cardOfTheDay} />
      <DrawCardOrShowFeeling />

      <Link to="/my-cards">My Cards</Link>
    </div>
  );
};

export { Profile };
