const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const extraRouter = require("./routes/extraRouter")
const uniformRouter = require("./routes/uniformRouter")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(extraRouter)
app.use(uniformRouter)
app.listen(3000, function () {
    console.log('Server running at http://localhost:3000/%27');
});