const colors = require('colors')
const dotenv = require('dotenv').config()
const http = require('http')


// get env file value
const PORT = process.env.SERVER_PORT || 6060



// server create 
http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'})
    console.log(req.url);
   if(req.url == '/'){
    res.write(`<h1  style="color:blue;">This is Home Page</h1>`)
   }
   if(req.url == '/about'){
    res.write(`<h1>This is about Page</h1>`)
   }
   if(req.url == '/contace'){
    res.write(`<h1>This is contace Page</h1>`)
   }
   if(req.url == '/gallary'){
    res.write(`<h1>This is gallary Page</h1>`)
   }

    res.end()
}).listen(PORT, () => {
    console.log(`server is raning on port ${PORT}`.bgMagenta.black);
})