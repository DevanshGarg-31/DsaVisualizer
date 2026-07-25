export default function Visualizer({ newArr }) {
  console.log(newArr);

  if (newArr.length === 0) {
    return (
      <div className="w-full h-[450px] rounded-2xl border border-slate-700 bg-slate-800 p-4">
        <h2 className="text-xl font-semibold text-white mb-4">
          Visualization Area
        </h2>

        <div className="flex items-center justify-center h-full text-slate-400">
          📊 Generate an array to begin
          <br></br>
          Choose an algorithm from the left panel.
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="text-3xl font-bold text-amber-50 text-center mb-6">
          Visualise
        </h1>
      </div>
      <div className="flex items-end justify-center gap-[2px] h-[400px] w-full px-4 border-b-2  border-slate-600">
        {newArr.map((num, index) => (
          <div
            key={index}
            className="bg-sky-400 w-4 rounded-2xl hover:transition-all
duration-150"
            style={{ height: `${num}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
