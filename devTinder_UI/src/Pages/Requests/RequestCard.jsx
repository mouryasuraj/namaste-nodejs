import { useDispatch } from "react-redux";
import { handleReviewConnection } from "./requestService";

const RequestCard = ({ request, requestId,setMessage }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, age, photoUrl, about } = request;

  return (
    <div className="flex gap-3 items-center bg-base-300 p-3 rounded-xl">
      <div>
        <img
          src={photoUrl}
          className="w-25 h-25 rounded-lg bg-center bg-cover bg-no-repeat"
          alt={firstName + " " + lastName + " Profile"}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">
          {firstName + " " + lastName}, {age && age}
        </h2>
        <p className="text-sm">{about}</p>
        <div className="space-x-3">
          <button
            onClick={() =>
              handleReviewConnection("rejected", dispatch, requestId,setMessage)
            }
            className="btn btn-error"
          >
            Reject
          </button>
          <button
            onClick={() =>
              handleReviewConnection("accepted", dispatch, requestId,setMessage)
            }
            className="btn btn-success"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
