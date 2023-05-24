//TODO: display messages from backend particularry a random greeting with the users name
import { useEffect } from "react";

const MessageBox = ({ username, state }) => {
  useEffect(() => {
    console.log("Message Box Mounted");
  }, [state]);

  return (
    <div className="message-box">
      <h2>Message Box</h2>
      <p>{username}</p>
    </div>
  );
};

export { MessageBox };
