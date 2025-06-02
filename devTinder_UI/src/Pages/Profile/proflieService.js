import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { setLoading } from "../../utils/slices/loadingSlice";

export const handleUpdateProfile = async (payload, userId, setToastMsg,dispatch, addUser) => {
  dispatch(setLoading(true))
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
    dispatch(setLoading(false))
    setTimeout(() => {
      setToastMsg("");
    }, 3000);
  }
};
