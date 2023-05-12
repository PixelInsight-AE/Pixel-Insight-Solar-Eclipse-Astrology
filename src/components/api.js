const sendCardToBackend = async (card) => {
  console.log("sendCardToBackend");

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
      console.error("There was a problem with your fetch operation:", error);
    });
};

export { sendCardToBackend };
