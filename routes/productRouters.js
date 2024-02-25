import express from "express";
import { RequireSignin, isAdmin } from "../middlewares/authoMiddlerware.js";
import { createProductController } from "../controller/productController.js";
import ExpressFormidable from "express-formidable";

const router = express.Router();

//routers

router.post('/create-product',RequireSignin,isAdmin,ExpressFormidable(),createProductController);



export default router