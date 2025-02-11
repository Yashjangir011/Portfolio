function Contact() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex items-center justify-center">
                {/* Free Shipping */}
                <div className=" p-10 flex flex-col items-center text-center">
                    <img src="/icons/chat.png" alt="Free Shipping" className="w-16 h-16 mb-4" />
                    <h3 className="font-chakra text-lg font-semibold mb-2">Free Shipping</h3>
                    <p className="text-sm text-gray-600 font-playwrite">Free shipping on all orders</p>
                </div>

                {/* 24/7 Support */}
                <div className="flex p-10 flex-col items-center text-center">
                    <img src="/icons/support.png" alt="24/7 Support" className="w-16 h-16 mb-4" />
                    <h3 className="font-chakra text-lg font-semibold mb-2">24/7 Support</h3>
                    <p className="text-sm text-gray-600 font-playwrite">Customer support anytime</p>
                    <p className="text-sm text-gray-600 font-playwrite">Products & Orders: 4 am - 11 pm PT, 7 days a week</p>
                    <p className="text-sm text-gray-600 font-playwrite">Company Info & Inquiries: 7 am - 4 pm PT, Mon - Fri</p>
                </div>

                {/* Money Back */}
                <div className="flex p-10 flex-col items-center text-center">
                    <img src="/icons/map.png" alt="Money Back" className="w-16 h-16 mb-4" />
                    <h3 className="font-chakra text-lg font-semibold mb-2">Money Back</h3>
                    <p className="text-sm text-gray-600 font-playwrite">30 days money back guarantee</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
