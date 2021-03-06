import express from 'express';
const app = express();

import { calculateBmi } from './bmiCalculator';

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