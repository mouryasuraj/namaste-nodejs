import axios from "axios";
import { baseUrl } from "../../../utils/constants";
import { setLoading } from "../../../utils/slices/loadingSlice";
import { addUser } from "../../../utils/slices/userSlice";

const verifyPremium = async (dispatch) =>{
    try {
        const paymentRes = await axios.get(baseUrl + "/user/premium/verfiy")
        dispatch(addUser(paymentRes.data.user))
    } catch (error) {
        console.log("Somehthing went wrong: ", error)
    }
}

export const handlePayment = async (memeberShipType, amount, dispatch) => {
  dispatch(setLoading(true));
  try {
    const paymentRes = await axios.post(
      baseUrl + `/payment/createOrder?type=${memeberShipType}`,
      {},
      { withCredentials: true }
    );

    const {amount,currency,notes,orderId} = paymentRes.data?.order

    const options = {
      key: "rzp_test_R7flF27lPwszb6", // Replace with your Razorpay key_id
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: "Developer Tinder",
      description: "Connect to developer across the world",
      order_id: orderId, // This is the order_id created in the backend
    //   callback_url: "http://localhost:3000/payment-success", // Your success URL
      prefill: {
        name: notes.firstName+" "+notes.lastName,
        email: "",
        contact: "",
      },
      theme: {
        color: "#0346CD",
      },
      handler:()=>{
        verifyPremium(dispatch)
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.log("Something went wrong: ", error);
  } finally {
    dispatch(setLoading(false));
  }
};

