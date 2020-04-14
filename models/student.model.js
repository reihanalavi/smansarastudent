const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String,
    nis: String,
    classroom: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', StudentSchema);