
const ConnectionCard = ({ connection }) => {
  const { firstName, lastName, age, photoUrl,about } = connection;
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
      </div>
    </div>
  );
};

export default ConnectionCard;
