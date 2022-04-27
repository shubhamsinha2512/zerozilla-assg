const mongoose = require('mongoose');


const AgencySchema = mongoose.Schema({
    agencyId:{
        type: mongoose.Types.ObjectId(),
    },
    name:{
        type:String,
        required:[true, "Please provide agency name"]
    },
    address_1:{
        type:String,
        required:[true, "Please provide address 1"]
    },
    address_2:{
        type:String,
    },
    state:{
        type:String,
        required:[true, "Please provide state name"]
    },
    city:{
        type:String,
        required:[true, "Please provide city name"]
    },
    phone:{
        type:Number,
        required:[true, "Please provide phone number"]
    },
    clients:[
        {
            type: mongoose.Types.ObjectId
        }
    ]
},
{
    timestamps: true
}
)

const Agency = mongoose.model('Agency', AgencySchema);

module.exports = Agency;
