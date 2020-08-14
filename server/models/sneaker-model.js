const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sneaker = new Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        price: { type: Number, required: true }
    },
    { timestamps: true }
)

module.exports = mongoose.model('sneakers', Sneaker)
