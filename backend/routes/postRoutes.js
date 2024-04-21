const express = require("express");
const { uploadPostController, deletePostController } = require("../controllers/postController");


// router object 
const router = express.Router();

// uploadPost
router.get('/uploadPost', uploadPostController);

// delete Post
router.post('/deletePost', deletePostController);

module.exports = router;