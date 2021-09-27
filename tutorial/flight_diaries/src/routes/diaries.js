"use strict";
exports.__esModule = true;
var express_1 = require("express");
var diaryService_1 = require("../services/diaryService");
var router = express_1["default"].Router();
router.get('/', function (_req, res) {
    res.send(diaryService_1["default"].getNonSensitiveEntries());
});
router.post('/', function (_req, res) {
    res.send('Saving a diary!');
});
exports["default"] = router;
