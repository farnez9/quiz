"use client";
import { useRef, useState } from "react";
import Question from "./Question";
import Button from "./Button";

export default function QuestionCarousel({ questions }) {
  /* current question index */
  const [qIdx, setQIdx] = useState(0);
  const answers = useRef({});
  const questionNum = questions.length;

  function answerQuestion(answer) {
    answers.current[qIdx] = answer;
  }

  function nextQuestion() {
    if (qIdx + 1 < questionNum) {
      setQIdx(qIdx + 1);
    }
  }

  function previousQuestion() {
    if (qIdx - 1 > 0) {
      setQIdx(qIdx - 1);
    }
  }

  return (
    <>
      <div>
        <p className="font-bold text-white text-center mt-10">
          Question: {qIdx + 1}/{questionNum}
        </p>
      </div>
      <div className="m-6 lg:m-52">
        <Question q={questions[qIdx]} />
        <div className="mt-10 flex flex-col md:flex-row md:justify-between lg:justify-end">
          <Button
            text="true"
            tailwindTextColor="text-white"
            tailwindBgColor="bg-green-800"
            handleClick={() => answerQuestion(true)}
          />
          <Button
            text="false"
            tailwindTextColor="text-white"
            tailwindBgColor="bg-red-800"
            handleClick={() => answerQuestion(false)}
          />
        </div>
      </div>
    </>
  );
}
