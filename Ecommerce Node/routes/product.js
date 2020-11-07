const express = require("express");
const router = express.Router();


const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { createProduct, getProductById, getProduct, getphoto, updateProduct, deleteProduct, getAllProducts } = require("../controllers/product");


router.param("userId", getUserById);
router.param("productId", getProductById);

router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", getphoto);
router.put("/product/update/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, updateProduct);
router.delete("/product/update/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, deleteProduct);
router.get("/products", getAllProducts);

// TODO: bebug update

module.exports = router;