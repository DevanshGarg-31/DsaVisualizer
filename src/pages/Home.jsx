import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/SideBar/Sidebar";
import Visualizer from "../components/Visualizer/Visualizer";
import ContolPanel from "../components/ControlPanel/ControlPanel";
import Stats from "../components/Stats/Stats";
import Complexity from "../components/Complexity/Complexity";
export default function Home() {
  return (
    <>
    <div className="bg-slate-950">
        <Navbar></Navbar>
      <div className="flex">
        <div className="w-64">
          <Sidebar />
        </div>

        <div className="flex-1 h-[450px]">
          <Visualizer />
        </div>
      </div>
      <ContolPanel></ContolPanel>
      <div className="flex">
        <Stats></Stats>
        <Complexity></Complexity>
      </div>
    </div>
    
    </>
  );
}
