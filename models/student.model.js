const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nis: {
        type: String,
        required: true
    },
    classroom: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Student', StudentSchema);