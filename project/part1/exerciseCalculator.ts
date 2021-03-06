interface Input {
  target: number;
  data: number[];
}

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

// Function parsing inputs from the command line
const parseArguments = (args: Array<string>): Input => {
  if (args.length < 4) throw new Error('Not enough arguments');

  if (isNaN(Number(args[2]))) {
    throw new Error('Provided target is not a number value! Please try again...');
  }

  for (let i = 2; i < args.length; i++){
    if (isNaN(Number(args[i]))){
      throw new Error('Provided workout data must conist of only number values! Please try again...');
    }
  }

  const target = (Number(args[2]));
  const sliced: Array<string> = args.slice(3);
  const data: Array<number> = sliced.map(index => Number(index));

  return {
    target: target,
    data: data
  };
};

// Function to analyze the physical activity for a given time period
export const calculateExercise = (data: number[], target: number): Result => {

  const numberOfDays:number = data.length;
  let numberOfTrainingDays = 0;
  let rating = 0; 
  let ratingDescription = '';

  for(let i =0; i < data.length; i++){
    if(data[i] !== 0){
      numberOfTrainingDays++;
    }
  }

  const averageTime:number = data.reduce((a, b) => a + b, 0) / data.length;

  const targetReached:boolean = (target <= averageTime);

  if (averageTime / target < 0.5) {
    rating = 1;
    ratingDescription = 'You can do better fam 🤷🏾‍♂️ Let\'s up it for next week 📈';
  } else if (averageTime / target < 1) {
    rating = 2;
    ratingDescription = 'Progress 🔥 Let\'s keep pushing it 😤';
  } else if (averageTime / target > 1) {
    rating = 1;
    ratingDescription = 'Good work Champ 🏆 Keep at it 💃🏾';
  }

  const resultObject = {
    periodLength: numberOfDays,
    trainingDays: numberOfTrainingDays,
    success: targetReached,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: averageTime
  };

  return resultObject;
};


try {
  const { target, data } = parseArguments(process.argv);
  console.log(JSON.stringify(calculateExercise(data, target )));
} catch (e) {
  /*eslint-disable */
  console.log('Something went wrong, error message: ', e.message);
  /*eslint-disable */
}