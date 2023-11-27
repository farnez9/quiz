import Button from "./Button";

export default function Question({ questionText }) {
  return (
    <div className="bg-blue-100 p-6 lg:p-8 my-10 rounded-lg border border-gray-300 shadow-md">
      <p className="mb-8 font-medium">{questionText}</p>
      <div className="flex justify-around">
        <Button
          text="true"
          tailwindTextColor="text-white"
          tailwindBgColor="bg-teal-950"
        />
        <Button
          text="false"
          tailwindTextColor="text-white"
          tailwindBgColor="bg-red-950"
        />
      </div>
    </div>
  );
}
