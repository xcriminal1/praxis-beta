interface InputPromptsProps {
  jobPosition: string;
  jobDescription: string;
  jobExperience: string;
  company: string;
}

const QUESTION_COUNT = process.env.NEXT_PUBLIC_MAX_QUESTION_COUNT;

export const InputPromptsFormat = ({
  jobDescription,
  jobExperience,
  jobPosition,
  company,
}: InputPromptsProps) => {
  return `Given the job position of a ${jobPosition} with primary skills in ${jobDescription}, and ${jobExperience} years of experience, please provide a summary of the most common interview questions asked by ${company} over the past 5 years to assess a candidate's proficiency and experience with these technologies. Based on this summary, generate ${QUESTION_COUNT} representative interview questions. Format the output in JSON with separate fields for each question and its corresponding answer.`;
};
