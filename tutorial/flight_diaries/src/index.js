"use strict";
exports.__esModule = true;
var express_1 = require("express");
var diaries_1 = require("./routes/diaries");
var app = express_1["default"]();
app.use(express_1["default"].json());
var PORT = 3000;
app.get('/ping', function (_req, res) {
    console.log('someone pinged here');
    res.send('pong');
});
app.use('/api/diaries', diaries_1["default"]);
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});
