"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    console.log(`Someone pinged /api/patients`);
    res.send(patientService_1.default.getNonSensitivePatients());
});
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
router.post('/', (req, res) => {
    try {
        const { name, ssn, dateOfBirth, gender, occupation } = req.body;
        const newPatient = patientService_1.default.addPatient({
            name,
            ssn,
            dateOfBirth,
            gender,
            occupation,
        });
        res.json(newPatient);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.default = router;
