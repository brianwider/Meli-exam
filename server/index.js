const express = require("express");
const bodyParser = require("body-parser");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const webpackOptions = require("../webpack.config.js");
const compiler = webpack(webpackOptions);
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(middleware(compiler, {}));

require("./api/routes")(app, {});

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`));