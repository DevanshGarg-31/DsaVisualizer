export default function ContolPanel(){
    return (
        <>
        <div className="flex justify-center gap-5 container mx-auto p-2 mt-3 " >
            <button className="border-2 rounded-2xl p-1 bg-sky-300 w-[100px] hover:bg-sky-200 transform transition ">Generate Array</button>
            <button  className="border-2  w-[100px] rounded-2xl p-1 bg-green-600 hover:bg-green-500 transform transition ">Start</button>
            <button  className="border-2  w-[100px] rounded-2xl p-1 bg-yellow-600 hover:bg-yellow-400 transform transition ">Pause</button>
            <button  className="border-2  w-[100px] rounded-2xl p-1 bg-red-600 hover:bg-red-500 transform transition ">Reset</button>
        </div>
        </>
    )
}