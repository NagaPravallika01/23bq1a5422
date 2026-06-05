const express = require("express");
const logger = require("../logging_middleware");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3000);