import { Link } from "react-router-dom";
import { logoutUser } from "../../tarot_deck/helpers";
import { Header } from "../landing_page/Home_Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfileHeader = () => {
  const user = localStorage.getItem("sea-username");
  const navigator = useNavigate();
  function logUserOut() {
    logoutUser();
    navigator("/");
  }
  return (
    <div>
      <h1>{user}</h1>
      <button onClick={logUserOut}>Logout</button>
    </div>
  );
};
export { ProfileHeader };
