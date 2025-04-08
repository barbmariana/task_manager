const express = require('express');
const tasks = require('./server/routes/tasks');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./server/db/connect');
require('dotenv').config();

app.use(express.static('./public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));
app.use(express.json());

//Routes
app.use('/api/v1/task', tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

module.exports = app;
