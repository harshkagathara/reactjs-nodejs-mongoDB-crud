let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
require('./database/db');

// Express Route
const studentRoute = require('../backend/routes/student.route')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)

// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

