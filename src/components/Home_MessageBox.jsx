//TODO: display messages from backend particularry a random greeting with the users name
import { useEffect } from "react";

const MessageBox = ({ state }) => {
  const username = localStorage.getItem("sea-username")
    ? localStorage.getItem("sea-username")
    : "Guest";
  useEffect(() => {}, [state]);

  return (
    <div className="message-box">
      <h2>Message Box</h2>
      <p>{username}</p>
    </div>
  );
};

export { MessageBox };
