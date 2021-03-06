import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
/*eslint-disable */
app.use(cors());
/*eslint-disable */
app.use(bodyParser.json());

import { calculateBmi } from './bmiCalculator';
import { calculateExercise } from './exerciseCalculator';

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/ping', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { query } = req;
  const { height, weight } = query;

  console.log(`h: ${height}`);
  console.log(`w: ${weight}`);

  if (!height || !weight) {
    return res.status(400).json({ error: "parameters missing" });
  }

  const heightValue = Number(height);
  const weightValue = Number(weight);

  if (isNaN(heightValue) || isNaN(weightValue)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(heightValue, weightValue);

  return res.json(bmi);
});

app.post('/exercise', (req, res) => {

  // Destructure the req.body for the daily_exercises & target values
  const { body } = req;
  const { daily_exercises } = body;
  let { target } = body;


  // Check for missing parameters
  if (!daily_exercises|| !target) {
    return res.status(400).json({ error: "parameters missing" });
  }

  // Check daily_exercises for being of the Array type
  if (!Array.isArray(daily_exercises)) {
    return res.status(400).json({ error: "please pass in an array for the daily_exercises parameter" });
  }

  // Create a boolean value that indicates if we have an array full of numbers (False) or not (True)
  const checkArray = daily_exercises.some(hours => isNaN(hours));
  // Convert targetValue to number concurrently setting its type to be of number
  // Helps when we pass into the calculateExercise function
  const targetValue = Number(target);

  if (isNaN(targetValue) || checkArray) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const exercise = calculateExercise(daily_exercises, targetValue );

  return res.json(exercise);
});