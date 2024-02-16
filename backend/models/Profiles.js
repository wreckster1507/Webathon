import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
    },
    Degrees: {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false

    }
}
);

export const Profile = mongoose.model('Profile', profileSchema);