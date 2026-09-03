const { Router } = require("express");
const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", (req, res) => res.send(`Book ${req.params.bookId}`));

module.exports = bookRouter;
