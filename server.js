const http = require("http");
const { PORT, ORIGIN } = require("./constants/globals");
const customerRoutes = require('./routes/customers');
const routes = {
  ...customerRoutes
};

const server = http.createServer((req, res) => {
  const { url, method } = req;
  const { pathname } = new URL(url, ORIGIN);
  const routeHandler = routes[method]?.[pathname];

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
