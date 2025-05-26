import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Routes/Body"
import Login from "./Pages/Login/Login.jsx"
import Profile from "./Pages/Profile/Profile"


function App() {

  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>

          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Body/>}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
