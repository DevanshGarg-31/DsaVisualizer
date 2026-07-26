export const sidebarItems = [
  {
    category: "📊 Sorting",
    items: [
      "Bubble Sort",
      "Selection Sort",
      "Insertion Sort",
      "Merge Sort",
      "Quick Sort",
    ],
  },
  {
    category: "🔍 Searching",
    items: ["Linear Search", "Binary Search"],
  },
];
export default function Sidebar({ selectedAlgorithm, setSelectedAlgorithm }) {
  return (
    <>
      <div
        className="items-center ml-3 bg-slate-800
text-white
rounded-xl
shadow-lg
p-4 h-[450px]"
      >
        {sidebarItems.map((item) => (
          <div key={item.category}>
            <h1 className="font-bold  mx-auto mt-5 ">{item.category}</h1>

            {item.items.map((algorithm) => (
              <button
                className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedAlgorithm === algorithm
                    ?"bg-sky-500 text-white font-semibold shadow-lg border-l-4 border-cyan-300"
                    : "text-slate-300 hover:bg-slate-700 hover:translate-x-1"
                }`}
                key={algorithm}
                onClick={() => {
                  setSelectedAlgorithm(algorithm);
                }}
              >
                {algorithm}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
