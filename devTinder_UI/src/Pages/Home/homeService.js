import axios from "axios"
import { setLoading } from "../../utils/slices/loadingSlice"
import { baseUrl } from "../../utils/constants"
import { removeFeed } from "../../utils/slices/feedSlice"

export const handleSendRequest = async (dispatch, _id, status) =>{
    dispatch(setLoading(true))
    try {
        const res = await axios.post(`${baseUrl}/request/send/${status}/${_id}`, {}, {withCredentials:true})
        console.log("res",res.data)
        dispatch(removeFeed(_id))
    } catch (error) {
        console.log("Something went wrong: ", error)
    } finally{
        dispatch(setLoading(false))
    }
}