import { useNavigate } from "react-router-dom";

function NavBar(){

    const navigate = useNavigate();

    function handleClick(){
        navigate('/login')
     }

    return(
    <div class="navbar">
            <div class="logo">
                <img src="/images/brand_logo.png " alt="" />
            </div>
        <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
        <div class="log">
            <button onClick={handleClick}>Login</button>
        </div>
    </div>
    )
}


export default NavBar

