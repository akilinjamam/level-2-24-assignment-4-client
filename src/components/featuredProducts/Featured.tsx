import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { productItems } from "./productItems";
import { countStars } from "./startCount";
import Button from "../button/Button";
import { NavLink} from "react-router-dom";

const Featured = () => {
    
   

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      };

    return (
        <div className="w-full h-[700px] bg-purple-50 rounded-lg my-6 p-3">
            <div className="my-8">
                <p className="text-3xl font-bold text-gray-700">FEATURED PRODUCTS:</p>
            </div>
            <div className="my-6">
              <Slider {...settings}>
                    {
                         productItems.map((items, index) => {
                         return (
                             <div key={index+1}>
                                 <div  className="w-[350px] h-[485px] bg-blue-50 p-3 rounded-md">
                                 <div className="w-full h-[250px] bg-blue-100 rounded-md mb-3 text-gray-700">

                                 </div>
                                 <div className="leading-8 text-gray-700 font-bold">
                                     <p>Title: {items.title}</p>
                                     <p>Brand: {items.brand}</p>
                                     <p>price: {items.price}</p>
                                     <p>Available Quantity: {items.availableQuantity}</p>
                                     <div className="flex items-center">
                                        <p>Raiting:</p>
                                        {countStars(items.rating)}
                                     </div>
                                     <NavLink to={`/productDetail/${index+1}`}><button className="w-full bg-purple-600 rounded-lg hover:bg-purple-700 text-white my-2">SEE DETAILS</button></NavLink>
                                 </div>
                             </div>
                             </div>
                         )
                         })
                    }
             </Slider>
            </div>
            <div className="my-6 w-full h-[75px] flex items-center justify-center">
                <Button>All Products</Button>
            </div>
        </div>
    );
};

export default Featured;