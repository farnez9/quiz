"use client";
import { useEffect, useState } from "react";

export default function SubjectQuiz({ params }) {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [showError, setShowError] = useState(false);

  const url = "http://localhost:8080/quiz/" + params.subject;

  useEffect(() => {
    console.log("calling useEffect");
    fetch(url)
      .then((data) => data.json())
      .then((quiz) => setQuizQuestions(quiz))
      .catch(() => setShowError(true));
  });

  // add middleware to bypass CORS policy
  return (
    <>
      {quizQuestions.map((quizQuestion, index) => {
        return <p key={index}>{quizQuestion.question}</p>;
      })}
    </>
  );
}
