const getCard = (deck) => {
  let randomIndex = Math.floor(Math.random() * deck.length);
  let card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
};

const getCardOfTheDay = async (todaysCard) => {
  const response = await fetch("http://localhost:3333/card_of_the_day");
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  todaysCard = data;
};

const getRandomCard = async () => {
  const response = await fetch("http://localhost:3333/cards");
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return data;
};

const createUser = async (user, setState) => {
  console.log("createUser");
  fetch("http://localhost:3333/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // <-- include credentials in request
    body: JSON.stringify({
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    }),
  });
  loginUser(user);
  // .then((response) => response.json())
  // .then((data) => {
  // });
};

const getUsersCards = async (state, setUserCards) => {
  fetch(`http://localhost:3333/users/${state.username}/cards`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // <-- include credentials in request
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.cards[0].name_of_card);
      setUserCards(data.cards);
    });
};

const loginUser = async (user) => {
  console.log("loginUser");

  fetch("http://localhost:3333/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // <-- include credentials in request
    body: JSON.stringify({
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    }),
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
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // <-- include credentials in request
    body: JSON.stringify({
      user: {
        username: user.username,
        password: user.password,
      },
    }),
  });
};

const checkAuth = async (setState) => {
  console.log("checkAuth");
  fetch("http://localhost:3333/authenticated", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // <-- include credentials in request
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setState(data);
    });
};

export {
  getCard,
  getCardOfTheDay,
  createUser,
  loginUser,
  logoutUser,
  checkAuth,
  getRandomCard,
  getUsersCards,
};
