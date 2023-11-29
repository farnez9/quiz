export default function Question({ q }) {
  return (
    <>
      <div className="bg-blue-100 p-6 lg:p-8 rounded-lg border border-gray-300 shadow-md">
        <div className="mb-8 font-bold">{q?.question}</div>
      </div>
    </>
  );
}
