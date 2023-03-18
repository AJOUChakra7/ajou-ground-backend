const express = require('express');
const config = require('./lib/utils/config');
const routes = require("./routes");
const { makeConnectionToMongo } = require("./lib/utils/dbConnect");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

app.listen(config.port, () => {
    makeConnectionToMongo({ url: config.dbUrl });
    console.log(`Listening on port ${config.port} ${config.dbUrl}`);
});