const mongoose = require("mongoose");
const validator = require("validator");

const postSchema = new mongoose.Schema({
    postLink: [{
        type: String,
    }],
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "userId is required"]
    },
    views: {
        type: Number,
    }
}, { timestamps: true });


const postModel = new mongoose.model("Post", postSchema, "Post");

module.exports = postModel;