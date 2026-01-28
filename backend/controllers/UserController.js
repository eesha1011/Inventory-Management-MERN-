import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const addUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};
