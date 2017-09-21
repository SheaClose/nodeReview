const express = require('express');
const { json } = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
const ctrl = require('./ctrl');

app.use(cors());
app.use(json());

app.get('/api/people', ctrl.getPeople);
app.put('/api/people/:id', ctrl.editPerson);

app.listen(port, function() {
  console.log(`This is Dr Crane... I'm listening at ${port}`);
});
