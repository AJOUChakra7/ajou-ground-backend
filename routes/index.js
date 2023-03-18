const express = require("express");
const reservationRoute = require("./reservation.route");

const router = express.Router();
const routes = [
  {
    path: "/reservation",
    route: reservationRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
