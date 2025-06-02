import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchConnections } from "./connectionsService";
import ConnectionCard from "./ConnectionCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  useEffect(() => {
    handleFetchConnections(dispatch);
  }, []);

  return (
    <div>
      <h1 className="m-5 text-2xl">Connections</h1>
      <div className="m-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {connections.map((connection) => {
          return (
            <ConnectionCard key={connection._id} connection={connection} />
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
