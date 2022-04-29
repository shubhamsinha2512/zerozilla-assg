const Agency = require("../models/AgencyModel")
const Client = require("../models/ClientModal")
const AppError = require("../utils/appError")
const catchAsync = require("../utils/catchAsync")

const ClientController = require('./ClientController')

exports.createAgency = catchAsync(async (req, res, next) => {
    if(req.body){
        let newAgency = await Agency.create(req.body);

        res.status(200).json({
            status:'success',
            data:{
                agency: newAgency
            }
        })
    }
    else{
        new AppError("Please provide the agency details")

        next()
    }
})


exports.getAllAgency = catchAsync(async (req, res, next) => {

    let topClients = await Agency.find().select('-__v -createdAt -updatedAt')

    if(topClients){
        res.status(200).json({
            status:'success',
            data:{
                topClients:topClients
            }
        })
    }
    else{
        new AppError("Cannot retrive the topClients!");
        next()
    }

})

exports.getTopClients = catchAsync(async (req, res, next) => {

    let topClients = await Client.find().sort('-totalBill').select('name totalBill')
    topClients = topClients.map(c => {
        return {
            agencyName: c.agency.name,
            clientName : c.name,
            totalBill : c.totalBill,
        }
    })

    if(topClients){
        res.status(200).json({
            status:'success',
            data:{
                topClients:topClients
            }
        })
    }
    else{
        new AppError("Cannot retrive the top topClients!");
        next()
    }

})

exports.createAgencyAndClient = catchAsync(async (req, res, next) => {
    if(req.body){

        let {clients, ... agencyBody} = req.body;

        //creating new agency
        let newAgency = await Agency.create(agencyBody);

        //modifying the req.body to contain on clients which needs to be created for this agency 
        clients = clients.map(c => {
            return {
                agency : newAgency._id,
                ...c
            }
        })

        let newClients = await Client.insertMany(clients);
        newAgency.clients = newClients

        res.status(200).json({
            status:'success',
            data:{
                agency: newAgency,
            }
        })

    }
    else{
        new AppError("Please provide the agency details")

        next()
    }
})