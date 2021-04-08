const mongoose = require("mongoose")
const HotelsSchema = mongoose.Schema({
        roomType: String,
        price: Number,
        location: String
})
module.exports = mongoose.model("Hotels", HotelsSchema)