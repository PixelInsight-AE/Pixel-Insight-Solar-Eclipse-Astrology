const getCard = (deck) => {
  let randomIndex = Math.floor(Math.random() * deck.length);
  let card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
};

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

const getCardOfTheDay = async (todaysCard) => {
  const response = await fetch("http://localhost:3333/card_of_the_day");
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  todaysCard = data;
};

// const getCardOfTheDayFromBackend = async (setCardOfTheDay) => {
//   const response = await fetch("http://localhost:3333/card_of_the_day", {
//     method: "GET",
//     headers: {
//       mode: "no-cors",
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   } else {
//     console.log(data);
//     setCardOfTheDay(data);
//   }
// };

const createUser = async (user) => {
  console.log("createUser");
  fetch("http://localhost:3333/users", {
    method: "POST",
    data: {
      user: {
        username: user.username,
        password: user.password,
      },
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

const loginUser = async () => {
  console.log("loginUser");
  fetch("http://localhost:3333/sessions", {
    method: "POST",
    data: {
      user: {
        username: "Emma-Lou",
        password: "password",
      },
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

const logoutUser = async (user) => {
  console.log("logoutUser");
  fetch("http://localhost:3333/sessions", {
    method: "DELETE",
    data: {
      user: {
        username: user.username,
        password: user.password,
      },
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

const checkAuth = async (user) => {
  console.log("checkAuth");
  fetch("http://localhost:3333/authenticated", {
    method: "GET",
    data: {
      user: {
        username: user.username,
        password: user.password,
      },
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export {
  getCard,
  sendCardToBackend,
  getCardOfTheDay,
  createUser,
  loginUser,
  logoutUser,
  checkAuth,
};
