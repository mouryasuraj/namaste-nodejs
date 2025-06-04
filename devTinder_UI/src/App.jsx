import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Profile from "./Pages/Profile/Profile";
import Body from "./components/Body.jsx";
import Feed from "./Pages/Home/Feed.jsx";
import Request from "./Pages/Requests/Request.jsx";
import Connections from "./Pages/Connections/Connections.jsx";
import SignUp from "./Pages/Sign Up/SignUp.jsx";

function App() {
    

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/requests" element={<Request />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
