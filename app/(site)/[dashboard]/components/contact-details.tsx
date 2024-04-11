import data from '../countries.json'
const ContactDetails = () => {
    const countryCode = data
    return ( 

        <div className="flex h-screen w-full">
                    <div className="flex flex-col gap-4 px-[2%] py-4 w-full bg-gray-100 rounded-r-3xl">
                        {/* Heading  */}
                        <div className="font-[700] text-[18px]"> 
                            Contact Detail
                        </div>
                        <div className="bg-gray-200 h-[1px] w-full "></div>

                        {/* 3 Sectors  */}
                        <div className="gap-4 flex flex-col">
                            <p className="font-[600]">Address</p>
                            <div className="bg-gray-200 h-[1px] w-full "></div>

                            <div className="flex w-full ">

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>sector 1</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                         name='Address'
                                        type="address" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>sector 2</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                         name='Address2'
                                        type="address" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>sector 3</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                         name='Address3'
                                        type="address" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>
                            </div>

                            {/* Address 2 */}
                            <div className="flex flex-col gap-8 mt-8 items-center">
                            <div className="flex w-full">

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>state/Province</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                        name='state'
                                        type="Address" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>Zip/Postal code</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                        name='Zip code' 
                                        type="first-name" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>Country</p>
                                    <div className="bg-white border items-center flex w-4/5 h-10 border-gray-200 px-4 rounded-lg">
                                    <select className="w-full outline-none">
                                        <option>Select</option>
                                        {countryCode.map(item=>(
                                        <option>{item.label}</option> 
                                        ))}
                                    </select>
                                    </div>
                                    </div>
                                </div>    
                            </div>                          
                        </div>
                        {/* Telephone Section  */}
                        <div className="gap-4 flex flex-col mt-8 ">
                        <p className="font-[600]">Telephone</p>
                            <div className="bg-gray-200 h-[1px] w-full "></div>
                            <div className="flex w-full ">
                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>Home</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input
                                        type="first-name" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>Mobile</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                        type="first-name" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>Work</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                        type="first-name" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Section  */}
                        <div className="gap-4 flex flex-col mt-8 ">
                        <p className="font-[600]">Email</p>
                            <div className="bg-gray-200 h-[1px] w-full "></div>
                            <div className="flex w-[68%] mt-4 ">
                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>Work Email</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input
                                        type="first-name" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>

                                <div className="w-2/4 gap-2 flex flex-col">
                                    <p>Other Email</p>
                                    <div className="bg-white border border-gray-200 px-4 rounded-lg w-4/5">
                                        <input 
                                        type="first-name" 
                                        className="h-10 w-full outline-none rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


     );
}
 
export default ContactDetails;