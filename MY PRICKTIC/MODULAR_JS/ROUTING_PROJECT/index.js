const http = require('http');
const colors = require('colors');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();


// env file value get
const PORT = process.env.SERVER_PORT || 6060



http.createServer((req,res) => {


    if(req.url == '/'){
        
        const homepage = fs.readFileSync(path.join(__dirname,'public/index.html'))
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(homepage)
      
    }


    res.end()

}).listen(PORT, () => {
    console.log(`server is raning on port ${PORT}`.bgGreen.black);
})