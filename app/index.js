// Dependencies
const http = require("http");
const { URL } = require("url");

// Listen to all requests with a string
const server = http.createServer((req, res) => {
  // Get the url and parse it
  const parsedUrl = new URL(req.url, "http://localhost");

  // Get the path
  const pathname = parsedUrl.pathname.replace(/^\/+|\/+$/g, "");

  // Get the HTTP Method
  const method = req.method.toLowerCase();

  // Send the response
  res.end("Hello World!\n");

  // Log
  console.log("pathname, method:", pathname, method);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`);
});
