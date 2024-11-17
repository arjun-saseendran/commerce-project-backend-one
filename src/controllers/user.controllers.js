import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const signup = async (req, res) => {
  const { password } = req.body;
  bcrypt.hash(password, process.env.SALT, (err, hash) => {
    if (hash) {
      const newUser = new User(req.body);

      newUser.password = hash;
      newUser
        .save()
        .then((resUser) => {
          console.log(resUser);

          res.status(201).json({ message: "Signup succefull" });
        })
        .catch((error) => {
          console.log(error);

          res.status(400).json({ message: "Something went wrong" });
        });
    } else {
      res.status(400).json({ message: "Somethig went wrong" });
    }
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((loginUser) => {
      if (loginUser) {
        bcrypt.compare(password, loginUser.password, (err, success) => {
          if (success) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET_USER);
            res.status(200).json({ token });
          } else {
            res.status(400).json({ message: "Invalid credentials" });
          }
        });
      } else {
        res.status(404).json({ message: "Invalid email id" });
      }
    })
    .catch((error) => res.status(400).json({ message: "Invalid credentials" }));
};

const checkAdmin = (req, res) => {
  console.log('Admin');
  res.status('Success')
  
}

export { signup, login, checkAdmin };
