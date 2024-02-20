import express from "express";
import { RequireSignin, isAdmin } from './../middlewares/authoMiddlerware.js';
import { createCategoryController } from "../controller/categoryController.js";


const router = express.Router();

//Routers

router.post("/create-category",RequireSignin,isAdmin,createCategoryController);


export default router;