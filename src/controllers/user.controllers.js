import { User } from "../models/user.models";

const signup = async (req, res) => {
  const newUser = new User(req.body)
    .then((response) => {
      newUser.save();
      res.status(201).send("Signup successful");
    })
    .catch((error) => res.status(400).send("Something went wrong ", error));
};

export { signup };
