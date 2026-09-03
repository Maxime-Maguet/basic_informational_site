const db = require("../db");

async function getAuthorById(req, res) {
  const { authorId } = req.params;
  try {
    const author = await db.findAuthorById(Number(authorId));
    if (!author) {
      return res.status(404).send("Author not found");
    }
    res.send(`Author Name: ${author.name}`);
  } catch (error) {
    console.error("Error finding author by id: ", error);
    res.status(500).send("Internal server error");
  }
}

module.exports = { getAuthorById };
