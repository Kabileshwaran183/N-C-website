const Navbar = () => {
    return (
        <>
        <nav className="top-container">
            <div className="container">
                <div className="text-2xl hidden md:inline font-bold ">Natarajan and co</div>
                    <div className=" navbar-head">
                        <a href="#home" className="hover:text-black  duration-300 delay-100">Home</a>
                        <a href="#home" className="hover:text-black  duration-300 delay-100">About</a>
                        <a href="#home" className="hover:text-black  duration-300 delay-100">dealership</a>
                        <a href="#home" className="hover:text-black  duration-300 delay-100">Products</a>
                        <a href="#home" className="hover:text-black  duration-300 delay-100">Contact us</a>
                    </div>
                    <button className="button">Contact me</button>
                
            </div>
        </nav>
        </>
    )
}
export default Navbar;
