const { Router } = require("express");
const { findOneUserByEmail } = require("../lib/functions/user");
const { createReservation } = require("../lib/functions/reservation");
const { findOneGroundByName } = require("../lib/functions/ground");
const { catchAsync } = require("../lib/utils");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

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
