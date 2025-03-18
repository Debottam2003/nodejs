const express = require('express');
const app = express();
app.use(function (req, res, next) {
    console.log("middleware");
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res, next) {
    let i = 1;
    if (i === 0) {
        return next(new Error("Not implemented"));
    }
    else {
        return res.send("Hi I am Debottam Kar.");
    }
});
app.get("/express3", function (req, res) {
    return res.send("hello express3");
});
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    return res.status(500).send("something went wrong");
});
app.listen(3003, () => {
    console.log("Running...");
});