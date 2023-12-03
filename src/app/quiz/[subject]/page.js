"use client";
import { useEffect, useState } from "react";

import QuestionCarousel from "@/components/QuestionCarousel";
import ScoreModal from "@/components/ScoreModal";
import ErrorModal from "@/components/ErrorModal";

export default function SubjectQuiz({ params }) {
  const [questions, setQuestions] = useState([]);
  const [showError, setShowError] = useState(false);
  const [showResult, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const url = "http://localhost:8080/quiz/" + params.subject;

  useEffect(() => {
    console.log("calling useEffect");
    fetch(url)
      .then((data) => data.json())
      .then((quiz) => setQuestions(quiz))
      .catch(() => setShowError(true));
  }, []);

  function checkAnswers(answers) {
    console.log("sending this data", JSON.stringify(answers));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answers),
    })
      .then((response) => response.json())
      .then((rightQuestions) => {
        setScore(rightQuestions);
        setShowScore(true);
      })
      .catch(() => {
        setShowError(true);
      });
  }

  return (
    <>
      <QuestionCarousel
        questions={questions}
        subject={params.subject}
        onCheck={checkAnswers}
      />

      {showResult && (
        <ScoreModal score={score} questionNumber={questions.length} />
      )}

      {showError && <ErrorModal />}
    </>
  );
}
