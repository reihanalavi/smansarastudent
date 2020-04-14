module.exports = (app) => {
    const students = require('../controllers/student.controller.js');

    //CREATE METHOD
    app.post('/students', students.insertStudent);

    //READ METHOD
    app.get('/students', students.getStudents);
    app.get('/students/:studentId', students.getStudent);

    //UPDATE METHOD
    app.put('/students/:studentId', students.updateStudent);

    //DELETE METHOD
    app.delete('/students/:studentId', students.deleteStudent);

}