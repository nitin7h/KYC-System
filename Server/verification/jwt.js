const jwt = require("jsonwebtoken")

const generateToken = (payload) => {
    const token = jwt.sign({
        _id: payload._id,
        email: payload.email
    }, "Nitin@2001")

    return token
}


const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"]

    try {
        if (token) {

            const jwtToken = token.split(' ')[1]
            jwt.verify(jwtToken, "Nitin@2001")

            next()

        } else {
            console.log("Token not provided");
        }
    } catch (error) {

    }
}

module.exports = { generateToken, verifyToken }