import express from "express";
import {registerController,loginController,testController} from "../controller/authController.js";
import { RequireSignin, isAdmin } from "../middlewares/authoMiddlerware.js";

//route object

const router = express.Router();

router.post('/register',registerController)

//Login || POST
router.post('/login',loginController)

//test router

router.get('/test',RequireSignin,isAdmin, testController)

//Prodtected route auth
router.get("/user-auth",RequireSignin,(req,res)=>{
    res.status(200).send({ok:true});
});

export default router;