import http from 'http';

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'text/plain'
});
const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' },
];

res.end(JSON.stringify(todos));

}).listen(3000, '0.0.0.0');
console.log('Server running at http://localhost:3000');