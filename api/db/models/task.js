const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title:  String,
  description: String,
  completed:{ type: Boolean, default:false }
});
const Task = mongoose.model('Task', taskSchema);

function Validate(task) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(5).max(50).required(),
    completed:Joi.boolean()
  };

  return Joi.validate(task, schema);
}

module.exports = {Task,Validate};