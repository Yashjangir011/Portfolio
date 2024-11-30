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
                <div className="img_si">
                    <img src="/images/shoe_image.png" alt="" />
                </div>
            </div>

            <div className="next_page">
                <div className="next_text">
                   TOP OF THE WISHLIST KICKS 
                </div>   
                <div className="next_text2">
                    All-time icons and sport-inspired gifts to make everyone on your list look and feel their best
                </div>
                <button className="next_btn">
                    SHOP KICKS
                </button>

                <div className="nextt">
                    <div >
                        <h2>The Latest</h2>
                    </div>
                </div>
                
            </div>
          
        </div>
        
    )
}

export default Main_page
