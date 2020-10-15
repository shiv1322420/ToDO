const mongoose = require('mongoose');

const taskSchema=mongoose.Schema({
name:{type:String,required: true},
description:{type:String,required: true},                         
status:{type:String,default:'uncomplete',required: true},
creationDate:{type:Date,default:Date.now},
completetionDate:{type:Date, default:null}
},
{
    timestamps:true   //it is used  to add automatically add two new fields - createdAt and updatedAt to the schema.
});

module.exports=mongoose.model('task_register',taskSchema)
