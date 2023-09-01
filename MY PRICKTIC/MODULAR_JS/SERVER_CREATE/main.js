const http = require('http')
const color = require('colors')



http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write('{"userId": "ami asi","id": "1","title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"}')
    res.end()
}).listen(5050, () => {
    console.log(`server is raning on port 5050`.bgGreen.black);
})

