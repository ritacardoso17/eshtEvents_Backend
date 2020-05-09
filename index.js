const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/userRouter")
const extraRouter = require("./routes/extraRouter")
const uniformRouter = require("./routes/uniformRouter")
const componentRouter = require("./routes/compenentRouter")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(userRouter)
app.use(extraRouter)
app.use(uniformRouter)
app.use(componentRouter)

app.listen(3000, function () {
    console.log('Server running at http://localhost:3000/%27');
});