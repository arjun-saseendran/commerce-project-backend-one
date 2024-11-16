import { Product } from "../models/product.models.js";

const renderProducts = async (req, res) => {
  const products = await Product.find();
  if (products) {
    res.status(200).send(products);
  } else {
    res.status(404).send("Not found");
  }
};

const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  console.log(newProduct);

  await newProduct
    .save()
    .then((product) => {
      res.status(201).send(product);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

const viewProductDetails = async (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .exec()
    .then((product) => {
      if (product) {
        res.status(200).json({product});
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "Product not found" });
    });
};

export { renderProducts, addProduct, viewProductDetails };
