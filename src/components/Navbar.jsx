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
        <section>
        <nav
            data-aos="fade-down"
            className={`fixed w-full  z-50 transition-all duration-300 flex justify-between
            }`}
            style={{ backgroundColor: isScrolled ?  "rgb(255, 234, 0)":"rgba(255, 234, 0, 0.0)" }}
        >
            <div className="h-16 mx-[15px] max-w-[800px] flex justify-between items-center w-full  px-3 ">
                <div className={`flex items-center  justify-center ${isScrolled ? "text-black":"text-white"} font-bold text-2xl`}>
                    <img src="assets/natarajan.jpg" alt="" className="w-10 rounded-full h-10" />
                    <span >Natarajan and Co</span>
                </div>
                <div className={` ${isScrolled ? "text-black":"text-white"}  hidden sm:block  `}>
                    <ul className=" header flex  items-center gap-6  font-bold text-xl py-4 mr-4 ">
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFEA00]"}`}>Home</a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFEA00]"}`}>About </a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFEA00]"}`}>Products</a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFEA00]"}`}>Dealership</a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFEA00]"}`}>Contacts</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </section>
    );
};

export default Navbar;
