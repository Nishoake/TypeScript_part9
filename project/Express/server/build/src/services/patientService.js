"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
// import { v1 as uuid } from 'uuid';
const findById = (id) => {
    const match = patients_1.default.filter(patient => patient.id === id);
    return match;
};
const getNonSensitivePatients = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};
const addPatient = (patient) => {
    const newPatient = Object.assign({ id: (patients_1.default.length + 1).toString() }, patient);
    patients_1.default.push(newPatient);
    return newPatient;
};
exports.default = {
    findById,
    getNonSensitivePatients,
    addPatient
};
