import { useState } from "react";
import { handleLogin } from "./login";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card card-border bg-base-300 w-96">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(email, password, dispatch, navigate)
          }}
          className="card-body"
        >
          <p className="text-lg font-bold text-center">Login</p>
          <div className="space-y-2 my-2">
            <div>
              <label className="">Email</label>
              <input
                required
                value={email}
                onChange={(e) => {
                  const inputVal = e.target.value;
                  setEmail(inputVal);
                }}
                type="text"
                className="input mt-1 "
              />
            </div>
            <div>
              <label className="">Password</label>
              <input value={password} onChange={(e) =>{
                const inputVal = e.target.value
                setPassword(inputVal)
              }} required type="password" className="input mt-1" />
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
