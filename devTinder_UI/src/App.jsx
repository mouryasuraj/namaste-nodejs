import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Profile from "./Pages/Profile/Profile";
import Body from "./components/Body.jsx";
import Feed from "./Pages/Home/Feed.jsx";
import Request from "./Pages/Requests/Request.jsx";
import Connections from "./Pages/Connections/Connections.jsx";
import SignUp from "./Pages/Sign Up/SignUp.jsx";
import Layout from "./components/Layout.jsx";
import ReturnPolicy from "./Pages/Policy/ReturnPolicy.jsx";
import RefundPolicy from "./Pages/Policy/RefundPolicy.jsx";
import PrivacyPolicy from "./Pages/Policy/PrivacyPolicy.jsx";
import Disclaimer from "./Pages/Policy/Disclaimer.jsx";
import AboutAndContact from "./Pages/Policy/AboutAndContact.jsx";
import Premium from "./Pages/Premium/Premium.jsx";
import Chat from "./Pages/Chat/Chat.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Policies */}
          <Route path="/returnpolicy" element={<ReturnPolicy />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/aboutandcontact" element={<AboutAndContact />} />

          <Route path="/home" element={<Body />}>
            <Route path="/home" element={<Feed />} />
            <Route path="/home/profile" element={<Profile />} />
            <Route path="/home/connections" element={<Connections />} />
            <Route path="/home/requests" element={<Request />} />
            <Route path="/home/premium" element={<Premium />} />
            <Route path="/home/chat/:toUserId" element={<Chat />} />
          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
