const getRandomCard = async () => {
  const response = await fetch("http://localhost:3333/api/random");
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return data;
};

const postUserCard = async (card) => {
  const token = localStorage.getItem("sea-token");
  const response = await fetch("http://localhost:3333/api/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(card),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return data;
};

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

const loginUser = async (user) => {
  const response = await fetch("http://localhost:3333/login", {
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
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Invalid email or password");
  }
  localStorage.setItem("sea-token", data.token);
  localStorage.setItem("sea-username", data.user.username);
};

const logoutUser = function () {
  localStorage.removeItem("sea-token");
  localStorage.removeItem("sea-username");
};

export { createUser, loginUser, logoutUser, getRandomCard };
