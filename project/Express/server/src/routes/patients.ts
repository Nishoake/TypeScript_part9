import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) =>  {
  console.log(`Someone pinged /api/patients`);
  
  res.send(patientService.getNonSensitivePatients());
});

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
router.post('/', (req, res) => {
  try {
    const { name, ssn, dateOfBirth, gender, occupation } = req.body
    
    const newPatient = patientService.addPatient({
      name,
      ssn,
      dateOfBirth,
      gender,
      occupation,
    });

    res.json(newPatient);

  } catch (e: any) {
    res.status(400).send(e);
  }
});

export default router;