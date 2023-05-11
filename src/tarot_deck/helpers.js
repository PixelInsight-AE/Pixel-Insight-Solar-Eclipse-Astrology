const getCard = (deck) => {
  let randomIndex = Math.floor(Math.random() * deck.length);
  let card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
};

const sendCardToBackend = async (card) => {
  const response = await fetch("http://localhost:3333/cards", {
    method: "POST",
    headers: {
      mode: "no-cors",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });
  const data = await response.json();
  console.log(data);
};

const getCardOfTheDayFromBackend = async (cardOfTheDay, setCardOfTheDay) => {
  const response = await fetch("http://localhost:3333/cards/1", {
    method: "GET",
    headers: {
      mode: "no-cors",
      "Content-Type": "application/json",
    },
  });
  //  t.string "name_of_card"
  //   t.binary "card_image"
  //   t.string "card_description"
  //   t.string "meaning_up"
  //   t.string "meaning_rev"
  //   t.string "astrology"
  //   t.integer "numerology"
  //   t.string "element"
  //   t.boolean "major_minor"
  //   t.boolean "user_feeling"
  //   t.string "user_thoughts"
  const data = await response.json();
  const name = data.cards[0].name_of_card;
  const image = data.cards[0].card_image;
  const description = data.cards[0].card_description;
  setCardOfTheDay({
    name: name,
    image: image,
    description: description,
  });
  // const {nameOfCard, }
  console.log(data);
  //const { name, image, description } = data[0];
  //setCardOfTheDay({ name, image, description });
  //return data;
};

export { getCard, getCardOfTheDayFromBackend, sendCardToBackend };
