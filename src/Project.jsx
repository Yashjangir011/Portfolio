function Project(){ 
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <span className="text-8xl font-bodoni"> UPLOAD SOON </span>
            </div>
            <div className="m-5 flex p-8 text-3xl font-bodoni justify-between">
                <div className="mt-7">
                    CONTACT ME 
                </div>
                
                <div className="mt-5 mb-4 pt-19 pb-12 mr-3 pl-4 flex space-x-10">
                    <a className="bg-white rounded-xl p-2 hover:scale-110 transition-transform duration-300" 
                       href="https://github.com/Yashjangir011" 
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src="./icons/icons8-github-256.svg" className="w-8 h-8" alt="GitHub" />
                    </a>
                    <a className="bg-white rounded-xl p-2 hover:scale-110 transition-transform duration-300" 
                       href="https://www.instagram.com/itz__yash_011/" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        <img src="./icons/instagram.svg" className="w-8 h-8" alt="Instagram" />
                    </a>
                    <a className="bg-white rounded-xl p-2 hover:scale-110 transition-transform duration-300" 
                       href="https://www.linkedin.com/feed/" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        <img src="./icons/linkedin.svg" className="w-8 h-8" alt="LinkedIn" />
                    </a>
                    <a className="bg-white rounded-xl p-2 hover:scale-110 transition-transform duration-300" 
                       href="https://x.com/un_avail_a_ble" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        <img src="./icons/twitter.svg" className="w-8 h-8" alt="Twitter" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project