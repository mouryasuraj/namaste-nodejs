import React from "react";
import { Link } from "react-router-dom";

const ReturnPolicy = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl px-3 py-2 mt-5 mb-8 bg-gray-200 w-fit rounded-2xl text-gray-800">
        Return Policy
      </h1>
      <div className="max-w-[50%] space-y-5">
        <p className="text-xl font-light">
          Thank you for using Developer Tinder.
        </p>
        <p className="text-xl font-light">
          As this is a digital platform for connecting developers, we do not offer returns for services once they have been provided.
        </p>
        <p className="text-xl font-light">
          If you experience any issues with our platform or believe there has been an error in the service, please contact us at <Link className="font-bold hover:underline" to="mailto:mouryasuraj6266444@gmail.com" >mouryasuraj6266444@gmail.com</Link> within 7 days, and we will review your case and provide a suitable resolution.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
