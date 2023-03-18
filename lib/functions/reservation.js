const Reservation = require('../models/reservation');

module.exports = {
    async createReservation({ startTime, user, ground }) {
        return await Reservation.create({ startTime, user, ground });
    }, 
}