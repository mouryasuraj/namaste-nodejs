import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import Loader from "../../components/Loader";
import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { addFeed } from "../../utils/slices/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(0);

  const getAllFeed = async () => {
    try {
      const res = await axios.get(baseUrl + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    if (!feed) {
      getAllFeed();
    }
  }, []);

  if (!feed) {
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-center mt-24">
      {currentUser < feed.length ? (
        <UserCard
          user={feed[currentUser]}
          setCurrentUser={setCurrentUser}
          totalFeed={feed.length}
        />
      ) : (
        <p>No user to show</p>
      )}
    </div>
  );
};

export default Feed;
