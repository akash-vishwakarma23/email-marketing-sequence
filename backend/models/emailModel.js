const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({

    email: {
        type: String,
        require: true,
    },
    subject: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    scheduledTime: {
        type: Date,
        require: true
    }
})

module.exports = mongoose.model("Email", EmailSchema);