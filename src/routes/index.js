const express = require("express")
const router = express.Router();

// routes

router.get("/", (req, res) => {

    //res.sendFile(path.join(__dirname, "views/index.html"));
    res.render("index.ejs", { tittle: "First website"});

});

router.get("/contact", (req, res) => {

    //res.sendFile(path.join(__dirname, "views/index.html"));
    res.render("contact.ejs", { tittle: "Contact page"});

});

module.exports = router;