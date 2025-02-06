function handleJSONRequest(req, res, callback) {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
    if (body.length > 1e6) {
      res.writeHead(413, { 'Content-Type': "text/plain" });
      res.end("Payload too large");
      req.connection.end();
    }
  });

  req.on("end", () => {
    try {
      const parsedData = JSON.parse(body);
      callback(parsedData);
    } catch {
      res.writeHead(400, { 'Content-Type': "text/plain" });
      res.end('Invalid JSON format');
    }
  });
}

module.exports = handleJSONRequest;
