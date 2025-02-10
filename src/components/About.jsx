import React from "react";

export const About = () => {
    return (
        <div id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                    <div className="flex justify-center">
                        <img
                            src="assets/natarajan.jpg"
                            alt="About Us"
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere eveniet perferendis delectus deleniti, voluptatum laboriosam officiis. Quae voluptate ipsam voluptates provident aliquam! Tempore vitae ab accusamus velit explicabo sapiente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
