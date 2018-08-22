const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors')

const {mongoose} = require('./api/db/mongoose');
const routes = require('./api/routes');

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/api',routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));