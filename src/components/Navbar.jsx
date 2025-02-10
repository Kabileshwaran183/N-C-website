import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 650);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            data-aos="fade-down"
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-yellow-300 bg-opacity-0 backdrop-blur-md text-white" : "bg-yellow-300"
            }`}
            style={{ backgroundColor: isScrolled ? "rgba(255, 223, 88, 0.0)" : "rgb(253 224 71)" }}
        >
            <div className="h-16 mx-[20px] max-w-[800px] flex items-center justify-between px-6 ">
                <div className={`flex items-center ${isScrolled ? "text-black":"text-white"} font-bold text-2xl`}>
                    <img src="assets/natarajan.jpg" alt="" className="w-10" />
                    <span>Natarajan and Co</span>
                </div>
                <div className={`${isScrolled ? "text-black":"text-white"} hidden sm:block`}>
                    <ul className="flex items-center gap-6 text-xl py-4 mr-4">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Products</a></li>
                         <li><a href="#">Dealership</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
