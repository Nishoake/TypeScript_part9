import { NewPatient, Gender } from "./types";

//*
// Type Guards
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};


//*
// Parsing Functions
const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error(`Incorrect or missing name`);
  }
  return name;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error(`Incorrect or missing SSN`);
  }
  return ssn;
};
const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date`);
  }
  return date;
};

const parseGender = (gender: unknown): string => {
  if (!gender || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender`);
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error(`Incorrect or missing occupation`);
  }
  return occupation;
};


//*
// Request Body Type-Check Function
type Fields = { name: unknown, ssn: unknown, dateOfBirth: unknown, gender: unknown, occupation: unknown};

const toNewPatient = ({ name, ssn, dateOfBirth, gender, occupation }: Fields): NewPatient => {
  
  const newEntry: NewPatient = {
    name: parseName(name),
    ssn: parseSSN(ssn),
    dateOfBirth: parseDate(dateOfBirth),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation)
  };

  return newEntry;
};

export default toNewPatient;