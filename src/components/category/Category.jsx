import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://rukminim2.flixcart.com/fk-p-flap/86/86/image/0d75b34f7d8fbcb3.png',
        name: 'fashion'
    },
    {
        image: 'https://i.ibb.co/Pz0p3SVc/ab7e2b022a4587dd-removebg-preview.png',
        name: 'furnitures'
    },
    {
        image: 'https://static.vecteezy.com/system/resources/thumbnails/046/323/598/small/pair-of-colorful-sports-shoes-for-active-lifestyle-png.png',
        name: 'shoes'
    },
    {
        image: 'https://rukminim2.flixcart.com/flap/86/86/image/22fddf3c7da4c4f4.png',
        name: 'mobiles'
    },
    {
        image: 'https://rukminim2.flixcart.com/flap/86/86/image/69c6589653afdb9a.png',
        name: 'electronics'
    },
    {
        image: "https://i.ibb.co/v6WbmThL/appliances.png",
        name: 'appliances'
    },
    {
        image: 'https://rosepng.com/wp-content/uploads/2023/08/sharia_books_and_stationary_vector_illustration_isolated_on_whi_e3034f79-3003-402a-b431-36d944ee8c03-photoroom-png-photoroom.png',
        name: 'stationary'
    },
    {
        image: 'https://i.ibb.co/pkkHt6D/teddy.png',
        name: 'toys'
    },
    {
        image: 'https://static.vecteezy.com/system/resources/thumbnails/030/351/270/small/cosmetics-images-ai-generative-free-png.png',
        name: 'beauty'
    }

]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-16 lg:h-16 max-w-xs rounded-full  transition-all hover:bg-blue-600 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12 ">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase hover:text-blue-500'>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;