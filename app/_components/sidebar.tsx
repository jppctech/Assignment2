"use client"
import { ChevronRight,
        Contact,
        FolderClock, 
        HomeIcon, 
        InfoIcon, 
        SearchIcon, 
        Settings, 
        SquareUserRound, 
        UserCog, 
        Users, 
        WalletMinimal 
    } from "lucide-react";

import Image from "next/image";
import {motion} from "framer-motion"
import { useState } from "react";


const SideBar = () => {

    const [open, setOpen] = useState(false)

    const sideAction  = {
        Opened:{
            x: 0,
        },
        Closed:{
            x: -285
        }
    }

    return ( 
        <motion.div variants={sideAction} animate={open? "Opened" : "Closed"} className=" bg-white flex flex-col h-screen w-[300px] p-9 gap-8 rounded-r-3xl shadow-xl">
            <div className="flex flex-col gap-4">
                <Image src="/Logo.svg" alt="Logo" height={200} width={200} className=""/>
                <div className="flex justify-between mt-10">
                    <div className="flex gap-4 ">
                        <SearchIcon/>
                        <p>Search</p>
                    </div>
                    <button onClick={()=>{setOpen(!open)}} className="h-8 items-center justify-center  flex -mr-[54px] w-8 bg-[#f68422] rounded-full text-white"><ChevronRight/></button>
                </div>
                <div className="bg-gray-200 h-[1px] w-full "/>
            </div>

            <div className="flex flex-col gap-8">
                <button className="flex gap-4 items-center">
                    <SquareUserRound/>Admin
                </button>

                <button className="flex gap-4 items-center">
                    <Users/>PIM
                </button>

                <button className="flex gap-4 items-center">
                    <UserCog/>Leave
                </button>

                <button className="flex gap-4 items-center">
                    <FolderClock/>Time
                </button>
                
                <button className="flex gap-4 items-center">
                    <InfoIcon/>My info
                </button>

                <button className="flex gap-4 items-center">
                    <HomeIcon/>Dashboard
                </button>

                <button className="flex gap-4 items-center">
                    <Contact/>Directory
                </button>

                <button className="flex gap-4 items-center">
                    <Settings/>Maintenance
                </button>

                <button className="flex gap-4 items-center">
                    <WalletMinimal/>Buzz
                </button>
            </div>
        </motion.div>
     );
}
 
export default SideBar;