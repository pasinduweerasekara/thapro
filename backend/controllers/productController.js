const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const mongoose = require("mongoose");

// @desc Get all products or products by category with pagination
// @route GET /api/products or /api/products/:category
// @access public
const getProductsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  const query = req.query
  
  let products;

  if(Object.keys(query).length===0){
    if (category === "all") {
      products = await Product.find();
    } else {
      products = await Product.find({ category });
    }
    if (products.length <1)
      products = await Product.find({gender:category})
  }else{
    if (category === "all") {
      products = await Product.find().skip(query.skip).limit(query.limit)
    } else {
      products = await Product.find({ category }).skip(query.skip).limit(query.limit)
    }
    if (products.length <1)
      products = await Product.find({gender:category}).skip(query.skip).limit(query.limit)
  }

  res.status(200).json(products);
});


// @desc Get single product by category and identifier (ID or slug)
// @route GET /api/products/:category/:identifier
// @access public
const getProductByIdentifier = asyncHandler(async (req, res) => {
  const { category, identifier } = req.params;

  let product;

  // Check if the identifier is a valid ObjectId
  if (mongoose.Types.ObjectId.isValid(identifier)) {
    // If valid, search by id
    product = await Product.findById(identifier);
  } else {
    // If not an ObjectId, search by slug
    product = await Product.findOne({ slug: identifier });
  }

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.status(200).json(product);
});

// @desc Create a new product
// @route POST /api/products
// @access public
const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    category,
    gender,
    price,
    material = "leather",
    colors,
    stockQuantity,
    images,
    tags,
    size,
  } = req.body;

  if (!name || stockQuantity === undefined) {
    res.status(400);
    throw new Error("Name and stock quantity are required");
  }

  const sku = generateSKU(category, colors[0]);

  const newProduct = new Product({
    name,
    description,
    category,
    gender,
    price,
    material,
    colors,
    stockQuantity,
    images,
    sku,
    tags,
    size,
  });

  const savedProduct = await newProduct.save();
  res.status(201).json(savedProduct);
});

// @desc Update a product by ID
// @route PUT /api/products/:id
// @access public
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  Object.assign(product, req.body);
  const updatedProduct = await product.save();
  res.status(200).json(updatedProduct);
});

// @desc Delete a product by ID
// @route DELETE /api/products/:id
// @access public
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Product removed" });
});

// SKU generation function
const generateSKU = (category, color) => {
  const categoryCode = category.slice(0, 3).toUpperCase();
  const colorCode = color ? color.slice(0, 3).toUpperCase() : "UNK";
  const uniqueCode = Math.floor(10000 + Math.random() * 90000);

  return `${categoryCode}-${colorCode}-${uniqueCode}`;
};

module.exports = {
  getProductsByCategory,
  getProductByIdentifier,
  createProduct,
  updateProduct,
  deleteProduct,
};
