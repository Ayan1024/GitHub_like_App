const Sortrepos = ({ onSort, sortType }) => {
  const Buttons = [
    { type: "recent", text: "Most Recent" },
    { type: "stars", text: "Most Stars" },
    { type: "forks", text: "Most Forks" },
  ];
  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      {Buttons.map((button) => (
   <button
   key={button.type}
   type="button"
   className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
   hover:bg-gray-600/10 border text-white ${
	 button.type === sortType ? "border-blue-700" : "border-gray-800"
   }`}
   onClick={() => onSort(button.type)}
 >
   {button.text}
 </button>
      ))}
    </div>
  );
};
export default Sortrepos;
