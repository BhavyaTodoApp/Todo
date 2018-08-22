const mongoose = require('mongoose');
const {Task,Validate} = require('../db/models/task');
const {saveTask,getTask,updateTask } = require('../services/task');

const getAllTask = async(req,res) => {
    try {
      const task = await getTask();
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json(error);
    }
 }
 
 const addTask = async(req,res) => {
    const { error } = Validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
   
    try {
        const task = await saveTask(req.body);
        return res.status(200).json(task);
      } catch (error) {
        return res.status(500).json(error);
      }
 }

 const updateTasks = async(req,res) => {
    // your method logic 
    const { error } = Validate(req.body);
    if (error) return res.status(400).send(error.details[0].message); 
    console.log(req.params.tasksId);
    try {
      const task = await updateTask(req.params.tasksId,req.body);
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json(error);
    }
 }
 
 
 module.exports = {
    getAllTask, 
    addTask,
    updateTasks
 };