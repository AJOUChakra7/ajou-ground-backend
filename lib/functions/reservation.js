const Reservation = require('../models/Reservation');

module.exports = {
    async createReservation({ startTime, user, ground }) {
        return await Reservation.create({ startTime, user, ground });
    },
}
