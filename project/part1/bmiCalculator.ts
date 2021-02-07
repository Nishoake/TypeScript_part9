const calculateBmi = (height: number, weight: number): String => {
  let bmi: number;
  bmi = weight / Math.pow(height/100, 2);

  if (bmi < 18.5){
    return 'Underweight';
  } else if (18.5 < bmi && bmi < 25) {
    return 'Normal (healthy weight)';
  } else if (25 < bmi && bmi < 30) {
    return 'Overweight';
  } else if (bmi < 30) {
    return 'Obese';
  }
}

try {
  console.log(calculateBmi(180, 74));
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}