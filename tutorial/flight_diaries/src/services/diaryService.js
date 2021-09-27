"use strict";
exports.__esModule = true;
var diaries_1 = require("../../data/diaries");
var getEntries = function () {
    return diaries_1["default"];
};
var getNonSensitiveEntries = function () {
    return diaries_1["default"].map(function (_a) {
        var id = _a.id, date = _a.date, weather = _a.weather, visibility = _a.visibility;
        return ({
            id: id,
            date: date,
            weather: weather,
            visibility: visibility
        });
    });
};
var addDiary = function () {
    return [];
};
exports["default"] = {
    getEntries: getEntries,
    getNonSensitiveEntries: getNonSensitiveEntries,
    addDiary: addDiary
};
