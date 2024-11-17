import Product from "../models/product.models.js";

const addProduct = (req, res) => {
  const { title, price, discount, stock } = req.body;
  const product = {
    image: `product_images/${req.file.filename}`,
    title,
    price,
    discount,
    stock,
  };
  const newProduct = new Product(product);
  newProduct.save().then((response) => {
    console.log(response);
    res.status(201).json({ message: "Product added succfully" });
  });
};

export { addProduct };
