//Import libs
const express = require('express');

//Assign port
const PORT = 3000;

//Create instance of express app
const app = express();

//Routing
app.use(express.static(__dirname + '/public'));

app.get('/number', (req,res)=>{
    res.status(200);
    res.type('text/html');
    res.send(`<img src="${randNum()}">`);
})

app.listen(PORT, ()=> {
    console.info(`Application started on port ${PORT} at ${new Date()}`);
})

function randNum() {
    var randImg = Math.floor(Math.random()*31);
    var imgName = "/images/number" + randImg + ".jpg";
    console.log(imgName);
    return imgName;
    
}