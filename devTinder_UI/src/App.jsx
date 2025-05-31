import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Profile from "./Pages/Profile/Profile";
import Body from "./components/Body.jsx";
import Feed from "./Pages/Home/Feed.jsx";
import { useSelector } from "react-redux";

function App() {
    

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
