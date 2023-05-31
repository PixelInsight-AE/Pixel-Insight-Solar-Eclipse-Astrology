const createUser = async (user) => {
  const response = await fetch("http://localhost:3333/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error("Invalid email or password");
  }
  localStorage.setItem("sea-token", data.token);
  localStorage.setItem("sea-username", data.user.username);
  console.log(data);
};

const updateCard = async (userThoughts, userFeelings) => {
  const token = localStorage.getItem("sea-token");
  const response = await fetch(
    `http://localhost:3333/api/cards/${cardOfTheDay.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_feeling: userFeelings,
        user_thoughts: userThoughts,
      }),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

const fetchCardOfTheDay = async () => {
  const token = localStorage.getItem("sea-token");
  console.log(token);
  const response = await fetch("http://localhost:3333/api/card_of_the_day", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (!response.ok) {
    console.log("error");
  }
  return data;
  // .then((response) => response.json())
  // .then((data) => {
  //   return data;
  // });
};

const loginUser = async (user) => {
  const response = await fetch("http://localhost:3333/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: user.username,
        password: user.password,
      },
    }),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json().then((data) => {
    localStorage.setItem("sea-token", data.token);
    localStorage.setItem("sea-username", data.user.username);
  });
};

const logoutUser = function () {
  localStorage.removeItem("sea-token");
  localStorage.removeItem("sea-username");
};

// const postDeckToDB = () => {
//   console.log("clicked");
//   let i = 0;

//   const sendRequest = () => {
//     if (i < 78) {
//       fetch("http://localhost:3333/api/tarots", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: tarotDeck[i].name,
//           description: tarotDeck[i].description,
//           image_url: tarotDeck[i].image,
//           meaning_rev: tarotDeck[i].reversed,
//           meaning_up: tarotDeck[i].meaning,
//           element: tarotDeck[i].element,
//           astrology: tarotDeck[i].astrology,
//           numerology: tarotDeck[i].number,
//           major_minor: tarotDeck[i].majorArcana,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           i++;
//           setTimeout(sendRequest, 500); // recursive call with delay
//         });
//     }
//   };

//   sendRequest(); // start the recursive function
// };

export { updateCard, createUser, loginUser, logoutUser, fetchCardOfTheDay };
