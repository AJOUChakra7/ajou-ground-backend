const mongoose = require("mongoose");

module.exports = {
  async makeConnectionToMongo({ url }) {
    mongoose.Promise = global.Promise;
    mongoose.connect(url);
    mongoose.connection.on(
      "error",
      console.error.bind(console, "> Mongoose connection error")
    );
    mongoose.connection.on("open", function () {
      console.log("> Connected to database");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("> Disconnected from database");
    });
  },
};
