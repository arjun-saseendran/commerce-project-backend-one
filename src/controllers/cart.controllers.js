import { Cart } from "../models/cart.models.js";

const renderCartItems = async (req, res) => {
  const user = req.user;
  const cartItems = await Cart.find({ user: user._id }).populate("product");
  console.log(cartItems);
  res.status(200).json( {cartItems} );
};

const updateCartQuantity = async (req, res) => {
  const quantity = req.body.quantity;
  const cartItemId = req.body.cartItemId;
  if (quantity > 0) {
    const cartItem = await Cart.findById(cartItemId);
    cartItem.quantity = quantity;
    cartItem
      .save()
      .then((cart) => res.status(200).json({ cartItem: cart }))
      .catch((error) =>
        res.status(400).json({ message: "Bad request", error })
      );
  } else {
    Cart.findOneAndDelete({ _id: cartItemId })
      .then(() => res.status(200).json({ message: "Deleted successfully" }))
      .catch(() => {
        res.status(400).json({ message: "Bad request" });
      });
  }
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

export { renderCartItems, addToCart, updateCartQuantity };
