export default function Stats({stats}) {
  return (
    <>
      <div className="bg-slate-800 rounded-2xl text-white p-2 w-1/2" >
        <h1 className="font-bold text-center font-black">Stats</h1>
        <div>Comparisons : {stats.comparisons}</div>
        <div>Swaps : {stats.swaps}</div>
        <div>Execution Time : {stats.executionTime} ms</div>
      </div>
    </>
  );
}
