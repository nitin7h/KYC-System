const mongoose = require("mongoose")



function database(url) {
    mongoose.connect(url).then(() => {
        console.log("Database connected successfully...");
    }).catch((err) => {
        console.log("Database connection failed : ", err);
    })
}

module.exports = database