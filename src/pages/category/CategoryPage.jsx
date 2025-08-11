import { useNavigate, useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const CategoryPage = () => {
    const { categoryname } = useParams();
    const context = useContext(myContext);
    const { getAllProduct, loading } = context;
    const navigate = useNavigate();

    // State for sorting order
    const [sortOrder, setSortOrder] = useState("default");

    // Filter products by category
    let filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname));

    // Sort products based on selected order
    if (sortOrder === "asc") {
        filterProduct = [...filterProduct].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
        filterProduct = [...filterProduct].sort((a, b) => b.price - a.price);
    }

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Layout>
            <div className="mt-10 px-4">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="mb-5 text-3xl font-bold capitalize text-gray-800">{categoryname}</h1>

                    {/* Sorting Section */}
                    <div className="h-20 bg-gray-200 flex justify-center items-center space-x-3 mb-6">
                        <span className="text-lg font-medium text-gray-800">Sort by Price:</span>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="border rounded-lg p-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                        >
                            <option value="default">Default</option>
                            <option value="asc">Low to High</option>
                            <option value="desc">High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Main Section */}
                {loading ? (
                    <div className="flex justify-center">
                        <Loader />
                    </div>
                ) : (
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-5 mx-auto">
                            <div className="flex flex-wrap -m-4 justify-center">
                                {filterProduct.length > 0 ? (
                                    filterProduct.map((item, index) => {
                                        const { id, title, price, productImageUrl } = item;
                                        return (
                                            <div key={index} className="p-4 w-full md:w-1/4">
                                                <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white">
                                                    <img
                                                        onClick={() => navigate(`/productinfo/${id}`)}
                                                        className="lg:h-80 h-96 w-full object-cover hover:opacity-90 transition duration-300"
                                                        src={productImageUrl}
                                                        alt="Product"
                                                    />
                                                    <div className="p-6">
                                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                            Mega-Mart
                                                        </h2>
                                                        <h1 className="title-font text-lg font-semibold text-gray-900 mb-2">
                                                            {title.length > 25 ? title.substring(0, 25) + "..." : title}
                                                        </h1>
                                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                            ₹{price}
                                                        </h1>

                                                        <div className="flex justify-center">
                                                            {cartItems.some((p) => p.id === item.id) ? (
                                                                <button
                                                                    onClick={() => deleteCart(item)}
                                                                    className="bg-red-600 hover:bg-red-700 w-full text-white py-2 rounded-lg font-semibold transition duration-200"
                                                                >
                                                                    Remove from Cart
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    onClick={() => addCart(item)}
                                                                    className="bg-blue-500 hover:bg-blue-600 w-full text-white py-2 rounded-lg font-semibold transition duration-200"
                                                                >
                                                                    Add to Cart
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="text-center">
                                        <div className="flex justify-center">
                                            <img
                                                className="mb-2 w-16 h-16"
                                                src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                                                alt="No products"
                                            />
                                        </div>
                                        <h1 className="text-black text-xl font-semibold">No {categoryname} products found</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </Layout>
    );
};

export default CategoryPage;
