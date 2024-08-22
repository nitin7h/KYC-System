const express = require("express")
const { home, signup, login, mainPage, getDataFromDb, postDataOnDb } = require("../conrollers/controllers")
const { verifyToken } = require("../verification/jwt")

const { sendEmailOTP, verifyEmailOTP } = require("../conrollers/verifyotp")
const router = express.Router()

router.get("/", home)
router.post("/signup", signup)
router.post("/login", login)
router.get("/mainPage", verifyToken, mainPage)

router.post("/getDataFromDb", getDataFromDb)
router.post("/postDataOnDb", postDataOnDb)


router.post("/sendOtp", sendEmailOTP)
router.post("/verifyOtp", verifyEmailOTP)

module.exports = router