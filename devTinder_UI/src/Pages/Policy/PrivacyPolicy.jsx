import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl px-3 py-2 mt-5 mb-8 bg-gray-200 w-fit rounded-2xl text-gray-800">
        Privacy Policy
      </h1>
      <div className="max-w-[50%] space-y-5">
        <p className="text-xl font-light">
          Developer Tinder respects your privacy and is committed to protecting
          your personal information.
        </p>
        <p className="text-xl font-light">
          We collect basic user information such as name, email, and profile
          details for the purpose of enabling developer networking and improving
          user experience.
        </p>
        <p className="text-xl font-light">
          We do not sell or share your data with third parties, except as
          required by law or to process payments through trusted partners like
          Razorpay.
        </p>
        <p className="text-xl font-light">
          All payment transactions are handled securely, and we do not store
          your credit/debit card or banking details.
        </p>
        <p className="text-xl font-light">
          If you have any concerns about privacy, please contact us at {" "}
          <Link className="font-bold hover:underline" to="mailto:mouryasuraj6266444@gmail.com">
            mouryasuraj6266444@gmail.com
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
