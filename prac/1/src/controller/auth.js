import User from "../models/user.js";
import { validateSignUpData } from "../utils/validation.js";

export const handleSignUp = async (req, res) => {
  try {
    validateSignUpData(req);

    const { firstName, lastName, email, password, gender, photoUrl } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      gender,
      photoUrl,
    });

    await newUser.save()
    res.json({message:"User Created Successfully"})

  } catch (error) {
    console.log("Something went wrong", error);
    res.status(400).json({ message: "Something went wrong" });
  }
};
