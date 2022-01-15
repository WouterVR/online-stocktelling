const http = require('http');
const port = 3000;

const fs = require('fs');
const indexHTML = fs.readFileSync('src/frontend/index.html');
const indexJS = fs.readFileSync('src/frontend/index.js');
const faviconPng = fs.readFileSync('src/frontend/logo.png');
const style = fs.readFileSync('src/frontend/style/style.css');


const server = http.createServer((req, res) => {
  console.log('request incomming: ' + req.url)
  res.statusCode = 200;
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(indexHTML);
    res.end();
  } 
  if (req.url === "/index.js"){    
    res.setHeader("Content-Type", "text/javascript");
    res.write(indexJS);
    res.end();
  }
  if (req.url === "/favicon.ico" || req.url === "/img/logo.png") {
    res.setHeader("Content-Type", "image/png");
    res.write(faviconPng);
    res.end();
}
  if (req.url === "/style/style.css") {
    res.setHeader("Content-Type", "text/css");
    res.write(style);
    res.end();
    console.log('style sent')
}
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})