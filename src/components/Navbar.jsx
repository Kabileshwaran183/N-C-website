import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 550);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section>
        <nav
            data-aos="fade-down"
            className={`fixed w-full z-50 transition-all duration-300
            }`}
            style={{ backgroundColor: isScrolled ?  "rgb(255, 234, 0)":"rgba(255, 234, 0, 0.0)" }}
        >
                <div className={` ${isScrolled ? "text-black":"text-white"}  hidden header sm:block`}>
                    <ul className=" flex gap-16 font-bold text-xl text-[#ffffffc2] ">
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFEA00]"} `}>Home</a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFEA00]"} `}>About </a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFEA00]"} `}>Products</a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFEA00]"} `}>Dealership</a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFEA00]"} `}>Contacts</a></li>
                    </ul>
                </div>
        
        </nav>
        </section>
    );
};

export default Navbar;
