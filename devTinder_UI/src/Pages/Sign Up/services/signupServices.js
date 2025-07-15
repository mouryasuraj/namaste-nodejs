import axios from "axios";
import { setLoading } from "../../../utils/slices/loadingSlice";
import { baseUrl } from "../../../utils/constants";
import { addUser } from "../../../utils/slices/userSlice";

export const handleSignUp = async (
  dispatch,
  navigate,
  firstName,
  lastName,
  age,
  photoUrl,
  gender,
  email,
  password
) => {
  const payload = {
    navigate,
    firstName,
    lastName,
    age,
    photoUrl,
    gender,
    email,
    password
  };
  dispatch(setLoading(true));
  try {
    const res = await axios.post(`${baseUrl}/auth/signup`, payload, {withCredentials:true})
    dispatch(addUser(res.data.user))
    navigate("/home/profile")
    
  } catch (error) {
    console.log("Something went wrong: ", error);
  } finally {
    dispatch(setLoading(false));
  }
};
