const { Router } = require('express');
const { findReservationByUser } = require('../lib/functions/reservation');
const { findOneUserByEmail } = require('../lib/functions/user');
const { catchAsync, utcToKst } = require('../lib/utils')

const router = Router();

router.get('/', catchAsync(async (req, res) => {
    const user = await findOneUserByEmail("test@ajou.ac.kr");
    const reservations = await findReservationByUser(user);

    for (let element of reservations) {
        element.startTime = utcToKst(element.startTime)
    }

    res.json({
        user,
        reservations
    })
}));

module.exports = router;