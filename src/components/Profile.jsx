import { Header } from "./Home_Header";

const Profile = () => {
  const user = localStorage.getItem("sea-username");
  return (
    <div className="profile">
      <Header />
      <h1>{user}</h1>
    </div>
  );
};

export { Profile };
