import { User2 } from "lucide-react";
import Link from "next/link";
import data from '../countries.json'

const PersonalDetail = () => {

    
    const countryCode = data 


    return (  
        <div className="flex h-full w-full">
                <div className="flex flex-col gap-4 px-[2%] py-4 w-full bg-gray-100 rounded-r-3xl">

                    <div className="font-[700] text-[18px]"> 
                    Personal Detail
                    </div>
                    <div className="bg-gray-200 h-[1px] w-full "></div>

                    <div className="gap-2 flex flex-col">
                        <p>Employee First Name*</p>
                        <div className="flex ">
                            <div className="bg-white border border-gray-200 px-4 rounded-l-lg w-4/5">
                                <input 
                                placeholder="First Name" 
                                type="first-name" 
                                className="h-10 w-full outline-none rounded-lg"/>
                            </div>

                            <div className="bg-white border border-gray-200 px-4  w-4/5">
                                <input 
                                placeholder="Midddle Name" 
                                type="middle-name"  
                                className="h-10 w-full outline-none rounded-lg"/>
                            </div>

                            <div className="bg-white border border-gray-200 px-4 rounded-r-lg w-4/5">
                                <input 
                                placeholder="Last Name" 
                                type="last-name" 
                                className="h-10 w-full outline-none rounded-lg"/>
                            </div>
                            </div>
                    </div>

                    <div className="bg-gray-200 h-[1px] w-full mt-8 "></div>

                    <div className="gap-4 flex flex-col">
                            <div className="flex w-[68%]">
                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>Employee id</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input
                                        type="first-name" 
                                        placeholder="0004"
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>Other id</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                        type="first-name" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gap-4 flex flex-col mt-8">
                            <div className="flex w-[68%]">
                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>Driver's license number</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input
                                        type="first-name" 
                                        placeholder="0004"
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>License Expiry Date</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                        type="Date" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="bg-gray-200 h-[1px] w-full mt-8 "></div>

                    <div className=" flex w-full mt-8 gap-4">
                        <div className="flex w-[68%]">
                            <div className="w-2/4 gap-2 flex flex-col">
                                <p>Nationality</p>
                                <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                <select className="h-10 w-full outline-none rounded-lg">
                                    <option>Select</option>
                                    {countryCode.map(item=>(
                                    <option>{item.label}</option> 
                                    ))}
                                </select>
                                </div>
                            </div>

                            <div className="w-2/4 gap-2 flex flex-col">
                                <p>Marital Status</p>
                                <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                <select className="h-10 w-full outline-none rounded-lg">
                                    <option>Select</option>
                                    <option>Married</option>
                                    <option>Unmarried</option>                            </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex w-full mt-8 gap-8 ">
                    <div className="flex w-[68%]">
                        <div className="w-2/4 gap-2 flex flex-col">
                                <p>Date of Birth</p>
                                <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                        placeholder="0011" 
                                        type="Date" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                </div>
                        </div>
                        
                        <div className="w-2/4 gap-2 flex flex-col justify-center">
                            <p>Gender</p>
                            <div className=" rounded-lg w-4/5 flex gap-4">
                                    <div className="flex gap-1"><input type="radio"/>Male</div>
                                    <div className="flex gap-1"><input type="radio"/>Female</div>
                            </div>
                        </div>
                    </div>  
                </div>    
            </div> 
        </div>    
    );
}
 
export default PersonalDetail;