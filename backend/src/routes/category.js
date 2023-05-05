const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { createCategory, getCategories } = require("../controller/category");
const router = express.Router();


router.post('/category/createCategory',requireSignin, adminMiddleware, createCategory);
router.get('/category/getCategory', getCategories);


module.exports = router;