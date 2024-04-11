import { Plus, User2 } from "lucide-react";

const AddEmployee = () => {
    return ( 
        <div className="w-full h-screen flex items-start">
            <div className="p-8 border flex flex-col rounded-3xl bg-white gap-4 border-gray-200 w-full">
            {/* HEading  */}

            <div> 
                ADD EMPLOYEE
            </div>
            <div className="bg-gray-200 h-[1px] w-full "></div>

            {/* Details  */}
            <form className=" flex flex-col w-full h-full justify-evenly items-center">
            <div className=" flex w-full h-full justify-evenly items-center">
                <div className="w-[40%] flex flex-col justify-center items-center">
                {/* UserImage  */}
                <User2 
                className="bg-white rounded-full border border-gray-400" 
                size={150}
                color="gray" 
                fill="white"/>

                <div className="h-10 w-10 bg-[#f68422] items-center -mt-10 -mr-20 flex justify-center rounded-full">
                    <Plus className="rounded-full text-white"/>
                </div>

                <p className="text-center max-w-[380px] text-[14px] text-gray-600">Accepting .jpg, .png, .gif up to 1MB.Recommended dimension: 200px * 200px </p>
                </div>

                <div className="flex flex-col gap-4 py-4 w-full text-gray-600">

                    <p>Employee First Name</p>
                    <div className="flex ">
                        <div className="bg-white border border-gray-200 px-4 rounded-l-lg w-4/5">
                            <input 
                            placeholder="First Name" 
                            type="first-name" 
                            className="h-10 w-full outline-none rounded-lg"/>
                        </div>

                         <div className="bg-white border border-gray-200 px-4 w-3/4">
                            <input 
                            placeholder="Midddle Name" 
                            type="middle-name"  
                            className="h-10 w-full outline-none rounded-lg"/>
                        </div>

                         <div className="bg-white border border-gray-200 px-4 rounded-r-lg w-3/4">
                            <input 
                            placeholder="Last Name" 
                            type="last-name" 
                            className="h-10 w-full outline-none rounded-lg"/>
                        </div>
                    </div> 

                    <p>Employee ID</p>
                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-2/4">
                            <input 
                            placeholder="0011" 
                            type="employee-id" 
                            className="h-10 w-full outline-none rounded-lg"/>
                    </div>
                    <div className="bg-gray-200 h-[1px] w-full "></div>
                    <div className="flex items-center gap-6">
                        <p>Create Login Detail</p>
                        <div className="h-6 w-12 items-center flex rounded-full bg-gray-200 ">
                            <div className="bg-white h-4 w-5 ml-1  rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 h-[1px] w-full "></div>
                <div className="flex items-center justify-between w-full mt-6">
                    <p>*Required</p>
                    <div className="flex gap-4 items-center">
                        <button className="h-10 w-[120px]  text-green-400 border border-green-400 rounded-full">Cancel</button>
                        <button className="h-10 w-[120px]  bg-green-400 border text-white  rounded-full">Save</button>
                    </div>
                </div>
            </form>        
        </div>
        </div>
     );
}

export default AddEmployee;