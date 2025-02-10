import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
const Product = ({ data }) => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow:5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            }
        ]
    };


    return (
        <section className="top-container-1 overflow-hidden">
            <div id="Products" className="text-center px-8 md:px-16 lg:px-24 max-w-screen  ">
                <div className=" ">
                    <div className="max-w-3xl mx-auto mb-10 flex bg  ">
                        <h2 className="text-3xl font-bold text-gray-800">Poducts</h2>
                    </div>

                    <div className="grid grid-cols-1  gap-6 ">
                        <Slider {...settings}>
                            {data
                                ? data.map((d) => (
                                    <div className="flex flex-col items-center text-center ">
                                        <div className="text-4xl mb-3 ">
                                            <img src={d.img} className="h-[200px] box-border  " />
                                        </div>
                                    </div>
                                ))
                                : "Loading..."}
                        </Slider>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Product;
