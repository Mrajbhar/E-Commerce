import express from "express";
import { RequireSignin, isAdmin } from "../middlewares/authoMiddlerware.js";
import { createProductController, getProductController, getSingleProductController } from "../controller/productController.js";
import ExpressFormidable from "express-formidable";

const router = express.Router();

//routers

router.post('/create-product',RequireSignin,isAdmin,ExpressFormidable(),createProductController);

//get product

router.get("/get-product",getProductController);

//Single get product

router.get("/get-product/slug",getSingleProductController);


export default router