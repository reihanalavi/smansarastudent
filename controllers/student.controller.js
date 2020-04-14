const Student = require('../models/student.model.js');

exports.insertStudent = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "Student content cannot be empty"
        });
    }

    const student = new Student({
        name: req.body.name || "Unnamed student",
        nis: req.body.nis,
        classroom: req.body.classroom
    });

    student.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error while created student."
        });
    });

};

exports.getStudents = (req, res) => {

    Student.find()
    .then(student => {
        res.send(student);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error while retrieving student."
        })
    })

};

exports.getStudent = (req, res) => {

};

exports.updateStudent = (req, res) => {

};

exports.deleteStudent = (req, res) => {

};