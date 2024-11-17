import mongoose, {Schema} from "mongoose";

const adminSchema = new Schema({
    adminname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
})

export const Admin = mongoose.model('Admin', adminSchema)