import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileHeader } from "./Profile_Header";
import { CardOfTheDay } from "./CardOfTheDay";
import { DrawCardOrShowFeeling } from "./DrawCardOrShowFeeling";
import { logoutUser } from "../../tarot_deck/helpers";
import "./Profile.scss";

const Profile = () => {
  const user = localStorage.getItem("sea-username");
  const [isCardDrawn, setIsCardDrawn] = useState(false);
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
    const response = fetch("http://localhost:3333/api/card_of_the_day")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCardOfTheDay(data);
      });
  }, []);

  return (
    <div id="Profile">
      <ProfileHeader />

      <CardOfTheDay cardOfTheDay={cardOfTheDay} />
      <DrawCardOrShowFeeling />

      <Link to="/my-cards">My Cards</Link>
    </div>
  );
};

export { Profile };
