import React, { useState } from "react";
import { handleUpdateProfile } from "./proflieService";
import { genders } from "../../utils/constants";
import Toastify from "../../components/Toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/slices/userSlice";

const ProfileForm = ({ userData, userId }) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    gender,
    setGender,
    photoUrl,
    setPhotoUrl,
    about,
    setAbout,
  } = userData;

  const [toastMsg, setToastMsg] = useState("");
  const dispatch = useDispatch()

  const payload = {
    firstName,
    lastName,
    gender,
    photoUrl,
    about,
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateProfile(payload, userId, setToastMsg,dispatch, addUser);
        }}
        className="card-body"
      >
        <div className="space-y-2 my-2">
          <div>
            <label className="">First Name</label>
            <input
              required
              value={firstName}
              onChange={(e) => {
                const inputVal = e.target.value;
                setFirstName(inputVal);
              }}
              type="text"
              className="input mt-1 "
            />
          </div>
          <div>
            <label className="">Last Name</label>
            <input
              required
              value={lastName}
              onChange={(e) => {
                const inputVal = e.target.value;
                setLastName(inputVal);
              }}
              type="text"
              className="input mt-1 "
            />
          </div>
          <div>
            <legend className="fieldset-legend">Gender</legend>
            <select
              onChange={(e) => {
                setGender(e.target.value);
              }}
              defaultValue={gender}
              value={gender}
              className="select"
            >
              {genders.map((gender) => {
                return <option>{gender}</option>;
              })}
            </select>
          </div>
          <div>
            <label className="">Photo URL</label>
            <input
              required
              value={photoUrl}
              onChange={(e) => {
                const inputVal = e.target.value;
                setPhotoUrl(inputVal);
              }}
              type="text"
              className="input mt-1 "
            />
          </div>
          <div>
            <label className="">About</label>
            <input
              required
              value={about}
              onChange={(e) => {
                const inputVal = e.target.value;
                setAbout(inputVal);
              }}
              type="text"
              className="input mt-1 "
            />
          </div>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary w-full">Save Profile</button>
        </div>
      </form>
      {toastMsg && <Toastify message={toastMsg} />}
    </div>
  );
};

export default ProfileForm;
