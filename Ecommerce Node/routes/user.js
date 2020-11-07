const express = require("express");
const router = express.Router();


const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById, getUser, updateProfile } = require("../controllers/user");



router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateProfile);




module.exports = router;