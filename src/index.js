const express = require("express")
const path = require("path")

const app = express()

//setings

app.set("port", 3000)
app.set("views", __dirname, "views")
app.set("view engine", "ejs")

// middlewares

// routes

app.use(require("./routes/index"))

// static files

//listening the server

app.listen(app.get("port"), () =>{
    console.log("server on port", app.get("port"))
})