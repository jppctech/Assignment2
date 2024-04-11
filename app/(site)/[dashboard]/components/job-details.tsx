const JobDetails = () => {
    return ( 

        <div className="flex h-screen w-full">
            <div className="flex flex-col gap-6 px-[2%] py-4 w-full bg-gray-100 rounded-r-3xl">

            {/*  Job Details  */}
            <div className="gap-4 flex flex-col">
            <p className="font-[700] text-[18px]">Job Details</p>
                <div className="bg-gray-200 h-[1px] w-full "></div>
                <div className="flex w-full ">
                    <div className="w-2/4">
                        <p>Joined Date</p>
                        <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                            <input
                            type="date" 
                            className="h-10 w-full outline-none rounded-lg"/>
                        </div>
                    </div>

                    <div className="w-2/4">
                        <p>Job Title</p>
                        <div className="bg-white border items-center flex w-4/5 h-10 border-gray-200 px-4 rounded-lg">
                        <select className="w-full outline-none">
                            <option>--Select--</option>
                            <option>Web Developer </option>
                            <option>Software Enginner</option> 
                            <option>Full Stack Developer</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-2/4">
                        <p>Job Specification</p>
                        <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                            <input 
                            type="first-name"
                            placeholder="Not-Defined" 
                            className="h-10 w-full outline-none rounded-lg"/>
                        </div>
                    </div>
                </div>

                <div className="gap-4 flex flex-col mt-10">
                <div className="flex w-full ">

                <div className="w-2/4  ">
                        <p>Job Category</p>
                        <div className="bg-white border items-center flex w-4/5 h-10 border-gray-200 px-4 rounded-lg">
                        <select className="w-full outline-none">
                            <option>--Select--</option>
                            <option>Fresher  </option>
                            <option>Intermediate </option> 
                            <option>Professional</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-2/4">
                        <p>Sub-Unit</p>
                        <div className="bg-white border items-center flex w-4/5 h-10 border-gray-200 px-4 rounded-lg">
                        <select className="w-full outline-none">
                            <option>--Select--</option>
                            <option>ABC</option>
                            <option>ABC</option> 
                            <option>ABC</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-2/4">
                        <p>Location</p>
                        <div className="bg-white border items-center flex w-4/5 h-10 border-gray-200 px-4 rounded-lg">
                        <select className="w-full outline-none">
                            <option>--Select--</option>
                            <option>Banglore </option>
                            <option>Pune</option> 
                            <option>Delhi NCR</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-[34%] mt-10">
                    <p>Employment Status</p>
                    <div className="bg-white border items-center flex w-4/5 h-10 border-gray-200 px-4 rounded-lg">
                        <select className="w-full outline-none">
                            <option>--Select--</option>
                            <option>Active </option>
                            <option>Inactive</option> 
                        </select>
                    </div>
            </div>

            <div className="bg-gray-200 h-[1px] w-full mt-8"></div>

            <div className="flex items-center gap-6 mt-5">
                <p className="font-[600] text-[17px]">Include Employment Contract Details</p>
                <div className="h-6 w-12 items-center flex rounded-full bg-gray-200 ">
                    <div className="bg-white h-4 w-5 ml-1  rounded-full"></div>
                </div>
            </div>

            <div className="bg-gray-200 h-[1px] w-full  mt-5"></div>

            <div className="flex justify-end">
            <button className="h-10 w-[120px]  bg-green-400 border text-white  rounded-full">Save</button>
            </div>

            <div className="bg-gray-200 h-[1px] w-full mt-5"></div>

            <div className="flex items-center gap-6 py-5">
                <p>Employee Termination/ Activation</p>
                <button className="h-8 w-[210px]  bg-red-200 border text-red-600  rounded-full">Terminate Employment</button>

            </div>

            </div>
        </div>
    </div>


     );
}
 
export default JobDetails;