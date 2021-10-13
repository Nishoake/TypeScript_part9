import React from 'react';
import { CoursePart } from '../types'

interface PartProps {
  coursePart: CoursePart;
}

const Part = (props: PartProps) => {
  if (props.coursePart.type === "description") {
    return (
      <p>
        <b>{props.coursePart.name} {props.coursePart.exerciseCount}</b>
        <i>{props.coursePart.description}</i>
      </p>
    )
  } else if (props.coursePart.type === "groupProject") {
    return (
      <p>
        <b>{props.coursePart.name} {props.coursePart.exerciseCount}</b>
        <i>{props.coursePart.groupProjectCount}</i>
      </p>
    )
  } else if (props.coursePart.type === "special") {
    return (
      <p>
        <b>{props.coursePart.name} {props.coursePart.exerciseCount}</b>
        <i>{props.coursePart.requirements}</i>
      </p>
    )
  }
  return null;
};

export default Part;