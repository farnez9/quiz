"use client";
import { useEffect, useState } from "react";
/* components */
import Question from "@/components/Question";

export default function SubjectQuiz({ params }) {
  const [questions, setQuestions] = useState([]);
  const [showError, setShowError] = useState(false);

  const url = "http://localhost:8080/quiz/" + params.subject;

  useEffect(() => {
    console.log("calling useEffect");
    fetch(url)
      .then((data) => data.json())
      .then((quiz) => setQuestions(quiz))
      .catch(() => setShowError(true));
  }, []);

  return (
    <main className="px-8 lg:px-20">
      {questions.map((q, idx) => {
        return <Question key={idx} questionText={q.question} />;
      })}
    </main>
  );
}
