import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constants";
import { removeUser } from "../utils/slices/userSlice";
import { clearFeed } from "../utils/slices/feedSlice";
import Loader from "./Loader";
import { setLoading } from "../utils/slices/loadingSlice";
import { removeConnections } from "../utils/slices/connectionSlice";
import { clearRequests } from "../utils/slices/requestSlice";

const Navbar = () => {
  const { user, loading, requests } = useSelector((store) => store);
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
        dispatch(clearFeed());
        dispatch(removeConnections());
        dispatch(clearRequests());
        navigate("/login");
      }
    } catch (error) {
      console.log("Something went wrong: ", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="w-full">
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to="/home" className="cursor-pointer font-semibold text-xl">
            Developer Tinder
          </Link>
        </div>
        {user ? (
          <div className="flex">
            <div className="indicator mr-10">
              <Link to="/home/requests" className="btn btn-accent">
                Connection Requests
              </Link>
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
                    <Link to="/home/profile" className="justify-between">
                      😎 Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/home/connections">🤼 Connections</Link>
                  </li>
                  <li>
                    <Link to="/home/premium">👑 Premium</Link>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      ⏩ Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn border-2 border-white hover:bg-gray-800"
          >
            Login/SigUp
          </Link>
        )}
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Navbar;
