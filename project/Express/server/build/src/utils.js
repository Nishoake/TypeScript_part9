"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
//*
// Type Guards
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
//*
// Parsing Functions
const parseName = (name) => {
    if (!name || !isString(name)) {
        throw new Error(`Incorrect or missing name`);
    }
    return name;
};
const parseSSN = (ssn) => {
    if (!ssn || !isString(ssn)) {
        throw new Error(`Incorrect or missing SSN`);
    }
    return ssn;
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error(`Incorrect or missing date`);
    }
    return date;
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error(`Incorrect or missing gender`);
    }
    return gender;
};
const parseOccupation = (occupation) => {
    if (!occupation || !isString(occupation)) {
        throw new Error(`Incorrect or missing occupation`);
    }
    return occupation;
};
const toNewPatient = ({ name, ssn, dateOfBirth, gender, occupation }) => {
    const newEntry = {
        name: parseName(name),
        ssn: parseSSN(ssn),
        dateOfBirth: parseDate(dateOfBirth),
        gender: parseGender(gender),
        occupation: parseOccupation(occupation),
        entries: []
    };
    return newEntry;
};
exports.default = toNewPatient;
