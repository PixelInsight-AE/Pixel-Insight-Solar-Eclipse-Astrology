import { Routes, Route } from "react-router-dom";
import Home from "./components/landing_page/Home";
import { SignUp } from "./components/sign_up_page/Sign_up";
import { Profile } from "./components/profile_page/Profile";
import { MyCards } from "./components/profile_page/MyCards";
import { Footer } from "./components/Footer";
import "./App.scss";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import { useEffect } from "react";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  );
};

function App() {
  const user = localStorage.getItem("sea-username");

  const navigator = useNavigate();
  useEffect(() => {
    if (!user) {
      navigator("/");
    }
  }, [user, navigator]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={!user ? <Home /> : <Profile />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/my-cards" element={<MyCards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
