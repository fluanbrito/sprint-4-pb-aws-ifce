
const axios = require("axios");
const api = axios.create({
    baseURL: "https://www.boredapi.com"
       
});

module.exports = api;