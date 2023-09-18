import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home/index.tsx";
import Benefits from "@/scenes/benefits/index.tsx";
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";

function App() {
  console.log("re-render here");
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  // run only once to add event listener
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      else{
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, [])
  
  return (
    <div className="app bg-gray-20">
      <Navbar 
      isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
