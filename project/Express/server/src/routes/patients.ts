import express from 'express';
import patientService from '../services/patientService';
import toNewPatient from '../utils';

const router = express.Router();

router.get('/', (_req, res) =>  {
  console.log(`Someone pinged /api/patients`);
  
  res.send(patientService.getNonSensitivePatients());
});



router.get('/:id', (req, res) =>  {
  console.log(`Someone pinged /api/patients:id`);

  const patient = patientService.findById(req.params.id);

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
router.post('/', (req, res) => {
  try {
    // function to type check the request body
    const newPatient = toNewPatient(req.body);
    
    const addedPatient = patientService.addPatient(newPatient);

    res.json(addedPatient);
  } catch (e:any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(e.message);
  }
});

export default router;