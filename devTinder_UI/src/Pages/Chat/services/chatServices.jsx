import axios from "axios"
import { baseUrl } from "../../../utils/constants"

export const getAllChat = async (userId, toUserId) =>{
    try {
        const res = await axios.post(baseUrl+"/chat/getallchat",{userId, toUserId}, {withCredentials:true})
        
    } catch (error) {
        console.error("Someting went wrong: ",error)
    }
}