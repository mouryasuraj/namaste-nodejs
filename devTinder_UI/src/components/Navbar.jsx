import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constants";
import { removeUser } from "../utils/slices/userSlice";
import { removeFeed } from "../utils/slices/feedSlice";
import Loader from "./Loader";
import { setLoading } from "../utils/slices/loadingSlice";

const Navbar = () => {
  const { user, loading } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(setLoading(true));
    try {
      const res = await axios.post(
        baseUrl + "/auth/logout",
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        dispatch(removeUser());
        dispatch(removeFeed());
        navigate("/login");
      }
    } catch (error) {
      console.log("Something went wrong: ", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="cursor-pointer font-semibold text-xl">
            Developer Tinder
          </Link>
        </div>
        <div className="indicator mr-10">
          <span className="indicator-item badge badge-error">12</span>
          <Link to="/requests" className="btn btn-accent">Requests</Link>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <p>Welcome, {user && user.firstName}</p>
          </div>
          <div className="dropdown dropdown-end mr-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Profile Picture" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Navbar;
