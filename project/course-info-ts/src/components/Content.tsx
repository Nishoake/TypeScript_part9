import React from 'react';
import { CoursePart } from '../types'

import Part from './Part';
import { assertNever } from '../utils';

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {

  const parts = props.courseParts.map(part => {
    switch (part.type)  {
      case "description":
        return <Part coursePart={part} />;
      case "groupProject":
        return <Part coursePart={part} />;
      case "special":
        return <Part coursePart={part} />;
      default:
        return assertNever(part)
        // return null
    }
  })

  return <>{parts}</>
};

export default Content;