import express from 'express';
import diagnosesService from '../services/diagnosesService';

const router = express.Router();

router.get('/', (_req, res) => {
  console.log(`Someone pinged /api/diagnoses`)
  // res.send(`Someone pinged /api/diagnoses`)
  res.send(diagnosesService.getDiagnoses());
})

export default router;