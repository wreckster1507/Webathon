import express from 'express';
import { Profile } from '../models/Profiles.js';
const router = express.Router();


// GET /profile
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find({});

        return res.status(200).json({
            count: profiles.length,
            data: profiles,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// POST /profile
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.password ||
            !req.body.role
        ) {
            return res.status(400).send({
                message: 'Send all required fields: name, password, role',
            });
        }
        const newProfile = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            experience: req.body.experience,
            Degrees: req.body.Degrees,
            img: req.body.img
        };

        const profile = await Profile.create(newProfile);

        return res.status(201).send(profile);
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
