import { Link } from "react-router-dom";
import { logoutUser } from "../../tarot_deck/helpers";
import { Header } from "../landing_page/Home_Header";
const ProfileHeader = () => {
  return (
    <div>
      <h1>Profile Header</h1>
      <Header />
    </div>
  );
};
export { ProfileHeader };
