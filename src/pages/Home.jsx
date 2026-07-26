import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/SideBar/Sidebar";
import Visualizer from "../components/Visualizer/Visualizer";
import ContolPanel from "../components/ControlPanel/ControlPanel";
import Stats from "../components/Stats/Stats";
import Complexity from "../components/Complexity/Complexity";
import { useState } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
export default function Home() {
   const [newArr,setNewArr]=useState([])
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Bubble Sort");

    function generateArray(){
        const arr=[]
        for(let i=0;i<30;i++)
        {
            let num= Math.floor((Math.random()*250)+50)
            arr.push(num)
        }
        setNewArr(arr)

    }
async function startSorting() {
    switch (selectedAlgorithm) {
        case "Bubble Sort":
           await bubbleSort([...newArr],setNewArr,100);
            break;

        case "Selection Sort":
            selectionSort();
            break;

        case "Insertion Sort":
            insertionSort();
            break;

        case "Merge Sort":
            mergeSort();
            break;

        case "Quick Sort":
            quickSort();
            break;

        default:
            break;
    }
}
  return (
    <>
    <div className="bg-slate-950">
        <Navbar></Navbar>
      <div className="flex">
        <div className="w-64">
        <Sidebar
    selectedAlgorithm={selectedAlgorithm}
    setSelectedAlgorithm={setSelectedAlgorithm}
/>
        </div>

        <div className="flex-1 h-[450px]">
          <Visualizer newArr={newArr} />
        </div>
      </div>
      <ContolPanel generateArray={generateArray} startSorting={startSorting} ></ContolPanel>
      <div className="flex">
        <Stats></Stats>
        <Complexity selectedAlgorithm={selectedAlgorithm}></Complexity>
      </div>
    </div>
    
    </>
  );
}
