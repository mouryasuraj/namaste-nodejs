const {
  allowedGenders,
  allowedSignUpFields,
  allowedLoginFields,
  allowedResetPasswordFields,
  allowedSendStatusType,
  allowedReviewStatusType,
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

const validateResetPassword = (req) => {
  if (!req.body) throw new Error("Request body is missing");
  const body = req.body;

  const fields = Object.keys(body);

  const invalidFields = fields.filter(
    (field) => !allowedResetPasswordFields.includes(field)
  );
  if (invalidFields.length > 0) {
    throw new Error(`Invalid Fields : ${invalidFields.join(", ")}`);
  }

  const isMissingFields = allowedResetPasswordFields.filter(
    (field) => !fields.includes(field)
  );
  if (isMissingFields.length > 0)
    throw new Error(`Missing fields : ${isMissingFields.join(", ")}`);

  const { currentPassword, newPassword, confirmPassword } = body;

  const validation = [
    { valid: currentPassword, message: "currentPassword should not be empty" },
    { valid: newPassword, message: "newPassword should not be empty" },
    { valid: confirmPassword, message: "confirmPassword should not be empty" },
    {
      valid: validator.isStrongPassword(newPassword, {
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      }),
      message: "Password is invalid",
    },
    {
      valid: newPassword === confirmPassword,
      message: "new and confirm password is not matched",
    },
  ];

  for (const check of validation) {
    if (!check.valid) {
      throw new Error(check.message);
    }
  }
};

const validateSendConnectionData = (req) => {
  const toUserId = req.params.toUserId;
  const status = req.params.status;
  if (!toUserId || !status)
    throw new Error(
      `${!toUserId ? "toUserId" : "status"} params is not present`
    );
  
    const isStatusAllowed = allowedSendStatusType.includes(status)
    if(!isStatusAllowed){
      throw new Error(`Invalid status type : ${status}`)
    }
  
};


const validateReviewRequestBody = (req) =>{

  const {status} = req.params
  const isStatusAllowed = allowedReviewStatusType.includes(status)
  if(!isStatusAllowed){
    throw new Error(`Invalid status type : ${status}`)
  }


}


module.exports = {
  validateSignUpData,
  validateLoginData,
  validateResetPassword,
  validateSendConnectionData,
  validateReviewRequestBody
};
