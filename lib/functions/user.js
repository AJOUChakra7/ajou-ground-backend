const User = require('../models/User');

module.exports = {
    async createUser({ email, name, studentNumber }) {
        return await User.create({ email, name, studentNumber });
    },
}