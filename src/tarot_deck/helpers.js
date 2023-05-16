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

const createUser = async (user) => {
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
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // <-- include credentials in request
    body: JSON.stringify({
      user: {
        username: "Emma-lou",
        email: "emilyaaronlotz@email.com",
        password: "password",
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
        username: "Emma-lou",
        password: "password",
      },
    }),
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
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // <-- include credentials in request
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
  getCardOfTheDay,
  createUser,
  loginUser,
  logoutUser,
  checkAuth,
};
