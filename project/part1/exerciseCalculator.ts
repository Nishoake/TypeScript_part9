interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercise = (target: number, data: number[]): Result => {

  let numberOfDays:number = data.length;
  let numberOfTrainingDays:number = 0
  let rating:number, ratingDescription:string;

  for(let i:number =0; i < data.length; i++){
    if(data[i] !== 0){
      numberOfTrainingDays++;
    }
  }

  let averageTime:number = data.reduce((a, b) => a + b, 0) / data.length;

  let targetReached:boolean = (target <= averageTime);

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

  let resultObject = {
    periodLength: numberOfDays,
    trainingDays: numberOfTrainingDays,
    success: targetReached,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: averageTime
  }

  return resultObject
}

try {
  console.log(JSON.stringify(calculateExercise(2, [3, 0, 2, 4.5, 0, 3, 1])));
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}