"use client"
import { CircleUserRound, Triangle } from "lucide-react";
import PimDashboard from "./components/pim-Dashboard";
import { useState } from "react";
import AddEmployee from "./components/add-employee";

const SitePage = () => {

    const [Open,setOpen] = useState('Configuration')

    const nav2 = [
        {
            label: "Configuration",
            url: "Configuration"
        },
        {
            label: "Employee List",
            url: "Employee List"
        },
        {
            label: "Add-Employee",
            url: "AddEmployee"
        },
        {
            label: "Reports",
            url: "Reports"
        },
    ]
     
    const reRender = ()=>{
        switch (Open) {
            case "AddEmployee":
            return <AddEmployee/>;

            case "Configuration":
            return <PimDashboard/>;
            
        }
    };

    return (  
        <div className="flex max-w-full h-full">
                <div className=" w-full flex flex-col  ">

                    {/* ROOT NAVBAR */}
                   <div className=" w-full flex bg-[#f68422] h-[60px]  text-white justify-between items-center px-[5%]">
                        <div className="">PIM</div>
                    {/* USER PROFILE BUTTON  */}
                        <button className="flex items-center border gap-2 border-white h-10 w-[200px] justify-center rounded-3xl ">
                            <CircleUserRound size={38}/>Shubham Shine
                            <Triangle className=" rotate-180" size={10} fill="white" color="white"/>
                        </button>
                   </div>

                   {/* PIM NAVBAR  */}
                   
                       <div className="px-[5%] bg-white gap-8 flex w-full h-[80px] items-center">
                            {nav2.map(link=>(
                            <button onClick={()=>{setOpen(link.url)}} className="flex items-center justify-center bg-gray-100 rounded-3xl h-12 w-[160px] text-gray-600">{link.label}</button>
                            ))}                    
                       </div>

                       <div className="px-[5%] mt-20 ">{reRender()}</div>
                   

                {/* <div className="px-[5%] mt-5"><PimDashboard/></div> */}


                </div>

        </div>
    );
}

export default SitePage;