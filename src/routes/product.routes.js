import express from "express";
import {
  renderProducts,
  viewProductDetails,
  addProduct
} from "../controllers/product.controllers.js";
import multer from "multer";
import { authAdmin } from "../middlewares/auth.middlewares.js";

const storage = multer.diskStorage({
  destination: (req, file,  cb)=>{
    cb(null, ('src/public/product_images/'))
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+file.originalname)
  }
})

const upload = multer({storage: storage})

const router = express.Router();

router.get("/", renderProducts);
router.post('/', authAdmin, upload.single('file'), addProduct)
router.get("/details/:id", viewProductDetails);

export default router;
