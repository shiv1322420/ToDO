const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dbConnection=require('./config/databaseConnection');
const taskRoute=require('./routes/task-route');
const port = 3006;


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware for task
app.use('/task',taskRoute);


app.listen(port, () => {
    console.log(`Server is listening on : ${port}`);
});