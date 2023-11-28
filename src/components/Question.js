import Button from "./Button";

export default function Question({ q }) {
  return (
    <>
      <div className="m-6 lg:m-52">
        <div className="bg-blue-100 p-6 lg:p-8 rounded-lg border border-gray-300 shadow-md">
          <div className="mb-8 font-bold">{q.question}</div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row md:justify-between lg:justify-end">
          <Button
            text="true"
            tailwindTextColor="text-white"
            tailwindBgColor="bg-green-800"
          />
          <Button
            text="false"
            tailwindTextColor="text-white"
            tailwindBgColor="bg-red-800"
          />
        </div>
      </div>
    </>
  );
}
