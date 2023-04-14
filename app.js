const http = require('http');
const fs = require('fs');
const dir = './Public/';
// Import the modules for reading the files and all
const port = process.env.port | 3000;
//Declare  the Port =Constant

const server = http.createServer((req, res) => {
    // Create Server 

    if (req.url === '/') {
        render(res, 'index.html');

    } else if (req.url === '/about') {
        render(res, 'about.html');

    } else if (req.url === '/contact') {
        render(res, 'contact.html');

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1> 404 File Not Found </h1>')

    }
    //Routing part CONDITIONS 11-24

}).listen(port, () => {
    console.log(`http://localhost:${port}`)
})
//  Port Configuration

const render = (res, file) => {
    fs.readFile(dir + file, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1> 404 File Not Found </h1>')

        }
        res.writeHead(200, { 'Content-Tye': 'text/html' });
        return res.end(data);
    });
}
// Server Closing Functions Upside