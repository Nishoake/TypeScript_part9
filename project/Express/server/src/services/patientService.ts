import patients from '../../data/patients';

import { Patient, NewPatient, NonSensitivePatient } from '../types';

// import { v1 as uuid } from 'uuid';

const findById = (id: string): Patient[] =>  {
  const match = patients.filter(patient => patient.id === id);
  return match;
};

const getNonSensitivePatients = (): NonSensitivePatient[] =>  {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
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
  findById,
  getNonSensitivePatients,
  addPatient
};