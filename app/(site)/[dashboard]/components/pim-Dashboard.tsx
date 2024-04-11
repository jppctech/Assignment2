"use client"
import { User2 } from "lucide-react";
import Link from "next/link";
import PersonalDetail from "./personal-detail";
import ContactDetails from "./contact-details";
import JobDetails from "./job-details";
import { useState } from "react";
import AddEmployee from "./add-employee";


const PimDashboard = () => {

    const [activeSection, setActiveSection] = useState('personal')

    const employeeDetail = [
        {
            label: "Personal Detail",
            url: "personal"
        },
        {
            label: "Contact Detail",
            url: "contact"
        },
        {
            label: "Emergency Detail",
            url: "emergency"
        },
        {
            label: "Dependents",
            url: "dependents"
        },
        {
            label: "Immigration",
            url: "immigration"
        },
        {
            label: "Job",
            url: "job"
        },
        {
            label: "Salary",
            url: "salary"
        },
        {
            label: "Report-to",
            url: "report-to"
        },
        {
            label: "Qualifications",
            url: "qualifications"
        },
        {
            label: "Memberships",
            url: "memberships"
        },
    ];

    const renderSection = () => {
        switch (activeSection) {
            case "personal":
                return <PersonalDetail />;
            case "contact":
                return <ContactDetails />;
            case "job":
                return <JobDetails />;
            default:
                return null;
        }
    };
        
    return ( 

        <div className=" gap-1 flex w-full text-gray-600">
            
                <div className="gap-4 flex-col flex w-[20%] py-6 rounded-l-3xl h-full items-center bg-gray-100">
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-[20px] max-w-[120px] text-center font-[700]">Chahal Vadalmiya</p>
                        <User2 
                        className="bg-white rounded-full shadow-lg h-[120px] w-[120px] " 
                        color="gray" 
                        fill="white"/>
                    </div>

                    <div className=" flex flex-col gap-6 font-[600] text-[14px] w-3/4 ">
                    {employeeDetail.map(link=>(
                        <button onClick={()=>{setActiveSection(link.url)}} className={activeSection===link.url? "bg-gray-300 h-10  rounded-full items-center px-6 flex":"bg-gray-200 h-10  rounded-full items-center px-6 flex"}>{link.label}</button>
                    ))}
                    </div>

                </div>
                <div className="flex flex-col w-full">
                {renderSection()}
            </div>
                
            </div>
            
        
    );
}
 
export default PimDashboard;