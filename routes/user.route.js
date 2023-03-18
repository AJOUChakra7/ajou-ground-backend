const { Router } = require('express');
const { findReservationByUser } = require('../lib/functions/reservation');
const { findOneUserByEmail } = require('../lib/functions/user');
const { catchAsync } = require('../lib/utils')

const router = Router();

router.get('/', catchAsync(async (req, res) => {
    const user = await findOneUserByEmail("test@ajou.ac.kr");
    const reservations = await findReservationByUser(user);

    res.json({ user, reservations })
}));

module.exports = router;