const postModel = require("../models/postModel");

exports.uploadPostController = async (req, res) => {

    try {
        const { postLink } = req.body;
        const userID = req.params;

        if (!postLink) {
            return {
                success: false,
                message: "Please provide all required fields",
            };
        }
        const newPost = new postModel({

        })
    } catch (err) {
        return {
            success: false,
            error: err?.message,
            message: "failed to upload post",
        };
    }

}
exports.deletePostController = async (req, res) => {

}