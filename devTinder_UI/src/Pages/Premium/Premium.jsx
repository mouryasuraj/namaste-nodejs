import React from "react";

const Premium = () => {
  return (
    <div className="flex w-[70%] mx-auto flex-col lg:flex-row my-20">
      <div className="card bg-base-300 rounded-box grid grow px-10 py-2">
        <h1 className="font-bold text-xl my-3">Silver Membership 💎</h1>
        <ul>
            <li>✅ Unlock Chat Feature</li>
            <li>✅ Show verfied badge</li>
            <li>✅ 3 Months</li>
            <li>✅ 100 Connection Request Per Day</li>
        </ul>
        <button className="btn btn-primary w-fit my-3 px-10">Buy</button>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="card bg-base-300 rounded-box grid grow px-10 py-2">
        <h1 className="font-bold text-xl my-3">Gold Membership 👑</h1>
        <ul>
            <li>✅ Unlock Chat Feature</li>
            <li>✅ Show verfied badge</li>
            <li>✅ 6 Months</li>
            <li>✅ Unlimited Connection Request Per Day</li>
        </ul>
        <button className="btn btn-primary w-fit my-3 px-10">Buy</button>
      </div>
    </div>
  );
};

export default Premium;
