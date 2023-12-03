import Link from "next/link";

export default function ScoreModal({ score, questionNumber }) {
  const text = score > 5 ? "Congratulations!" : "Try again!";
  const textColor = score > 5 ? "text-blue-700" : "text-red-500";

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-blue-100 p-10 m-6 md:m-0 lg:w-1/3 rounded shadow-lg text-center font-bold">
        <p className={`${textColor}`}>{text}</p>
        <p className="mt-10">Your score is:</p>
        <span className={`${textColor}`}>
          {score} /{questionNumber}
        </span>
        <div className="mt-20">
          <Link
            href="/home"
            className="font-bold text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
