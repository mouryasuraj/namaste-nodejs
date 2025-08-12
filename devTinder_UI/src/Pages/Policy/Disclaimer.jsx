import React from "react";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl px-3 py-2 mt-5 mb-8 bg-gray-200 w-fit rounded-2xl text-gray-800">
        Disclaimer
      </h1>
      <div className="max-w-[50%] space-y-5">
        <p className="text-xl font-light">
          Developer Tinder is a networking platform intended to help developers
          connect, collaborate, and share opportunities.
        </p>
        <p className="text-xl font-light">
          We do not verify the identity, skills, or background of our users
          beyond the information provided on their profiles.
        </p>
        <p className="text-xl font-light">
          We are not responsible for any agreements, collaborations, or disputes
          between users. Use discretion when interacting with other members.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
