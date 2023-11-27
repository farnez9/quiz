export default function Button({ text, tailwindTextColor, tailwindBgColor }) {
  return (
    <button
      className={`${tailwindBgColor} ${tailwindTextColor} font-bold hover:bg-blue-700 py-2 px-4 rounded-full`}
    >
      {text}
    </button>
  );
}
