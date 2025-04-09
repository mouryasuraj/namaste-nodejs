const {
  allowedGenders,
  allowedSignUpFields,
  allowedLoginFields,
} = require("./constant.js");
const validator = require("validator");

//Validate Empty fields
const validateEmptyFields = (
  firstName,
  lastName,
  email,
  password,
  age,
  gender,
  photoUrl
) => {
  if (!firstName) {
    throw new Error("Please provide firstName");
  } else if (!lastName) {
    throw new Error("Please provide lastName");
  } else if (!email) {
    throw new Error("Please provide email");
  } else if (!password) {
    throw new Error("Please provide password");
  } else if (!age) {
    throw new Error("Please provide age");
  } else if (!gender) {
    throw new Error("Please provide gender");
  } else if (!photoUrl) {
    throw new Error("Please provide photoUrl");
  }
};

// Validate Signup Data
const validateSignUpData = (req) => {
  const body = req.body;
  if (!body) {
    throw new Error("Request body is missing");
  }
  const isSignUpAllowed = Object.keys(body).every((field) =>
    allowedSignUpFields.includes(field)
  );
  if (!isSignUpAllowed) {
    throw new Error("Mismatch in request body.");
  }

  const { firstName, lastName, email, password, age, gender, photoUrl } = body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !age ||
    !gender ||
    !photoUrl
  ) {
    validateEmptyFields(
      firstName,
      lastName,
      email,
      password,
      age,
      gender,
      photoUrl
    );
  } else if (!validator.isEmail(email)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong");
  } else if (age < 18 || age > 50) {
    throw new Error("Age is not valid");
  } else if (!allowedGenders.includes(gender)) {
    throw new Error("Gender is not valid");
  } else if (!validator.isURL(photoUrl)) {
    throw new Error("photoUrl is not a valid url");
  }
};

const validateLoginData = (req) => {
  const body = req.body;
  if (!body) throw new Error("Request body is missing");

  const invalidFields = Object.keys(body).filter((field) => {
    return !allowedLoginFields.includes(field);
  });
  if (invalidFields.length > 0)
    throw new Error(`Invalid Fields: ${invalidFields.join(", ")}`);

  const { email, password } = body;

  const validation = [
    { valid: !email, message: "please provide email" },
    { valid: !password, message: "please provide password" },
    { valid: !validator.isEmail(email), message: "Email is not valid" },
  ];

  for (const check of validation) {
    if (check.valid) {
      throw new Error(check.message);
    }
  }
};

module.exports = { validateSignUpData, validateLoginData };
