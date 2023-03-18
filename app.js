const express = require('express');
const config = require('./lib/utils/config');
const routes = require("./routes");
const { makeConnectionToMongo } = require("./lib/utils/dbConnect");
const { errorConverter, errorHandler } = require("./lib/middleware/error");

const app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

app.use(errorConverter);
app.use(errorHandler);

app.listen(config.port, () => {
    makeConnectionToMongo({ url: config.dbUrl });
    console.log(`Listening on port ${config.port} ${config.dbUrl}`);
});