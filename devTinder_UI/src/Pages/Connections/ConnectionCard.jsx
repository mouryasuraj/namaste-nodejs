import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addCurrChatUser } from '../../utils/slices/currentChatUserSlice';

const ConnectionCard = ({ connection }) => {
  const { firstName, lastName, age, photoUrl, about, _id } = connection;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGoToChat = () => {
    
    dispatch(addCurrChatUser(connection))
    navigate(`/home/chat/${_id}`)
  }

  return (
    <div className="flex gap-3 bg-base-300 p-3 rounded-xl">
      <div>
        <img
          src={photoUrl}
          className="w-20 h-20 rounded-lg bg-center bg-cover bg-no-repeat"
          alt={firstName + " " + lastName + " Profile"}
        />
      </div>
      <div>
        <h2 className="font-bold">{firstName + " " + lastName}, {age && age}</h2>
        <p className="text-sm">{about}</p>
        <div className="flex justify-end">
          <p onClick={() => {
            handleGoToChat()
          }}>
            <button className="btn btn-primary">💬 Chat</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
