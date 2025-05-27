import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Profile from "./Pages/Profile/Profile";
import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js";
import Feed from "./Pages/Home/Feed.jsx";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
