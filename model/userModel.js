import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    uName:{
        type:String,
        required:true
    },
    uEmail:{
        type:String,
        trim:true,
        required:true,
        unique:true
       


    },
    uCell:{
        type:String,
        required:true
    },
    uAge: { type: Number,
        required:true
        
    }
},{
    timestamps:true
});
const User = mongoose.model("User", userSchema);
export default User;