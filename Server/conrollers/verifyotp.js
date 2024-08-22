const crypto = require('crypto');
const nodemailer = require("nodemailer")
require('dotenv').config()
const UserOtp = require("../models/otpModel");

const Userkyc = require("../models/model2")
    // function home(req,res){
    //   res.send("Hi from Server")

// }
function generateOTP() {
    const otp = crypto.randomInt(100000, 999999);
    return otp.toString();
}






const sendEmailOTP = (req, res) => {


    // console.log("req.res : ",req.body.email);



    // const getEmail = "nitinkumar7h@gmail.com"
    const getEmail = req.body.email
        //  console.log("kjdkjf : ",getEmail);


    console.log("this is reciever email : ", getEmail);

    // Function to send the OTP via email
    const sendOTP = async(email) => {
        // Generate the OTP
        const otp = generateOTP();

        const myEmail = process.env.EMAIL
        const myEmailPass = process.env.EMAIL_PASS
            // Create a transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail', // You can use any email service provider
            port: 465,
            auth: {
                user: myEmail, // Your email address
                pass: myEmailPass, // Your email password (or app-specific password)
            },
        });

        // Define email options
        let mailOptions = {
            from: myEmail, // Sender address
            to: getEmail, // List of receivers
            subject: 'Your OTP Code', // Subject line
            text: `Your OTP code is ${otp}`, // Plain text body
            html: `<p>Your OTP code is <b>${otp}</b></p>`, // HTML body
        };

        // Send mail with defined transport object
        try {
            let info = await transporter.sendMail(mailOptions, (error, emailResponse) => {
                if (error) {
                    console.log("E-mail not sent : ", error);

                }
                if (emailResponse) {
                    console.log("E-Mail send Succesfully");
                    res.end()

                }
            });
            // console.log('Message sent: %s', info.messageId);

            // store OTP IN DATABASE
            const userOtp = new UserOtp({

                otp: otp

            })

            userOtp.save()

            return otp; // You can store or return the OTP to validate it later
        } catch (error) {
            console.error('Error sending OTP: ', error);
            throw error;
        }
    }





    // Example usage
    // sendOTP(getEmail)
    //   .then(otp => console.log('OTP sent successfully:', otp))
    //   .catch(error => console.error('Error:', error));



    sendOTP(getEmail)
        .then((otp) => {
            console.log('OTP sent successfully:', otp)
            res.send({ message: "OTP sent successfully" })
        })
        .catch(error => console.error('Error:', error));


}



const verifyEmailOTP = async(req, res) => {

    const { otp, adhar } = req.body // otp front end
        // console.log("##### otp : ",otp);
        // console.log("##### adhar : ",adhar);

    let otp1 = Number(otp);
    // console.log("yweh type hai : ",typeof otp1);

    //get otp from database
    try {
        const databaseOTP = await UserOtp.findOne({ otp })
        if (!databaseOTP) {
            console.log("Wrong OTP");
            res.send({ message: "Wrong OTP" })

        } else {

            const otp2 = databaseOTP.otp
            if (otp1 === otp2) {
                console.log("OTP Verified successfully...");



                try {

                    const userMatched = await Userkyc.findOne({ adhar })

                    if (userMatched) {

                        const kycData = userMatched
                            // console.log("******* : ", kycData);


                        return res.send({ message: "OTP Verified successfully...", kycData })

                    } else {
                        res.send({ message: "No record Found" })
                    }

                } catch (error) {
                    console.log("Technical error in login : ", error);

                }




                // res.send({message: "OTP Verified successfully..."})
            } else {
                console.log(" Wrong OTP");

                res.send({ message: "Wrong OTP" })
            }
        }

    } catch (error) {
        console.log(error);

    }
}


module.exports = { sendEmailOTP, verifyEmailOTP }