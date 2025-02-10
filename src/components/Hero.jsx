import React from "react";

const Hero = () => {
    return (
        <div className=" bg-black/20 h-full">
            <div className="h-full flex justify-center items-center p-4">
                <div className="gap-4">
                    <div className="text-black lg:pr-36 w-xl">
                        <h1 className="text-5xl font-bold">
                            UltraTech Building Solutions...
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
                            dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
                            tempora similique dignissimos repellat aperiam veniam culpa
                            consequatur repudiandae asperiores saepe.
                        </p>
                        <button
                            className="bg-yellow-300 text-black hover:bg-amber-500 px-4 py-1 rounded-md duration-200"
                        >
                            Reach us
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
        </div>
    );
};

export default Hero;
