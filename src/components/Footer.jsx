import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <footer className=" bg-black opacity-90 text-white  ">
            <div className=" top-0 left-0 w-[100%] overflow-hidden ">
                <svg data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[600px] fill-white"></path>
                </svg>
                <div className="footwe-div">
                    <div className="flex flex-col ">
                        <h2 className="text-[16px] text-white">Abouts us</h2>
                       <li className="foot-cont">home</li>
                        <li className="foot-cont">abouts</li>
                        <li className="foot-cont">products</li>
                    </div>

                    <div>
                        <h2 className="text-[16px] text-white">
                            branches
                        </h2>
                        <li className="foot-cont">Selva ganesh agency</li>
                        <li className="foot-cont">madurai</li>
                        
                    </div>

                    <div>
                        <h2 className="text-[16px] text-white">
                            Creativity
                        </h2>
                        <li className="foot-cont">Guidlines & Ideas</li>
                        <li className="foot-cont">Tips & Tricks</li>
                        <li className="foot-cont">photography</li>
                    </div>
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-[16px] text-white">
                            contact
                        </h2>
                        <p className="foot-cont">Karaikudinatarajan@gmail.com</p>
                        <p className="foot-cont">Phone: +1 113-456-7890 </p>
                        <p className="foot-cont">karaikudi </p>
                       
                    </div>
                </div>


                 <div>
                        <h6 className=" copy">&copy; SK {Year}</h6>
                    </div>
                 <div className="">
                   

                    <div className="flex gap-5 justify-end items-start copy-icon ">
                             <a
                                className="text-white hover:text-yellow-500 transform hover:scale-150 
                            transition-all duration-150 ease-in-out text-2xl" href="">
                                <FaGithub />
                            </a>
                            <a
                                className="text-white hover:text-yellow-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out text-2xl" href="">
                                <FaLinkedinIn />
                            </a>
                            <a
                                className="text-white hover:text-yellow-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out text-2xl" href="">
                                <FaTwitter />
                            </a>
                            <a
                                className="text-white hover:text-yellow-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out text-2xl" href="">
                                <FaInstagram />
                            </a>
                    </div>
                           
                        </div>
            </div>
        </footer>
    );
};

export default Footer;