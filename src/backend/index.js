const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url === "/" || req.url.includes('tafel')) {
    res.setHeader("Content-Type", "text/plain");
    res.write("Hello worlsd");
    res.end();
}
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})