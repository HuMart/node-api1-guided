// import express 
const express = require('express');

const Hubs = require('./data/hubs-model.js'); // our Hubs database Library
 
const server = express();

// routes or endpoints
// Get to "/"

server.get('/', function(request, response) {
    response.send({hello: 'World!!'});
});
// see a list of hub
server.get('/api/hubs', (req, res) => {
    // read the data from the database
    Hubs.find() // return a promise
        .then(hubs => {
            console.log('Hubs', hubs);
            res.status(200).json(hubs);
        })
        .catch(error => {
            console.log(error);
            // handle error
            res.status(500).json({errorMessage: "sorry, you run into an error getting the list of hubs"})
        })
})
// create a hub

// delete a hub

// update a hub
const port = 8000;
server.listen(port, () => console.log(`\n *** api on port: ${port} ***\n`));

// type: npm i express to install express library;
// to run the server type: "npm run server" in the folder;
//to solve sqlite3 errors just do "npm i sqlite3"