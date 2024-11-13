import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const salt = 10;

const signup = async (req, res) => {
  const { password } = req.body;
  bcrypt.hash(password, salt, (err, hash) => {
    if (hash) {
      const newUser = new User(req.body);

      newUser.password = hash;
      newUser
        .save()
        .then((resUser) => {
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

const login = (req, res) => {
  const loginPassword = req.body.user.password;
  User.findOne({ email: req.body.user.email })
    .then((loginUser) => {
      if (loginUser) {
        console.log(loginUser);

        const matchPassword = loginUser.password;
        console.log(matchPassword);

        bcrypt.compare(loginPassword, matchPassword, (err, success) => {
          if (success) {
            console.log(success);

            res.status(200).json({ message: "Login success" });
          } else {
            res.status(404).json({ message: "User not found" });
          }
        });
      }
    })
    .catch((error) => res.status(400).json({ message: "Bad request" }));
};

export { signup, login };
