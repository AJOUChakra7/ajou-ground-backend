require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.MONGODB_URI
}