import User from "../models/user.model.js";

export const signUp = (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    const createdUser = new User({ fullName, email, password });

    createdUser.save();
    res.status(200).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log("Error : ", error);
    res.status(500).json({message: " Internal Server Error"})
    
  }
};
