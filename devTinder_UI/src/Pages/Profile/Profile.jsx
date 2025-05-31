import React, { useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [about, setAbout] = useState("");

  useEffect(()=>{
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setAge(user.age)
    setAbout(user.about)
    setPhotoUrl(user.photoUrl)
    setGender(user.gender)
  },[user])

  return (
    <div className="flex items-stretch justify-center gap-5 mt-10">
      <ProfileForm
        userData={{
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
        }}
        userId={user._id}
      />
      <ProfileCard
        userData={{
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          about
        }}
      />
    </div>
  );
};

export default Profile;
