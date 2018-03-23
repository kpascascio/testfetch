
const express = require('express');
const app = express();

app.use( express.static(__dirname + '/public'));

app.get('/', (req, res)=>  {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3002, function(){
	console.log(`app is running on $3002`);
})

//Challenge go to postman, create a new user, then login with that user