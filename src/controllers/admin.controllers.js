import { Admin } from "../models/admin.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const salt = 10;

const signup = async (req, res) => {
  const { password } = req.body;
  bcrypt.hash(password, salt, (err, hash) => {
    if (hash) {
      const newAdmin = new Admin(req.body);

      newAdmin.password = hash;
      newAdmin
        .save()
        .then((admin) => {
          console.log(admin);

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
    .then((loginAdmin) => {
      if (loginAdmin) {
        bcrypt.compare(password, loginUser.password, (err, success) => {
          if (success) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET);
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

export { signup, login };
