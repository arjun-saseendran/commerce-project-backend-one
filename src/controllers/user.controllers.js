import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";

const salt = 10;

const signup = async (req, res) => {
  bcrypt.hash(req.body.user.password, salt, (err, hash) => {
    if (hash) {
      const newUser = new User(req.body.user);
      console.log(newUser);

      newUser.password = hash;
      newUser
        .save()
        .then((resUser) => {
          console.log(resUser);

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
