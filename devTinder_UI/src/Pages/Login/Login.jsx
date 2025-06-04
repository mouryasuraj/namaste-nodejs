import { useState } from "react";
import { handleLogin } from "./login";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


  return (
    <div className="flex items-center flex-col gap-10 justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Developer Tinder</h2>
      <div className="card card-border bg-base-300 w-96">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(email, password, dispatch, navigate,setErrorMsg)
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
                type="email"
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
          <p className="text-red-300">{errorMsg}</p>
          <div className="card-actions">
            <button className="btn btn-primary w-full">Login</button>
          </div>
          <Link to="/signup" className="text-right text-gray-200 cursor-pointer hover:underline">Create an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
