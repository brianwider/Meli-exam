const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/api/items", (req, res) => {
    res.send({ express: req.query.search });
});

app.get("/api/items/:id", (req, res) => {
    res.send({ express: req.params.id });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
