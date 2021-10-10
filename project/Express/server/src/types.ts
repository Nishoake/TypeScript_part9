export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient  {
  id: string;
  name: string;
  ssn: string;
  dateOfBirth: string;
  gender: Gender;
  occupation: string;
}

export enum Gender {
  male = "male",
  female = "female",
  other = "other"
}

export type NewPatient = Omit<Patient, 'id'>;

export type NonSensitivePatient = Omit<Patient, 'ssn'>;