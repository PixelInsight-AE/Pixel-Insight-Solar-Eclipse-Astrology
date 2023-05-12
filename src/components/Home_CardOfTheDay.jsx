// TODO: Make conditional render for back of card, and front of card when card is drawn
const CardOfTheDay = ({ cardOfTheDay, setCardOfTheDay }) => {
  let todaysCard;
  const randomCard = (setCardOfTheDay) => {
    console.log("randomCard");
    const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    setCardOfTheDay(card);
  };

  // TODO: Move to api.js or similar
  const fetchCardOfTheDay = async () => {
    const response = await fetch("http://localhost:3333/card_of_the_day");
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      console.log(data);
      setCardOfTheDay({
        name: data.card.name_of_card,
        image: data.card.card_image,
        description: data.card.card_description,
        meaning: data.card.meaning_up,
        element: data.card.element,
        astrology: data.card.astrology,
        reversed: data.card.meaning_rev,
        number: data.card.numerology,
      });
    }
  };

  return (
    <div className="card-of-the-day">
      <img
        src="https://unwinnable.com/wp-content/uploads/2013/08/Tarot2.jpg"
        alt={cardOfTheDay.name}
      />
      <h3>{cardOfTheDay.meaning}</h3>
    </div>
  );
};

export { CardOfTheDay };
