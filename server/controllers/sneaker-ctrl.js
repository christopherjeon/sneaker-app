const Sneaker = require('../models/sneaker-model')

createSneaker = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must prodvide a sneaker",
        })
    }

    const sneaker = new Sneaker(body)

    if (!sneaker) {
        return res.status(400).json({ success: false, error: err })
    }

    sneaker
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: sneaker._id,
                message: 'Sneaker created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Sneaker not created!',
            })
        })
}

updateSneaker = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update.',
        })
    }

    Sneaker.findOne({ _id: req.params.id }, (err, sneaker) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Sneaker not found!'
            })
        }
        sneaker.name = body.name
        sneaker.brand = body.brand
        sneaker.price = body.price
        sneaker
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: sneaker._id,
                    message: 'Sneaker updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Sneaker not updated!',
                })
            })
    })
}

deleteSneaker = async (req, res) => {
    await Sneaker.findOneAndDelete({ _id: req.params.id }, (err, sneaker) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sneaker) {
            return res
                .status(404)
                .json({ success: false, error: 'Sneaker not found' })
        }

        return res.status(200).json({ success: true, data: sneaker })
    }).catch(err => console.log(err))
}

getSneakerById = async (req, res) => {
    await Sneaker.findOne({ _id: req.params.id }, (err, sneaker) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sneaker) {
            return res
                .status(404)
                .json({ success: false, error: "Sneaker not found" })
        }
        return res.status(200).json({ success: true, data: sneaker })
    }).catch(err => console.log(err))
}

getSneakers = async (req, res) => {
    await Sneaker.find({}, (err, sneakers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!sneakers.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Sneaker not found' })
        }
        return res.status(200).json({ success: true, data: sneakers })
    }).catch(err => console.log(err))
}

module.exports = {
    createSneaker,
    updateSneaker,
    deleteSneaker,
    getSneakers,
    getSneakerById
}
