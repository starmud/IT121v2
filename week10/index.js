// import http from 'http';
// http.createServer((req,res) => {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Aloha world');
// }).listen(process.env.PORT || 3000); 

/* import http from 'http';
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Welcome to my home page!');
  } else if (req.url === '/about') {
    res.writeHead(200);
    res.end('About: David - Aspiring web developer.');
  } else {
    res.writeHead(404);
    res.end('404 Page Not Found');
  }
}); */

//server.listen(PORT, () => {
//  console.log(`Server http://localhost:${PORT}`);
// });

import http from 'http';
import fs from 'fs';
http.createServer((req,res) => {
    let path = req.url.toLowerCase();
    switch(path) {
        case '/':
            fs.readFile("home.html", (err, data) => {
             if (err) return console.error(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
             res.end(data.toString());
            });
            break;
        case '/about':
            fs.readFile("about.html", (err, data) => {
                if (err) return console.error(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString());
            });
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 - You didnt say the magic word');
            break;
    }
}).listen(process.env.PORT || 3000);