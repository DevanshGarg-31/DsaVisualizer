export default function Complexity() {
  return (
    <>
      <div
        className=" w-1/2
bg-slate-800
text-white
rounded-2xl
p-5
shadow-lg
border
border-slate-700
"
      >
        <h2 className="text-xl font-semibold mb-4">Bubble Sort</h2>
        <div className="flex justify-between">
          <span>Best</span>
          <span>O(n)</span>
        </div>
        <div className="flex justify-between">
          <span>Average</span>
          <span>O(n²)</span>
        </div>
        <div className="flex justify-between">
          <span>Worst</span>
          <span>O(n²)</span>
        </div>
        <div className="flex justify-between">
          <span>Space</span>
          <span>1</span>
        </div>
      </div>
    </>
  );
}
