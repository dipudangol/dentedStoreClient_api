import express from 'express';
// import { newCategoryValidation, updateCategoryValidation } from '../middlewares/joi-validation/joiValidation.js';
import { deleteCategoryById, getAllCategory, getCategoryById, hasChildCategoryById, insertCategory, updateCategoryById } from '../models/category/categoryModel.js';
import slugify from "slugify";
const router = express.Router();

//get categories
router.get("/:_id?", async (req, res, next) => {
    try {
        const { _id } = req.params;
        const categories = _id
            ? await getCategoryById(_id)
            : await getAllCategory();

        res.json({
            status: "success",
            message: "category list",
            categories,
        });
    } catch (error) {
        error.status = 500
        next(error)
    }
})



export default router;