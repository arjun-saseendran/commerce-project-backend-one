import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";

const salt = 10;

const signup = async (req, res) => {
  bcrypt.hash(req.body.password, salt, (err, hash) => {
    if (hash) {
      const user = new User(req.body);
      user.password = hash;
      user
        .save()
        .then((user) => {
          console.log(user);

          res.status(201).json({ message: "Signup succefull" });
        })
        .catch((error) =>
          res.status(400).json({ message: "Something went wrong" })
        );
    } else {
      res.status(400).json({ message: "Somethig went wrong" });
    }
  });
};

export { signup };
