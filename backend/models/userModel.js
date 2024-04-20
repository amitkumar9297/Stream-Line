const mongoose = require("mongoose");
const validator = require("validator");
const sendOTP = require("../utils/sendOTP");

const userSchema = new mongoose.Schema({
    dp: {
        type: String
    },
    username: {
        type: String,
        trim: true,
        required: [true, "Please Enter Your full name"]
    },
    email: {
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
        // required: [true, "ph.no is requires please enter it"],
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

// Define pre-save middleware to generate and store a random six-digit OTP and set its expiration time
userSchema.pre('save', function (next) {
    if (this.isModified('email') || this.isNew) {
        // Generate a random six-digit OTP
        const randomOTP = Math.floor(100000 + Math.random() * 900000);

        // Set the generated OTP and its expiration time
        this.otpCode = randomOTP;
        this.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes
    }
    next();
});
userSchema.post('save', async function (doc) {
    try {
        // Send email here
        await sendOTP(doc.email, doc.otpCode);
        console.log('Email sent after user registration:', doc.email, doc.otpCode);
    } catch (error) {
        console.error('Error sending email:', error);
    }
});

const userModel = new mongoose.model("User", userSchema, "User")

module.exports = userModel;