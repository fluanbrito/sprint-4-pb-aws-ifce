const express = require("express")
const router = express.Router()

router.get('/',(req,res) => {
    res.send("Este é o app do grupo 3 😎")
})

module.exports = router