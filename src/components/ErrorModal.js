import Link from "next/link";

export default function ErrorModal() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-blue-100 p-10 m-6 md:m-0 lg:w-1/3 rounded shadow-lg text-center font-bold">
        <p className="text-red-500">Error</p>
        <p className="mt-10">Try to restart the project or the go API</p>
        <div className="mt-20">
          <Link
            href="/home"
            className="font-bold text-white bg-red-500 hover:bg-red-700 py-2 px-4 rounded"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
