const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.get("/fetchcategory", async (req, res) => {
    try {
      const category = await Category.find();
      res.json(category);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
});

router.post(
  "/addcategory",
  async (req, res) => {
    

    try {

        const { category } = req.body;
      
      // create a category
      const note = new Category({
        category
      });

      const saveNote = await note.save();
      res.json(saveNote);
      
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error Occured");
    }
  }
);


module.exports = router;
