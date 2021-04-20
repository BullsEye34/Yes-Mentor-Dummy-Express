// This is the routes.js file!

const express = require('express');
const cors = require('cors');

// We're still in routes.js! Right below everything else.

// Starting our app.
const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors());


// Creating a GET route that returns 
app.get('/', function (req, res) {
    return res.json(
        {
            "Name": "Yeah Thats' my Name",
            "SomeOtherParam": 0xff123456,
            "NewParameter": true,
        }
    );
});



// Starting our server.
app.listen(1080, () => {
    console.log('Go to http://localhost:1080/ so you can see the data.');
});