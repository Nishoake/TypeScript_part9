import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) =>  {
  console.log(`Someone pinged /api/patients`);
  
  res.send(patientService.getNonSensitivePatients());
});

export default router;