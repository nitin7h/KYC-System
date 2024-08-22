const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  
  otp: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 120, 
    
    
  },
})


const UserOtp = new mongoose.model("OTP", userSchema)

module.exports = UserOtp