const express = require("express")
const router = require("./routes/routes")
const cors = require("cors")
const database = require("./database/connection")
require('dotenv').config()
const port = process.env.PORT

const app = express()


//Plugin Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//Database connection
const url = process.env.URL
database(url)


//Routes
app.use("/", router)



app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port} `);
})