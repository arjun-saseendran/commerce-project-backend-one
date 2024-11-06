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
  const newProduct = new Product(req.body.product);
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

const viewProductDetails = (req, res) => {
  const { id } = req.params;

  const product = new Product.findById(id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("Something went wrong");
  }
};

export { renderProducts, addProduct, viewProductDetails };
