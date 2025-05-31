import axios from "axios";
import { baseUrl } from "../../utils/constants";

export const handleUpdateProfile = async (payload, userId, setToastMsg,dispatch, addUser) => {
  try {
    const res = await axios.put(baseUrl + `/profile/edit/${userId}`, payload, {
      withCredentials: true,
    });
    setToastMsg(res.data.message);
    dispatch(addUser(res.data.updatedData))
  } catch (error) {
    console.log("Something went wrong: ", error);
    setToastMsg("Something went wrong");
  } finally {
    setTimeout(() => {
      setToastMsg("");
    }, 3000);
  }
};
