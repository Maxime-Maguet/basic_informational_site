const { createServer } = require("http");
const fs = require("node:fs");
const path = require("node:path");
const port = 8080;

const server = createServer((req, res) => {
  const url = req.url;
  let fileName = "";
  let statusCode = 200;

  if (url === "/") {
    fileName = "index.html";
  } else if (url === "/about") {
    fileName = "about.html";
  } else if (url === "/contact-me") {
    fileName = "contact-me.html";
  } else {
    fileName = "404.html";
    statusCode = 404;
  }
  const filePath = path.join(__dirname, fileName);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
