"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
// import { v1 as uuid } from 'uuid';
const getPatients = () => {
    return patients_1.default;
};
const getNonSensitivePatients = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
const addPatient = (patient) => {
    const newPatient = Object.assign({ id: (patients_1.default.length + 1).toString() }, patient);
    patients_1.default.push(newPatient);
    return newPatient;
};
exports.default = {
    getPatients,
    getNonSensitivePatients,
    addPatient
};
