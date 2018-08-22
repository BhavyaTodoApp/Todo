const mongoose = require('mongoose');
const {Task} = require('../db/models/task');

const saveTask = async(params)=>{
    let task = new Task({
        title: params.title,
        description: params.description,
      });
    return await task.save();
}

const getTask = async()=>{
    return await Task.find();
}

const updateTask = async(id,params)=>{
    return await Task.findByIdAndUpdate(id,{ 
        title: params.title,
        description: params.description,
        completed:params.completed
      },{new: true});
}

module.exports = {
    saveTask,
    getTask,
    updateTask
 };