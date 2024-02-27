import express from "express";
import { RequireSignin, isAdmin } from "../middlewares/authoMiddlerware.js";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from "../controller/productController.js";
import ExpressFormidable from "express-formidable";

const router = express.Router();

//routers

router.post('/create-product',RequireSignin,isAdmin,ExpressFormidable(),createProductController);

//get product

router.get("/get-product",getProductController);

//Single get product

router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);



//delete rproduct
router.delete("/delete-product/:pid",deleteProductController);


// update product
router.put(
    "/update-product/:pid",
    RequireSignin,
    isAdmin,
    ExpressFormidable(),
    updateProductController
  );

export default router