import React from "react";
import { Link } from "react-router-dom";

const AboutAndContact = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl px-3 py-2 mt-5 mb-8 bg-gray-200 w-fit rounded-2xl text-gray-800">
        About Developer Tinder
      </h1>
      <p className="max-w-[50%] text-xl font-light">
        Developer Tinder is a platform designed to help developers connect,
        share ideas, and collaborate on projects. Our mission is to foster
        meaningful professional relationships within the developer community.
      </p>
      <h1 className="font-bold text-2xl px-3 py-2 mt-5 mb-8 bg-gray-200 w-fit rounded-2xl text-gray-800">
        Contact US
      </h1>

      <div className="max-w-[50%] space-y-5">
        <p className="text-xl font-bold">
          {" "}
          Email:{" "}
          <Link
            className="font-light hover:underline"
            to="mailto:mouryasuraj6266444@gmail.com"
          >
            mouryasuraj6266444@gmail.com
          </Link>{" "}
        </p>
        <p className="text-xl font-bold">
          Phone:{" "}
          <Link className="font-light hover:underline" to="tel:8356820591">
            +91-8356820591
          </Link>{" "}
        </p>
        <p className="text-xl font-bold flex gap-2">
          Address:{" "}
          <p className="font-light">
            Mumbai, Maharashtra, India
          </p>{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutAndContact;
