"use client";
import { useRef, useState } from "react";
/* components */
import Image from "next/image";
import Link from "next/link";
import Question from "./Question";
import Button from "./Button";
/* images */
import leftArrowImg from "../../assets/imgs/arrow-left.svg";
import leftCircledArrowImg from "../../assets/imgs/arrow-circle-left.svg";
import rightCircledArrowImg from "../../assets/imgs/arrow-circle-right.svg";

export default function QuestionCarousel({ questions }) {
  /* current question index */
  const [qIdx, setQIdx] = useState(0);
  const answers = useRef({});
  const questionNum = questions.length;
  const isLastQuestion = qIdx + 1 === questionNum;

  function answerQuestion(answer) {
    answers.current[qIdx] = answer;
    nextQuestion();
  }

  function nextQuestion() {
    if (qIdx + 1 < questionNum) {
      setQIdx(qIdx + 1);
    }
  }

  function previousQuestion() {
    if (qIdx - 1 >= 0) {
      setQIdx(qIdx - 1);
    }
  }

  return (
    <>
      <div className="flex justify-between mx-6 lg:mx-52">
        <Link href="/home" className="flex items-end">
          <Image
            src={leftArrowImg}
            width={40}
            height={40}
            alt="left arrow img to go back"
            className="hover:scale-105"
          />
        </Link>
        <p className="font-bold text-white mt-10 border-white">
          Question: {qIdx + 1}/{questionNum}
        </p>
      </div>
      <div className="mx-6 mt-10 lg:mx-52 lg:my-20">
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
        <div className="mt-20 md:mt-40 flex justify-between items-start">
          <Image
            src={leftCircledArrowImg}
            width={45}
            height={45}
            alt="left arrow icon to previous question"
            className=" hover:scale-105 cursor-pointer"
            onClick={() => previousQuestion()}
          />

          {isLastQuestion && (
            <Button
              text="Check"
              tailwindTextColor="text-white"
              tailwindBgColor="bg-blue-500 hover:bg-blue-700"
              className="w-2/5 align-middle"
              handleClick={() => console.log("check")}
            />
          )}

          <Image
            src={rightCircledArrowImg}
            width={45}
            height={45}
            alt="left arrow icon to previous question"
            className=" hover:scale-105 cursor-pointer"
            onClick={() => nextQuestion()}
          />
        </div>
      </div>
    </>
  );
}
