export default function Button({
  text,
  tailwindTextColor = "text-white",
  tailwindBgColor = "bg-blue-500 hover:bg-blue-700",
  handleClick,
  className = "",
}) {
  return (
    <button
      className={`${tailwindBgColor} ${tailwindTextColor} font-bold mb-6 w-full md:w-2/5 lg:w-1/5 lg:ml-6 p-2 rounded-lg ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
