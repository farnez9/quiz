export default function Button({
  text,
  tailwindTextColor,
  tailwindBgColor,
  handleClick,
}) {
  return (
    <button
      className={`${tailwindBgColor} ${tailwindTextColor} font-bold mb-6 w-full md:w-2/5 lg:w-1/5 lg:ml-6 p-2 rounded-lg`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
