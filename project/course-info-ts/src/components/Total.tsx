import React from 'react';

interface ContentProps {
  name: string;
  exerciseCount: number;
}

interface TotalProps {
  courseParts: ContentProps[];
}

const Total = (props: TotalProps) => {
  return (
    <p>
      Number of exercises{" "}
      {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  )
};

export default Total;