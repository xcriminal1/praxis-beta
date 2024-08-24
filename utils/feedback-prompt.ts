interface feedbackPromptProps {
  question: string;
  userAnswer: string;
}

export const feedbackPromptFormat = ({
  question,
  userAnswer,
}: feedbackPromptProps) => {
  return `Question: ${question}, User Answer: ${userAnswer}

  Please provide a rating for the user's answer and feedback, including any areas of improvement. The rating should be on a scale of 1 to 10, with 10 being excellent. The feedback should be concise, ideally in 3 to 5 lines. 

  Output the result in JSON format with two fields: 
  - "rating" for the rating score 
  - "feedback" for the feedback text.

  Based on the rating:
  - If the rating is greater than 8, generate 5 multiple-choice questions (MCQs) of a hard difficulty level.
  - If the rating is 8 or below, generate 5 easier MCQs, focusing on the identified areas of improvement.

  Each MCQ should include four answer options and the correct answer.`;
};
