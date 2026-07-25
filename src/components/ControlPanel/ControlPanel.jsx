
export default function ContolPanel({generateArray}){
    return (
        <>
        <div className="flex justify-center gap-5 container mx-auto p-2 mt-3 " >
            <button onClick={generateArray} className="border-2 rounded-2xl p-1 w-[100px] bg-sky-300 shadow-md hover:scale-105 transition-all duration-200 ">Generate Array</button>
            <button  className="border-2  w-[100px] rounded-2xl p-1 bg-green-600 shadow-md hover:scale-105 transition-all duration-200  ">Start</button>
            <button  className="border-2  w-[100px] rounded-2xl p-1 bg-yellow-600 shadow-md hover:scale-105 transition-all duration-200  ">Pause</button>
            <button  className="border-2  w-[100px] rounded-2xl p-1 bg-red-600 shadow-md hover:scale-105 transition-all duration-200  ">Reset</button>
        </div>
        <div className="flex flex-col items-center text-center mb-2 p-2">
            <div className="font-bold text-white flex gap-1 w-[250px]">
                <span>Speed</span>
                <input type="range" min={0} max={100}/>
            </div>
            <div
            className="font-bold text-white flex gap-1 w-[250]">
                <span>Array Size</span>
                <input type="number" className="bg-white rounded-2xl w-[200px]" />

            </div>
        </div>
        </>
    )
}