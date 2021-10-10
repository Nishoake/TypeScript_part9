import patients from '../../data/patients';

import { Patient, NewPatient, NonSensitivePatient } from '../types';

// import { v1 as uuid } from 'uuid';

const getPatients = (): Patient[] =>  {
  return patients;
};

const getNonSensitivePatients = (): NonSensitivePatient[] =>  {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};


const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: (patients.length + 1).toString(),
    ...patient
  };

  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient
};