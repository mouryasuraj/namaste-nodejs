import { useDispatch, useSelector } from "react-redux";
import { handlePayment } from "./services/premiumServices";
import { useEffect } from "react";


const Premium = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()

  const silverMemPrice = 500000;
  const goldMemPrice = 700000;


  return (
    user.isPremium ? <p>You have already a premium</p> :
      <div className="flex w-[70%] mx-auto flex-col lg:flex-row my-20" >
        <div className="card bg-base-300 rounded-box grid grow px-10 py-2">
          <h1 className="font-bold text-xl my-3">
            Silver Membership 💎 - {silverMemPrice / 100} INR
          </h1>
          <ul>
            <li>✅ Unlock Chat Feature</li>
            <li>✅ Show verfied badge</li>
            <li>✅ 3 Months</li>
            <li>✅ 100 Connection Request Per Day</li>
          </ul>
          <button
            onClick={() => {
              handlePayment("silver", silverMemPrice, dispatch);
            }}
            className="btn btn-primary w-fit my-3 px-10"
          >
            Buy
          </button>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid grow px-10 py-2">
          <h1 className="font-bold text-xl my-3">
            Gold Membership 👑 - {goldMemPrice / 100} INR
          </h1>
          <ul>
            <li>✅ Unlock Chat Feature</li>
            <li>✅ Show verfied badge</li>
            <li>✅ 6 Months</li>
            <li>✅ Unlimited Connection Request Per Day</li>
          </ul>
          <button
            onClick={() => {
              handlePayment("gold", goldMemPrice, dispatch);
            }}
            className="btn btn-primary w-fit my-3 px-10"
          >
            Buy
          </button>
        </div>
      </div >
  );
};

export default Premium;
