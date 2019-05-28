//Import libs
const express = require('express');

//Assign port
const PORT = 3000;

//Create instance of express app
const app = express();

//Routing
app.use(express.static(__dirname + '/public'));

app.listen(PORT, ()=> {
    console.info(`Application started on port ${PORT} at ${new Date()}`);
})

