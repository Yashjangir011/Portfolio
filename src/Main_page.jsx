import NavBar from "./nav"

function Main_page(){
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="main_page">
            <div className="main_text">
                <div className="up_text">
                YOUR FEET DESERVE
                    </div> 
                    <div className="down_text">
                    THE BEST
                    </div>
                 
            </div>
            <div>
                <img src="/images/shoe_image.png" alt="" />
            </div>
            <div className="buy_option">
                <div>
                <button className="buy_btn">
                    BUY NOW
                </button>
                </div>
                <div className="size">
                    <input type="number" placeholder="SHOE SIZE" />
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Main_page
