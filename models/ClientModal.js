
const mongoose = require('mongoose');


const ClientSchema = mongoose.Schema({
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
        path: 'agency',
        select: '-__v -createdAt -updatedAt -clients'
    })

    next()
})


const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;