import axios from "axios";
import { baseUrl } from "../../utils/constants";

export const handleLogin = async (email, password) => {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/login`,
      { email, password },
      { withCredentials: true }
    );
    console.log(response);
  } catch (error) {
    console.log("Something went wrong", error);
  }
};
