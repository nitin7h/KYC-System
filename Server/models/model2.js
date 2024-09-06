const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    adhar: String,
    pancard: String,
    mobile: String

})


const Userkyc = new mongoose.model("KYC_Details", userSchema)

module.exports = Userkyc