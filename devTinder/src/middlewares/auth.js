const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authAdmin = (req, res, next) => {
  console.log("Authenticating admin......", req.headers);

  const token = req.headers.token;
  const isAdminValid = token === "suraj";
  if (!isAdminValid) {
    res.status(401).send("Unauthorized. Token is not valid");
  } else {
    next();
  }
};

const userAuth = async (req, res, next) => {
  try {
    //Check token is present or not
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please login");
    }

    console.log("bulli", token);
    

    //validate token
    const decodedData = jwt.verify(token, process.env.SECRETKEY);
    if (!decodedData) {
      throw new Error("Token is invalid");
    }
    const { email } = decodedData;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};

module.exports = {
  authAdmin,
  userAuth,
};
