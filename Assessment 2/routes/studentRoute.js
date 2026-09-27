const express = require("express");
const router = express.Router();

const students = require("../data/students");

router.get("/", (req, res) => {
    res.status(200).json(students);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
});

router.post("/", (req, res) => {
    const { name, age, course, email } = req.body;

    if (!name || !age || !course || !email) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const newStudent = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name,
        age,
        course,
        email
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, age, course, email } = req.body;

    if (!name || !age || !course || !email) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    students[studentIndex] = {
        id,
        name,
        age,
        course,
        email
    };

    res.status(200).json({
        message: "Student updated successfully",
        student: students[studentIndex]
    });
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(studentIndex, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});

module.exports = router;