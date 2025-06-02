import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { setLoading } from "../../utils/slices/loadingSlice";
import { addConnections } from "../../utils/slices/connectionSlice";

export const handleFetchConnections = async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const res = await axios.get(baseUrl + "/user/connections", {withCredentials:true});
    dispatch(addConnections(res.data.data))
  } catch (error) {
    console.log("Something went wrong: ", error);
  } finally {
    dispatch(setLoading(false));
  }
};
