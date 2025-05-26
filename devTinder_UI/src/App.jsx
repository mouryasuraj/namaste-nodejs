import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Body from "./Routes/Body"
import Login from "./Pages/Login/Login"
import Profile from "./Pages/Profile/Profile"


function App() {

  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
