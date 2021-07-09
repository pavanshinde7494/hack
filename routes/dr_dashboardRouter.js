var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


const DoctorQueue = require('../models/doctorqueue');
const Doctor = require('../models/doctor');


const dr_dashboardRouter = express.Router();
dr_dashboardRouter.use(bodyParser.json())

dr_dashboardRouter.route('/')

.get((req,res,next)=>{
	Doctor.findById("60e6cf83b9d21110747c0aa9")
	.then((doc)=>{
		 res.render('dashboard',{doctor:doc});
	})
   
})

dr_dashboardRouter.route('/60e6cf83b9d21110747c0aa9')
.get((req,res,next)=>{
    Doctor.findById("60e6cf83b9d21110747c0aa9")
	.then((doc)=>{
		 res.render('update',{doctor:doc});
	})
})

.post((req,res,next)=>{
	Doctor.updateOne({_id: "60e6cf83b9d21110747c0aa9"}, {uername: req.body.username}, function (err) {
    if (err){
        console.log(err)
    }else{
        console.log("updates successfully") 
        res.send("updated")
    }
})
})














module.exports = dr_dashboardRouter;