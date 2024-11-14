import { Cart } from "../models/cart.models.js";

const renderCartItems = async (req, res) => {
  const user = req.user;
  const cartItem = await Cart.find({ user: user._id }).populate("product");
  console.log(cartItem);
  res.status(200).json({ cartItem });
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
