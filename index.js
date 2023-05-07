const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http); 
const port = 3000

app.use(express.static(__dirname + "/public"));

http.listen(port, () => {
    console.log(`Server on port ${port}`);
})

