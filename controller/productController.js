import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs";

export const createProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields; // contains non-file fields
    const { photo } = req.files;

    //validetion
    switch (true) {
      case !name:
        return res.status(500).send({
          error: "Name is Required",
        });
      case !description:
        return res.status(500).send({
          error: "Description is Required",
        });
      case !price:
        return res.status(500).send({
          error: "Price is Required",
        });
      case !category:
        return res.status(500).send({
          error: "Category is Required",
        });
      case !quantity:
        return res.status(500).send({
          error: "Quantity is Required",
        });
      case !photo && photo.size > 1000000:
        return res.status(500).send({
          error: "Photo is Required and should be less then 1mb",
        });
    }

    const products = new productModel({...req.fields,slug:slugify(name)});
    if(photo){
        products.photo.data =fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
        success:true,
        message:"Product Create Successfully",
        products,
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating product",
    });
  }
};


//Get Product controller

export const getProductController = async (req,res) =>
{
  try {

    const products = await productModel.find({}).populate("category").select("-photo").limit(12).sort({createAt:-1});
    res.status(200).send({
      success:true,
      total_Products:products.length,
      message:"All Products",
      products,
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Error in getting product",
      error:error.message
    })
  }

}

// get single product
export const getSingleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Single Product Fetched",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single product",
      error,
    });
  }
};
