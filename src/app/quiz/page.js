import Link from "next/link";

export default function noSubjectQuizPage() {
  return (
    <main>
      <h2 className="text-white font-bold text-center my-8 lg:mt-12">
        No subject has been selected...
      </h2>
      <div className="flex justify-center mt-20">
        <Link
          href="/home"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Choose subject!
        </Link>
      </div>
    </main>
  );
}
