import axios from "axios"
import { baseUrl } from "../../../utils/constants"

export const getAllChat = async (userId, toUserId,setMessages) =>{
    try {
        const res = await axios.post(baseUrl+"/chat/getallchat",{userId, toUserId}, {withCredentials:true})
        if(res.data){
            setMessages(res?.data?.data)
        }
    } catch (error) {
        console.error("Someting went wrong: ",error)
    }
}