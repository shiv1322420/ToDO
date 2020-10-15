'use strict';

let model = require('../models/taskSchema');

//Insert new task in DB
let createTask = (objToSave)=> {
	return new Promise((resolve, reject)=>{
		new model(objToSave).save((err,result)=>{			
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};

// get tasks from DB
let getAllTaskList = function () {
	return new Promise((resolve, reject)=>{
		model.find((err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};

//update task detail in db

let updateTask = function (id,updateDetail) {
	return new Promise((resolve, reject)=>{
		model.findByIdAndUpdate(id,updateDetail, (err,result)=>{
			if(err)
			reject (err)
		else
			resolve (result)
		});
	})
};

//remove task from db

let deleteTask = function (id) {
	return new Promise((resolve, reject)=>{
		console.log(id);
		model.deleteOne({_id:id},(err,result)=>{
			if(err)
			reject (err)
		else
			resolve (result)
		});
	})
};

//get list of uncompleted tasks
let getUncompeleted = function (projection) {
	return new Promise((resolve, reject)=>{
        console.log("in services projetion "+projection)
		model.find({status:projection}, (err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};


//mark a task as complete and update in database
let markCompleteTask = function (id,updateStatus,completionTime) {
	return new Promise((resolve, reject)=>{
		model.findByIdAndUpdate({_id:id},{status:updateStatus,completetionDate:completionTime}, (err,result)=>{
			if(err)
			reject (err)
		else{
			resolve (result)
		}
			
		});
	})
};


module.exports={
createTask,
updateTask,
deleteTask,
getUncompeleted,
markCompleteTask,
getAllTaskList
}