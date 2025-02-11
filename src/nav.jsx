import { useNavigate } from "react-router-dom";


function NavBar() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }

    function handleContactClick() {
        navigate('/contact');
    }

    return (
        <nav className="flex justify-between items-center p-4  text-black">
            <div>
                <img src="/images/jordan_logo.png" alt="Brand Logo" className="h-16" />
            </div>
            <div className="hidden md:flex space-x-4">
                <a href="#home"  className=" hover:bg-black hover:text-white rounded-full px-4 py-2">Home</a>
                <a href="#services" className=" hover:bg-black hover:text-white rounded-full px-4 py-2">Services</a>
                <a href="#about" className=" hover:bg-black hover:text-white rounded-full px-4 py-2">About</a>
                <a href="#contact" onClick={handleContactClick} className=" hover:bg-black hover:text-white rounded-full px-4 py-2">Contact</a>
            </div>
            <div>
                <button 
                    onClick={handleClick} 
                    className="bg-black text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>
            </div>
        </nav>
    );
}

export default NavBar;