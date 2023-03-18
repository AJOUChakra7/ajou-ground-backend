const Reservation = require('../models/Reservation');

module.exports = {
    async createReservation({ startTime, user, ground }) {
        return await Reservation.create({ startTime, user, ground });
    },
    async findReservationByDate(date) {
        date = new Date(date);
        let tomorrow = new Date();

        return await Reservation.find({
            startTime: {
                $gte: date,
                $lt: tomorrow.setDate(date.getDate() + 1)
            }
        })
    },
    async findReservationByUser(user) {
        return await Reservation.find({ user }).populate('ground')
    }
}
