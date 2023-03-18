const Ground = require('../models/Ground');

module.exports = {
    async createGround({ name, introduction }) {
        return await Ground.create({ name, introduction });
    },
    async findOneGroundByName(name) {
        return await Ground.findOne({ name })
    }
}

