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
export default function Sidebar() {
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
              <button className="flex flex-col p-2 rounded-lg
hover:bg-slate-700
cursor-pointer
transition-colors " key={algorithm}>
                {algorithm}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
