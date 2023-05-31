// TODO: Make conditional render for back of card, and front of card when card is drawn
const CardOfTheDay = ({ cardOfTheDay, handleModalClick }) => {
  // TODO: Move to api.js or similar
  // const fetchCardOfTheDay = async () => {
  //   const response = await fetch("http://localhost:3333/card_of_the_day");
  //   const data = await response.json();
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   } else {
  //     console.log(data);
  //     setCardOfTheDay({
  //       name: data.card.name_of_card,
  //       image: data.card.card_image,
  //       description: data.card.card_description,
  //       meaning: data.card.meaning_up,
  //       element: data.card.element,
  //       astrology: data.card.astrology,
  //       reversed: data.card.meaning_rev,
  //       number: data.card.numerology,
  //     });
  //   }
  // };

  return (
    <div onClick={handleModalClick} className="card-of-the-day">
      {cardOfTheDay ? (
        <img src={cardOfTheDay.image_url} alt={cardOfTheDay.name} />
      ) : null}
    </div>
  );
};

export { CardOfTheDay };
