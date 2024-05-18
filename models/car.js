const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
})

const Car = mongoose.model('Car', carSchema)
module.exports = Car;