
const Product = ({ data }) => {
    return (
        <div id="Products" className="text-center py-10">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Products</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data
                        ? data.map((d) => (
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="text-4xl mb-3">
                                    <img src={d.img}  className="h-[150px]"/>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700">{d.title}</h3>
                            </div>
                        ))
                        : "Loading..."}
                </div>
            </div>
        </div>
    );
};

export default Product;
