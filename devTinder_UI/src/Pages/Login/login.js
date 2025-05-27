import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { addUser } from "../../utils/slices/userSlice";

export const handleLogin = async (email, password, dispatch, navigate) => {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/login`,
      { email, password },
      { withCredentials: true }
    );
    console.log(response.data);
    
    dispatch(addUser(response.data.user))
    navigate("/")
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
