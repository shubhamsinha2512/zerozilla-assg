const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide user's name"]
    },
    email:{
        type:String,
        required:[true, "Please provide valid email"]
    },
    password:{
        type:String,
        required:[true, "Please provide passowrd"]
    }
},
{
    timestamps: true
}
)

const User = mongoose.model('User', UserSchema);

module.exports = User;