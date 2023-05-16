//TODO: display messages from backend particularry a random greeting with the users name
const MessageBox = ({ username }) => {
  return (
    <div className="message-box">
      <h2>Message Box</h2>
      <p>{username}</p>
    </div>
  );
};

export { MessageBox };
