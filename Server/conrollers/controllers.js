const { generateToken } = require("../verification/jwt")
const User = require("../models/model")
const Userkyc = require("../models/model2")
const bcrypt = require('bcryptjs');
const CryptoJS = require('crypto-js');
const home = (req, res) => {
    res.status(200).send("Hi from Server")
}

const signup = async(req, res) => {

    const { name, email, password } = req.body

    try {
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(200).send({ message: "User allready Exist with this Email" })
        } else {

            const hashedPassword = await bcrypt.hash(password, 10);
            const userData = new User({
                name: name,
                email: email,
                password: hashedPassword
            })

            userData.save()

            res.status(200).json({ message: "Data Saved Succesfully" })
        }
    } catch (error) {
        console.log("Technical Error in Database : ", error);
    }



}

const login = async(req, res) => {
    const { email, password } = req.body


    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send({ message: "Wrong Email" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        // console.log("isMatch : ",isMatch);


        if (!isMatch) {
            return res.send({ message: "Wrong Password" });
        }

        const token = generateToken(user);

        return res.send({ message: "Login Successfully", token });

    } catch (error) {
        console.log("Technical error in login : ", error);

    }



}





const mainPage = (req, res) => {
    res.status(200).json("getting data")
}


const secretKey = "Nitin@1234"
    // Encryption function
const encrypt = (text) => {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
};

// Decryption function
const decrypt = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};






const getDataFromDb = async(req, res) => {


    const { adhar } = req.body
        // console.log("**** : ", req.body);
        // console.log("**** : ", adhar);

    /*  
    now match this email and password in database*/

    try {

        const userMatched = await Userkyc.findOne({ adhar })

        if (userMatched) {

            const kycDataDb = userMatched

            const namekycDataDb = decrypt(kycDataDb.name)
            const pancardkycDataDb = decrypt(kycDataDb.pancard)
            const mobilekycDataDb = decrypt(kycDataDb.mobile)


            const kycData = {
                    name: namekycDataDb,
                    pancard: pancardkycDataDb,
                    mobile: mobilekycDataDb,
                    email: kycDataDb.email,
                    adhar: kycDataDb.adhar,
                }
                // console.log(" 99999999999999999999 : ", kycData.name);


            return res.send({ message: "Data fetched Succesfully", kycData })

        } else {
            res.send({ message: "No record Found" })
        }

    } catch (error) {
        console.log("Technical error in login : ", error);

    }





    // res.status(200).json("Getting data")

}
const postDataOnDb = async(req, res) => {
    const { name, email, adhar, pancard, mobile } = req.body

    try {
        const userExist = await Userkyc.findOne({ email })
        if (userExist) {
            return res.status(200).send({ message: "User allready Exist with this Email" })
        } else {
            const userData = new Userkyc({
                name: encrypt(name),
                email: email,
                adhar: adhar,
                pancard: encrypt(pancard),
                mobile: encrypt(mobile)

            })

            userData.save()

            res.status(200).json({ message: "Data Saved Succesfully" })
        }
    } catch (error) {
        console.log("Technical Error in Database : ", error);
    }


    // res.status(200).json("Posting data")
}




















module.exports = { home, signup, login, mainPage, getDataFromDb, postDataOnDb }