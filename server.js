const express = require('express');
const cors = require('cors');

const tasks_route = require('./routes/tasks');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/tasks', tasks_route);


app.get('/', (req, res) => {
    res.status(200).json({ msg: 'server is running' });
});

app.listen(1111, () => {
    console.log('server is running');
});