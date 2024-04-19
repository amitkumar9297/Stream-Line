const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = new mongoose.Schema({
    dp: {
        type: String
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Please Enter Your full name"]
    },
    eMail: {
        type: String,
        required: [true, "please enter your e-mail"],
        unique: [true, "email-id already exist, please check it"],
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid user")
            }
        }
    },
    additionalEmail: {
        type: String,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid E-Mail please check it")
            }
        }
    },
    phoneNo: {
        type: Number,
        required: [true, "ph.no is requires please enter it"],
        unique: false,
        minlength: 10,
        maxlength: 10
    },
    password: {
        type: String,
        required: [true, "please enter the password"]
    },
    otpCode: { type: Number },
    verify: { type: Boolean, default: false },
    jorner: { type: String, trim: true },
    socialLink: [{
        type: String
    }]

},
    { timestamps: true }
);

const userModel = new mongoose.model("User", userSchema, "User")

module.exports = userModel;