const express = require('express');
const router = express.Router();
const Student = require('../models/student.model.js');

//CREATE
router.post('/lookupstudents', (req, res) => {
    const student = new Student({
        name: req.body.name,
        nis: req.body.nis,
        classroom: req.body.classroom
    });

    student.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({
            message: err
        });
    });
});

// READ ALL
router.get('/lookupstudents', async(req, res) => {
    try {
        const student = await Student.find()
        res.json(student)
        } catch(err) {
        res.json({
            message: err
        });
    }
});

// READ BY ID
router.get('/lookupstudentid', async(req, res) => {
    try {
        const student = await Student.find({_id: req.query._id})
        res.json(student)
        } catch(err) {
        res.json({
            message: err
        });
    }
});

//READ BY NAME
router.get('/lookupstudentname', async(req, res) => {
    try {
        const student = await Student.find({name: req.query.name})
        res.json(student)
        } catch(err) {
        res.json({
            message: err
        });
    }
});

//READ BY NIS
router.get('/lookupstudentnis', async(req, res) => {
    try {
        const student = await Student.find({nis: req.query.nis})
        res.json(student)
        } catch(err) {
        res.json({
            message: err
        });
    }
});

//READ BY CLASS
router.get('/lookupstudentclass', async(req, res) => {
    try {
        const student = await Student.find({classroom: req.query.classroom})
        res.json(student)
        } catch(err) {
        res.json({
            message: err
        });
    }
});

//DELETE
router.delete('/lookupstudents', async(req, res) => {
    try {
        const student = await Student.remove({_id: req.query._id})
        res.json(student)
        } catch(err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;