//Node.js is asynchronous event driven java runtime environment
//designed to buld scalable network application
//functions are processed in background without blocking any other request
//Nodejs is not a language. it is a framework in javascript runtime environment

//import express package to make the application server
const express = require('express')

//instanciating the express module
const app = express()
//in which port server will run.
const port = process.env.VCAP_APP_PORT || 5000
//create api with Route (hello)
//req - http://.../hello?user=Vivek
app.get ('/hello', (req, res) => {
  console.log ("how are you!")
  console.log(req.query.user)
  res.send("hello"+' '+req.query.user)
})

app.get ('/weather', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'GET',
  'url': 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=ec4dc5c5068c754c385ada439e6762fd',
  'headers': {
    }
  };
  request(options, function (error, response) {
      if (error) throw new Error(error); 
      console.log(response.body);
  });
})

app.listen(port, () => {
  console.log('Server is running on port 5000')
})
console.log('Welcome Vivek')