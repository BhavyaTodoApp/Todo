const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task').then(() => console.log('Connected…'))
.catch(err => console.error('Connection failed…'));

module.exports={mongoose};