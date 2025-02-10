import { FaComments, FaBullhorn, FaUsers, FaMagic } from "react-icons/fa";

const iconMap = {
    FaComments: <FaComments />,
    FaBullhorn: <FaBullhorn />,
    FaUsers: <FaUsers />,
    FaMagic: <FaMagic />
};

const Product = ({ data }) => {
    return (
        <div id="Products" className="text-center py-10">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Products</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data
                        ? data.map((d, i) => (
                            <div key={`${d.title}`} className="flex flex-col items-center text-center p-4">
                                <div className="text-4xl text-designColor mb-3">
                                    {iconMap[d.icon]}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700">{d.title}</h3>
                                <p className="text-gray-600 text-sm">{d.text}</p>
                            </div>
                        ))
                        : "Loading..."}
                </div>
            </div>
        </div>
    );
};

export default Product;
