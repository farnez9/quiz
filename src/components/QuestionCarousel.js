"use client";
import { useRef, useState } from "react";
import Question from "./Question";

export default function QuestionCarousel({
  questions,
  currentIdx,
  nextQuestion,
  previousQuestion,
}) {
  const answers = useRef({});

  const questionNumber = questions.length;
  const currentQuestion = questions[currentIdx];

  return (
    <>
      <div>
        <p className="font-bold text-white text-center mt-10">
          Question: {currentIdx}/{questionNumber}
        </p>
      </div>
      <Question q={currentQuestion} />
    </>
  );
}
