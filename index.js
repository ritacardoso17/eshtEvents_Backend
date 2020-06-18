const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config.json")
const userRouter = require("./routes/userRouter")
const extraRouter = require("./routes/extraRouter")
const uniformRouter = require("./routes/uniformRouter")
const componentRouter = require("./routes/componenttRouter")
const rentsRouter = require("./routes/rentsRouter")
const evenTypeRouter = require("./routes/evenTypeRouter")
const menuRouter = require("./routes/menuRouter")
const decorationRouter = require("./routes/decorationRouter")
const reservationRouter = require("./routes/reservationRouter")
const roomsRouter = require("./routes/roomsRouter")
const workshopRouter = require("./routes/workshopRouter")
const stateRouter = require("./routes/stateRouter")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:'*'}));


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use(userRouter)
app.use(extraRouter)
app.use(uniformRouter)
app.use(componentRouter)
app.use(rentsRouter)
app.use(evenTypeRouter)
app.use(menuRouter)
app.use(decorationRouter)
app.use(reservationRouter)
app.use(roomsRouter)
app.use(workshopRouter)
app.use(stateRouter)

app.listen(process.env.PORT, () => {
    console.log(config.message);
});
// app.listen(config.port, () => {
//     console.log(config.message);
// });