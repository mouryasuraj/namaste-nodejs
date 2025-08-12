import React from "react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl px-3 py-2 mt-5 mb-8 bg-gray-200 w-fit rounded-2xl text-gray-800">
        Refund Policy
      </h1>
      <div className="max-w-[50%] space-y-5">
        <p className="text-xl font-light">
          At Developer Tinder, customer satisfaction is important to us.
        </p>
        <p className="text-xl font-light">
          If you have made a payment for any premium feature and face a
          technical issue or an unintended charge, you may request a refund by
          emailing{" "}
          <Link className="font-bold hover:underline" to="mailto:mouryasuraj6266444@gmail.com">
            mouryasuraj6266444@gmail.com
          </Link>{" "}
          within 7 days of the transaction.
        </p>
        <p className="text-xl font-light">
          Refunds will be issued only in cases of genuine error or technical failure. If approved, refunds will be processed within 5–7 working days to your original payment method.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
