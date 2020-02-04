const express = require('express');
 
const server = express();

server.get('/', function(request, response) {
    response.send({hello: 'World!!'});
});

const port = 8000;
server.listen(port, () => console.log(`\n *** api on port: ${port} ***\n`));