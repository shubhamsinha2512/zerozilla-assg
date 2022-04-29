const Client = require("../models/ClientModal")
const Agency = require("../models/AgencyModel")
const AppError = require("../utils/appError")
const catchAsync = require("../utils/catchAsync")

exports.createClient = catchAsync(async (req, res, next) => {
    if(req.body){
        let newClient = await Client.create(req.body);
        let updatedAgency = await Agency.findByIdAndUpdate(newClient.agency, {$push: {"clients":newClient._id}}, {new:true}) //add client reference to respective agency

        res.status(200).json({
            status:'success',
            data:{
                client: newClient
            }
        })
    }
    else{
        new AppError("Please provide the client details")

        next()
    }
})


exports.getAllClient = catchAsync(async (req, res, next) => {

    let clients = await Client.find().select('-__v -createdAt -updatedAt')

    if(clients){
        res.status(200).json({
            sttaus:'success',
            data:{
                clients:clients
            }
        })
    }
    else{
        new AppError("Cannot retrive the clients!");
        next()
    }

})

exports.getOneClient = catchAsync(async (req, res, next) => {

    let client = await Client.findById(req.params.clientId).select('-__v -createdAt -updatedAt')

    if(client){
        res.status(200).json({
            sttaus:'success',
            data:{
                client:client
            }
        })
    }
    else{
        new AppError(`Cannot retrive the client with client id - ${req.params.clientId}!`);
        next()
    }

})

exports.updateOneClient = catchAsync(async (req, res, next) => {

    let client = await Client.findByIdAndUpdate(req.params.clientId, req.body, {new : true}).select('-__v -createdAt -updatedAt')

    if(client){
        res.status(200).json({
            sttaus:'success',
            data:{
                client:client
            }
        })
    }
    else{
        new AppError(`Cannot update the client with client id - ${req.params.clientId}!`);
        next()
    }

})