import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'A user must have a name']},
    email: { type: String, required: [true, 'A user must have an email'], unique: true},
    password: { type: String, required: [true, 'A user must have a password'], minlength: 8},
    role: {type: String, enum:[ 'user', 'admin', 'moderator'], default: 'user'}
})

const User = mongoose.model('User', userSchema)

export { User }