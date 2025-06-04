import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleSignUp } from "./services/signupServices";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div className="flex items-center flex-col gap-10 justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Developer Tinder</h2>
      <div className="card card-border bg-base-300 w-1/3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp(
              dispatch,
              navigate,
              firstName,
              lastName,
              age,
              photoUrl,
              gender,
              email,
              password
            );
          }}
          className="card-body w-full"
        >
          <p className="text-lg font-bold text-center">Login</p>
          <div className="space-y-2 my-2">
            <div className="gap-3 w-full ">
              <div>
                <p className="">First Name</p>
                <input
                  required
                  value={firstName}
                  onChange={(e) => {
                    const inputVal = e.target.value;
                    setFirstName(inputVal);
                  }}
                  type="text"
                  className="input mt-1 w-full"
                />
              </div>
              <div>
                <p className="">Last Name</p>
                <input
                  required
                  value={lastName}
                  onChange={(e) => {
                    const inputVal = e.target.value;
                    setLastName(inputVal);
                  }}
                  type="text"
                  className="input mt-1 w-full "
                />
              </div>
            </div>
            <div>
              <p className="">Email</p>
              <input
                required
                value={email}
                onChange={(e) => {
                  const inputVal = e.target.value;
                  setEmail(inputVal);
                }}
                type="email"
                className="input mt-1 w-full "
              />
            </div>
            <div>
              <p className="">Password</p>
              <input
                value={password}
                onChange={(e) => {
                  const inputVal = e.target.value;
                  setPassword(inputVal);
                }}
                required
                type="password"
                className="input mt-1 w-full"
              />
            </div>
            <div>
              <p className="">Age</p>
              <input
                value={age}
                onChange={(e) => {
                  const inputVal = e.target.value;
                  setAge(inputVal);
                }}
                required
                type="number"
                className="input mt-1 w-full"
              />
            </div>
            <div>
              <p className="">Gender</p>
              <input
                value={gender}
                onChange={(e) => {
                  const inputVal = e.target.value;
                  setGender(inputVal);
                }}
                required
                type="text"
                className="input mt-1 w-full"
              />
            </div>
            <div>
              <p className="">Photo Url</p>
              <input
                value={photoUrl}
                onChange={(e) => {
                  const inputVal = e.target.value;
                  setPhotoUrl(inputVal);
                }}
                required
                type="text"
                className="input mt-1 w-full"
              />
            </div>
          </div>
          <p className="text-red-300">{errorMsg}</p>
          <div className="card-actions">
            <button className="btn btn-primary w-full">Sign Up</button>
          </div>
          <Link
            to="/login"
            className="text-right text-gray-200 cursor-pointer hover:underline"
          >
            Already have a account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
