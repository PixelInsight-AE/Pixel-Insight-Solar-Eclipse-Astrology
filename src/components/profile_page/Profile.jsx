import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CardOfTheDay } from "./CardOfTheDay";
import { DrawCardOrShowFeeling } from "./DrawCardOrShowFeeling";
import { useAuth } from "../../hooks/useAuth";

import "./Profile.scss";
import CardOfTheDayModal from "./CardOfTheDayModal";

const Profile = () => {
  const { logout, getLoginCard, isAuthenticated } = useAuth();
  const user = localStorage.getItem("sea-username");
  const [isCardDrawn, setIsCardDrawn] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
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
    id: null,
  });

  useEffect(() => {
    // const token = localStorage.getItem("sea-token");
    // const response = fetch("http://localhost:3333/api/card_of_the_day", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCardOfTheDay(data);
    //   });
    getLoginCard().then((data) => {
      setCardOfTheDay(data);
    });
  }, []);

  const handleModalClick = () => {
    setIsCardModalOpen(!isCardModalOpen);
  };

  return (
    <div id="Profile">
      {!isCardModalOpen ? (
        <CardOfTheDay
          cardOfTheDay={cardOfTheDay}
          handleModalClick={handleModalClick}
        />
      ) : (
        <CardOfTheDayModal
          cardOfTheDay={cardOfTheDay}
          handleModalClick={handleModalClick}
        />
      )}
      <DrawCardOrShowFeeling cardOfTheDay={cardOfTheDay} />

      <Link to="/my-cards">My Cards</Link>
    </div>
  );
};

export { Profile };
