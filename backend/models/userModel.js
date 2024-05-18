import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePhoto:{
        type: String,
        default: '',
        require:true
    },
    gender:{
        type: String,
        enum:['male', 'female'],
        require: true
    }
},{timestamps: true})

export const User = mongoose.model('User', userSchema);