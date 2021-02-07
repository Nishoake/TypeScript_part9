interface Stats {
  height: number;
  weight: number;
}

const parser = (args: Array<string>): Stats => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

// Function returning BMI
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
  const { height, weight } = parser(process.argv);
  console.log(calculateBmi(height, weight));
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}