import React from "react";

export const Services = ({ data }) => {
  return (
    <section className="top-container-1"> 
         <div id="services" className=" serv-parent">
      <div className=" mx-auto px-6 md:px-12">
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {data
            ? data.map((d, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
                >

                  <div className="w-20 h-20 flex object-fill items-center justify-center bg-gradient-to-r from-designColor to-green-400 rounded-full text-white text-5xl mb-6 shadow-md transition-all duration-300">
                    <img src="assets/birla.png" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-designColor transition-colors duration-300">
                      {d.name}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">{d.text}</p>
                  </div>
                </div>
              ))
            : <p className="text-lg text-gray-500">Loading...</p>}
        </div>
      </div>
    </div>
    </section>

  );
};

export default Services;
