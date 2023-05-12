import { tarotDeck, tartoDeck } from "./tarot_deck.js";

const getCard = (deck) => {
  let randomIndex = Math.floor(Math.random() * deck.length);
  let card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
};

const sendCardToBackend = async (card) => {
  console.log("sendCardToBackend");

  const loopForAllCards = async (tartoDeck) => {
    for (let i = 0; i < 78; i++) {
        let card = tarotDeck[i];
      setTimeout(() => {
        const response = await fetch("http://localhost:3333/cards", {
          method: "POST",
          headers: {
            mode: "no-cors",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name_of_card: card.name,
            card_description: card.description,
            card_image: card.image,
            meaning_rev: card.reversed,
            meaning_up: card.meaning,
            element: card.element,
            astrology: card.astrology,
            numerology: card.number,
            major_minor: card.majorArcana,
            user_feeling: card.user_feeling,
            user_thoughts: card.user_thoughts,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(
              "There was a problem with your fetch operation:",
              error
            );
          });
      }, 3000);
    }
  };
};

const getCardOfTheDay = async (todaysCard) => {
  const response = await fetch("http://localhost:3333/card_of_the_day");
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  todaysCard = data;
};

export { getCard, sendCardToBackend, getCardOfTheDay };
