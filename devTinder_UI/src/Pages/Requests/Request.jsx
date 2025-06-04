import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleFetchConnectionRequests } from "./requestService"
import RequestCard from "./RequestCard"
import Toastify from "../../components/Toastify"

const Request = () => {

  const dispatch = useDispatch()
  const requests = useSelector(store => store.requests)
  const [message, setMessage] = useState(false)

  useEffect(()=>{
    handleFetchConnectionRequests(dispatch)
  },[])


  return (
    <div>
      <h1 className="m-5 text-2xl">Connection Requests ({requests.length}) </h1>
      <div className="m-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {requests.length===0 ? <div>No Request found</div> : requests.map((request) => {
          return (
            <RequestCard key={request._id} setMessage={setMessage} requestId={request._id} request={request.fromUserId} />
          );
        })}
      </div>
     {message && <Toastify message={message} />}
    </div>
  )
}

export default Request