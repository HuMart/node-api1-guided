// import express 
const express = require('express');

const Hubs = require('./data/hubs-model.js'); // our Hubs database Library
 
const server = express();

// middleware: teaches express new thiings
server.use(express.json()); // needed to parse json

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

server.post('/api/hubs', (req, res) => {
    const hubData = req.body;
    // never trust the client, validate data.
    Hubs.add(hubData)
        .then(hub => {
        res.status(201).json(hub);
    })
        .catch(error => {
            console.log(error);
            // handle error
            res.status(500).json({errorMessage: "sorry, we run into an error posting the new data of hubs"})
    })
})

// delete a hub

server.delete('/api/hubs/:id', (req, res) => {
    const id = req.params.id;

    Hubs.remove(id)
        .then(deleted => {
            // res.status(204).end();
            res.status(200).json(deleted);
        })
            .catch(error => {
                console.log(error);
                // handle error
                res.status(500).json({errorMessage: "sorry, we run into an error removing data of hubs"})
        })

})

// update a hub

const port = 8000;
server.listen(port, () => console.log(`\n *** api on port: ${port} ***\n`));

// type: npm i express to install express library;
// to run the server type: "npm run server" in the folder;
//to solve sqlite3 errors just do "npm i sqlite3"