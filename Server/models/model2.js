const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    adhar: Number,
    pancard: String,
    mobile: Number

})


const Userkyc = new mongoose.model("KYC_Details", userSchema)

module.exports = Userkyc