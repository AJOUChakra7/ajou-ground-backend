const express = require('express');
const config = require('./lib/util/config');
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

app.listen(config.PORT, () => {
    console.log(`Listening on port ${config.port} ${config.dbUrl}`);
});