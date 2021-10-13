interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseDescriptionPart extends CoursePartBase {
  type: "description";
  description: string;
  exerciseSubmissionLink?: string;
}

interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSpecialPart extends CoursePartBase {
  type: "special";
  description: string;
  requirements: string[];
}

export type CoursePart = CourseProjectPart | CourseDescriptionPart | CourseSpecialPart;