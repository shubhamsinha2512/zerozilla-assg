
const mongoose = require('mongoose');


const ClientSchema = mongoose.Schema({
    clientId:{
        type: mongoose.Types.ObjectId()
    },
    agencyId:{
        type:mongoose.Types.ObjectId,
        required:[true, 'Please provide agency id']
    },
    name:{
        type:String,
        required:[true, "Please provide client's name"]
    },
    email:{
        type:String,
        required:[true, "Please provide agency name"]
    },
    phone:{
        type:Number,
        required:true
    },
    totalBill:{
        type:Number,
        required:[true, "Please provide total number of bills"]
    }
},
{
    timestamps: true
}
)

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;