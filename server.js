const http = require("http");
const PORT = 3000;
const customerRoutes = require('./routes/customers');
const routes = {
  ...customerRoutes
};

const server = http.createServer((req, res) => {
  const { url, method } = req;
  const routeHandler = routes[method]?.[url];

  if (routeHandler) {
    routeHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found!');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
