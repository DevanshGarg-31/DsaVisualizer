import { algorithmInfo } from "../../algorithms/algoinfo";
export default function Complexity({selectedAlgorithm}) {

  const info=algorithmInfo[selectedAlgorithm]
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
        <h2 className="text-xl font-semibold mb-4">{selectedAlgorithm}</h2>
        <div className="flex justify-between">
          <span>Best</span>
          <span>{info.best}</span>
        </div>
        <div className="flex justify-between">
          <span>Average</span>
          <span>{info.average}</span>
        </div>
        <div className="flex justify-between">
          <span>Worst</span>
          <span>{info.worst}</span>
        </div>
        <div className="flex justify-between">
          <span>Space</span>
          <span>{info.space}</span>
        </div>
      </div>
    </>
  );
}
