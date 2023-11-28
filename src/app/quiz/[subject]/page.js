"use client";
import { useEffect, useRef, useState } from "react";
/* components */
import QuestionCarousel from "@/components/QuestionCarousel";

export default function SubjectQuiz({ params }) {
  const questions = useRef([]);
  const [showError, setShowError] = useState(false);
  const [questionIdx, setQuestionIdx] = useState(0);

  const url = "http://localhost:8080/quiz/" + params.subject;

  useEffect(() => {
    console.log("calling useEffect");
    fetch(url)
      .then((data) => data.json())
      .then((quiz) => {
        questions.current = quiz;
      })
      .catch(() => setShowError(true));
  }, []);

  function nextQuestion() {
    setQuestionIdx((currentIdx) => currentIdx + 1);
  }

  function previousQuestion() {
    setQuestionIdx((currentIdx) => currentIdx - 1);
  }

  return (
    <QuestionCarousel
      questions={questions.current}
      currentIdx={questionIdx}
      nextQuestion={nextQuestion}
      previousQuestion={previousQuestion}
    />
  );
}
