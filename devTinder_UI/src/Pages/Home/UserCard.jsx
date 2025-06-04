import { useDispatch } from "react-redux";
import { handleSendRequest } from "./homeService";

const UserCard = ({ user }) => {
  const { _id, photoUrl, firstName, lastName, age, gender, about } = user;
  const dispatch = useDispatch()


  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure className="p-3">
        <img src={photoUrl} alt="Shoes" className="h-[200px] rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{age + ", " + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              handleSendRequest(dispatch, _id, "ignored")
            }}
            className="btn btn-primary"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              handleSendRequest(dispatch, _id, "interested")
            }}
            className="btn btn-secondary"
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
