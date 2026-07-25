import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/SideBar/Sidebar";
import Visualizer from "../components/Visualizer/Visualizer";
import ContolPanel from "../components/ControlPanel/ControlPanel";
import Stats from "../components/Stats/Stats";
import Complexity from "../components/Complexity/Complexity";
import { useState } from "react";
export default function Home() {
   const [newArr,setNewArr]=useState([])

    function generateArray(){
        const arr=[]
        for(let i=0;i<30;i++)
        {
            let num= Math.floor((Math.random()*250)+50)
            arr.push(num)
        }
        setNewArr(arr)

    }
  return (
    <>
    <div className="bg-slate-950">
        <Navbar></Navbar>
      <div className="flex">
        <div className="w-64">
          <Sidebar />
        </div>

        <div className="flex-1 h-[450px]">
          <Visualizer newArr={newArr} />
        </div>
      </div>
      <ContolPanel generateArray={generateArray}></ContolPanel>
      <div className="flex">
        <Stats></Stats>
        <Complexity></Complexity>
      </div>
    </div>
    
    </>
  );
}
