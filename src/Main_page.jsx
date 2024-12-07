import NavBar from "./nav"
import Last_Bar from "./Last_Bar"
function Main_page(){
    return (
        <div>
            <div>
                <NavBar/>
            </div>

            <div className="h-screen">
                <div className="flex px-16">
                    <div className="flex flex-col mt-[5cm]">
                        <div className="text-6xl text-black font-chakra">
                            YOUR FEET DESERVE
                        </div> 
                        <div className="text-4xl font-chakra ml-[5cm] mt-4">  
                            THE BEST
                        </div>  
                        <div className="mt-8"> 
                            <div className="flex flex-col gap-2 text-lg font-playwrite">
                                <span className="text-center">YOUR FEET DESERVE THE BEST AND WE'RE HERE TO</span>
                                <span className="text-center ">HELP YOU WITH OUR SHOES.YOUR FEET DESERVE</span>
                                <span className="text-center">THE BEST AND WE'RE HERE TO</span>
                                <span className="text-center">HELP YOU WITH OUR SHOES.</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[15cm] h-[20cm] ml-[5cm]">
                        <img src="/images/white_shoe2.png" alt="Shoe" className="mt-[2cm] w-[20cm] h-[15cm]" />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="flex flex-col items-center h-screen">
                        <div>
                            
                        </div>
                        <div className="text-[2cm] font-semibold font-chakra ">
                            TOP OF THE WISHLIST KICKS 
                        </div>   
                        <div className="text-base font-playwrite ">
                            All-time icons and sport-inspired gifts to make everyone on your list look and feel their best
                        </div>
                        <button className="bg-black text-white mt-6 rounded-full px-4 py-2 ">
                            SHOP KICKS
                        </button>
                        <div className=" font-bold font-chakra text-3xl mt-[1cm]">
                            LATEST
                        </div>
                        <div className="grid grid-cols-4  gap-4">
                            <div className=" ">
                                <div className="rounded-xl">
                                    <img src="/images/jordan_1.png " alt="" />
                                </div>
                                <div className="text-xl text-center flex flex-col font-chakra">
                                    <span>
                                        Jordan 11
                                    </span>
                                    <span>
                                        $70
                                    </span>
                                </div>  
                            </div>
                            <div className=" ">
                                <div className="rounded-xl">
                                    <img src="/images/jordan_2.png" alt="" />
                                </div>
                                <div className="text-xl text-center flex flex-col font-chakra">
                                    <span>
                                        Air Jordan 12 Retro
                                        "phantom"
                                    </span>
                                    <span>
                                        $200
                                    </span>
                                </div>
                            </div>
                            <div className=" ">
                                <div className="rounded-xl">
                                    <img src="/images/jordan_3.png" alt="" />
                                </div>
                                <div className="text-xl text-center flex flex-col font-chakra">
                                    <span>
                                        Air Jordan 11 Retro
                                        "Legend Blue"
                                    </span>
                                    <span>
                                        $230
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <div className="rounded-xl">
                                    <img src="/images/jordan_4.png" alt="" />
                                </div>
                                <div className="text-xl text-center flex flex-col font-chakra">
                                    <span>
                                        Air Jordan 5 Retro
                                        "Black Cat"
                                    </span>
                                    <span>
                                        $150
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Last_Bar/>
            </div>
        </div>

    )
}

export default Main_page
