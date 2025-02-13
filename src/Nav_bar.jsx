import Main_page from "./Main_page"
import About from './About'

function Navbar(){
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex justify-between items-center relative">
                <div className="ml-4 mt-2 absolute left-0">
                    <span className="text-3xl font-doto  ">YJ</span>
                </div>
                <div className="flex-grow flex justify-center mt-2">
                    <div className="p-4 transition duration-500 font-bodoni text-3xl ">
                       ( PORTFOLIO )
                    </div>
                </div>
            </div>
            <div className="flex-grow bg-slate-50 flex items-center justify-center">
                <Main_page/>
            </div>
        </div>
    )
}

export default Navbar