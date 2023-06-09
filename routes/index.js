const express = require("express");
const reservationRoute = require("./reservation.route");
const userRoute = require('./user.route')

const router = express.Router();
const routes = [
  {
    path: "/reservation",
    route: reservationRoute,
  },
  {
    path: '/user',
    route: userRoute
  }
];


routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
