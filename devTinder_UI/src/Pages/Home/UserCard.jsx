const UserCard = ({ user, setCurrentUser, totalFeed }) => {
  const { photoUrl, firstName, lastName, age, gender, about } = user;

  console.log("adfadsfasd", firstName, lastName);

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
              setCurrentUser((prev) => prev + 1);
            }}
            className="btn btn-primary"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              setCurrentUser((prev) => prev + 1);
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
