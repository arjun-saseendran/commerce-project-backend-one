import { Product } from "../models/product.models.js";

const renderProducts = async (req, res) => {
  const products = await Product.find();
  if (products) {
    res.status(200).send(products);
  } else {
    res.status(404).send("Not found");
  }
};

const addProduct = (req, res) => {
  const { title, price, discount, stock } = req.body;
  const product = {
    image: `product_images/${req.file.filename}`,
    title,
    price,
    discount,
    stock,
    admin: req.admin._id,
  };
  const newProduct = new Product(product);
  newProduct.save().then((response) => {
    console.log(response);
    res.status(201).json({ message: "Product added succfully" });
  });
};

const viewProductDetails = async (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .exec()
    .then((product) => {
      if (product) {
        res.status(200).json({ product });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "Product not found" });
    });
};

export { renderProducts, addProduct, viewProductDetails };
