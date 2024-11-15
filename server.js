/* Loading express library */
const express = require('express')
const request = require('request');

/* Creating express object */
const app = express()

/* Defining port for the application */
const port = process.env.VCAP_APP_PORT || 5000

/* refining route*/
app.get('/test', (req,res)=> {
	console.log("How are you")
	console.log(req.query.user)
	res.send("Hellooooo"+req.query.test1)
})

app.get('/weather', (req,res)=>{
	
var options = {
  'method': 'GET',
  'url': 'http://api.openweathermap.org/geo/1.0/direct?q=Kolkata&appid=edeb59f8c37b3b3eff159d9e4d9f6e19',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

})

app.listen(port, ()=>{

console.log(' Server is running on port 5000')
})

console.log("Welcome ZAPYard");