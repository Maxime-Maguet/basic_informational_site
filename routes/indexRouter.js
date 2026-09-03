const { Router } = require("express");
const indexRouter = Router();
const path = require("node:path");

indexRouter.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "index.html")),
);
indexRouter.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "about.html")),
);
indexRouter.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "contact-me.html")),
);
module.exports = indexRouter;
