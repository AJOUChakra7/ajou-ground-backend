const { Router } = require("express");
const { findOneUserByEmail } = require("../lib/functions/user");
const { createReservation, findReservationByDate } = require("../lib/functions/reservation");
const { findOneGroundByName } = require("../lib/functions/ground");
const { catchAsync, ApiError } = require("../lib/utils");
const httpStatus = require("http-status");
// const { groupBy } = require('../lib/utils')

const router = Router();

const groupBy = (data, createKey) => {
  return data.reduce((result, current) => {
    const key = createKey(current);
    const value = result[key];
    if (value == null) {
      result[key] = [current];
    } else {
      value.push(current);
    }
    return result;
  }, {});
}

router.get("/", catchAsync(async (req, res) => {
  const { date } = req.query

  if (!date) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Input the date")
  }

  const reservations = await findReservationByDate(date)

  res.json({ ...groupBy(reservations, ({ startTime }) => startTime.getHours() ) })
}))

router.post("/", catchAsync(async (req, res) => {
  const { startTime, ground } = req.body;

  const user = await findOneUserByEmail("test@ajou.ac.kr");
  const groundDoc = await findOneGroundByName(ground);
  console.log(user, groundDoc)

  const reservation = await createReservation({
    startTime,
    user,
    ground: groundDoc,
  });

  return res.json({ reservation });
}));

module.exports = router;
