
const mongoose = require('mongoose');


const ClientSchema = mongoose.Schema({
    clientId:{
        type: mongoose.Types.ObjectId()
    },
    agency:{
        type:mongoose.Schema.ObjectId,
        ref:'Agency',
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

ClientSchema.pre(/^find/, function(next){
    this.populate({
        path: 'agency'
    })

    next()
})

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;