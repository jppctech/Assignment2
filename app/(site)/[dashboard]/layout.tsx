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

const DashboardLayout = ({
    children
    }:{
        children:React.ReactNode
    }
) => {
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
       <div className="flex w-full h-full">
         <motion.div variants={sideAction} animate={open? "Opened" : "Closed"} className={open? " bg-white flex flex-col h-screen w-[265px] p-9 gap-8 rounded-r-3xl shadow-xl absolute": "hidden"}>
            <div className="flex flex-col gap-4">
                <Image src="/Logo.svg" alt="Logo" height={200} width={200} className=""/>
                <div className="flex justify-between mt-10">
                    <div className="flex gap-4 ">
                        <SearchIcon/>
                        <p>Search</p>
                    </div>
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

        <div className="h-full w-full flex justify-end">
            <main className={open? "flex w-[87%]": 'w-full flex'}>
                <div className={open? "z-[200] flex h-full mt-[140px]":"z-[200] flex h-full mt-[140px] "}>
                <button onClick={()=>{setOpen(!open)}} className="h-8 items-center justify-center  flex -mr-[54px] w-8 bg-[#f68422] rounded-full text-white -ml-2"><ChevronRight/></button>
                </div>
                <div className="w-full h-full bg-gray-200">
                {children}
                </div>
            </main>
        </div>
       </div>
         );
}

export default DashboardLayout;