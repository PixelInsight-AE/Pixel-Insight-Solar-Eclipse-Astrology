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

// const createUser = async (user) => {
//   try {
//     const csrf = await getCSRFToken();
//     console.log("CSRF token:", csrf);

//     const response = await fetch("http://localhost:3333/users", {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//         "X-CSRF-Token": csrf,
//       },
//       credentials: "include",
//       body: JSON.stringify({
//         user: {
//           username: user.username,
//           email: user.email,
//           password: user.password,
//         },
//       }),
//     });

//     if (response.ok) {
//       console.log("User created successfully");
//       // Handle successful user creation
//     } else {
//       console.log("Failed to create user");
//       // Handle error during user creation
//     }
//   } catch (error) {
//     console.log("Error:", error);
//     // Handle other errors, such as network issues
//   }
// };

const createUser = async (user) => {
  fetch("http://localhost:3333/csrf")
    .then((response) => response.json())
    .then((data) => {
      const csrf = data.csrf;
      console.log("CSRF token:", csrf);
      fetch("http://localhost:3333/users", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrf,
        },
        credentials: "include",
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
    });
};

const getCSRFToken = async () => {
  try {
    const response = await fetch("http://localhost:3333/csrf", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return data.csrf;
    } else {
      throw new Error("Failed to retrieve CSRF token");
    }
  } catch (error) {
    throw new Error("Error fetching CSRF token: " + error.message);
  }
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

const logoutUser = async (user, setState) => {
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
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      checkAuth(setState);
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
  getCSRFToken,
  getCard,
  getCardOfTheDay,
  createUser,
  loginUser,
  logoutUser,
  checkAuth,
  getRandomCard,
  getUsersCards,
};
