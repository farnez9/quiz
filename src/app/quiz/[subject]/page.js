"use client";
import { useEffect, useRef, useState } from "react";
/* components */
import QuestionCarousel from "@/components/QuestionCarousel";

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

  return <QuestionCarousel questions={questions} />;
}
