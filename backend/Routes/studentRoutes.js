import express from 'express';
import { Student } from '../models/Students.js';
const router = express.Router();


// GET /profile
router.get('/', async (req, res) => {
    try {
        const students = await Student.find({});

        return res.status(200).json({
            count: students.length,
            data: students,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// POST /profile
router.post('/', async (req, res) => {
    // Logic for creating a new profile
    try {
        if (
            !req.body.name ||
            !req.body.rollNo ||
            !req.body.password ||
            !req.body.email
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newStudent = {
            name: req.body.name,
            rollNo: req.body.rollNo,
            password: req.body.password,
            email: req.body.email,
            year: req.body.year,
        };

        const student = await Student.create(newStudent);

        return res.status(201).send(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// PUT /profile/:id
router.put('/:id', (req, res) => {
    // Logic for updating a profile
});

// DELETE /profile/:id
router.delete('/:id', (req, res) => {
    // Logic for deleting a profile
});

export default router; // Export the router
