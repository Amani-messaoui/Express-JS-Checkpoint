const express = require ('express');
const datetime = require('node-datetime');
var dt = datetime.create(new Date());
var jour = dt.format("W");
var hour = dt.format("H:M");

const app = express();
app.use(express.static(__dirname + '/public'))
app.use(dateError= (req,res,next)=>{
    if (hour < "17:00" && hour > "09:00") {
        if (jour != "sunday" && jour != "saturday") {
            res.sendFile(__dirname + "/public/home.html");   
               
        } else {
            res.sendFile(__dirname + "/public/errpage.html");
        }
      }
  next()    
  
})



app.listen(5000 , (err)=>{
    if (err)
      throw (err)
    else console.log('the server is running')
})