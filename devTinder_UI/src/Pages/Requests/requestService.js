import axios from "axios";
import { setLoading } from "../../utils/slices/loadingSlice";
import { baseUrl } from "../../utils/constants";
import { addRequests, removeUserRequest } from "../../utils/slices/requestSlice";

export const handleFetchConnectionRequests = async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.get(baseUrl + "/user/requests", {
      withCredentials: true,
    });
    dispatch(addRequests(res?.data?.data || []));
  } catch (error) {
    console.error("Something went wrong: ", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const handleReviewConnection = async (status, dispatch, requestId,setMessage) => {
  dispatch(setLoading(true));
  
  try {
    const res = await axios.post(baseUrl+`/request/review/${status}/${requestId}`, {}, {withCredentials:true})
    setMessage(res.data.message)
    dispatch(removeUserRequest(requestId))
  } catch (error) {
    console.error("Something went wrong: ", error);
  } finally {
    dispatch(setLoading(false));
    setTimeout(() => {
        setMessage("")
    }, 3000);
  }
};
