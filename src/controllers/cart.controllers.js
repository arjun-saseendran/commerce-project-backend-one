import { Cart } from "../models/cart.models.js";

const renderCartItems = (req, res) => {
  res.send("All cart items");
};

const addToCart = async (req, res) => {
  const { product, quantity } = req.body;
  const cartItem = new Cart({ user: req.user._id, product, quantity });
  await cartItem
    .save()
    .then((cart) => {
      res.json(cart);

      console.log(cart);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
};

export { renderCartItems, addToCart };
