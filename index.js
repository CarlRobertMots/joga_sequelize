const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true }))

//connect to db
require("dotenv").config()
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

//test db connection
    sequelize
    .authenticate()
    .then(() => {
        console.log("Database connected...")
    })
    .catch(err => {
        console.log("Error: " + err)
    })

const articleRouter = require("./routes/article")
app.use("/", articleRouter)
app.use("/article", articleRouter)

const authorRouter = require("./routes/author")
app.use("/", authorRouter)
app.use("/authors", authorRouter)


app.listen(3028, () => {
    console.log("Server is running on http://localhost:3028")
} )