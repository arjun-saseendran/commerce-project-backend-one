import { Cart } from "../models/cart.models.js";

const renderCartItems = (req, res) => {
  res.send("All cart items");
};

const addToCart = async (req, res) => {
  const { user, product, quantity } = req.body;
  const cartItem = new Cart({ user: user._id, product: product._id, quantity });
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
