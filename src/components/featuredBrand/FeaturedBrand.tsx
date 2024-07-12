import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import { featuredBrandItems } from './featuredBrandItems';

const FeaturedBrand = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div className="w-[100%] h-[310px] my-6 bg-purple-50 p-3 rounded-lg">
            <div className="mb-10 my-6 text-gray-700 text-3xl">
                <p className="font-bold">FEATURED BRANDS</p>
            </div>
            <div>
                <Slider {...settings}>                 
                        {
                            featuredBrandItems.map((items, index) => {
                                return (
                                    <div>
                                        <div style={{backgroundColor: `${items.bgColor}`}} key={index+1} className={`w-[250px] h-[150px] rounded-xl p-5 flex items-center justify-center`}>
                                            <div className="">
                                                <div className="w-[200px] h-[50px] flex items-center justify-center">
                                                    <img width={100} src={items.logo} alt="" />
                                                </div>
                                                <p className="text-center">{items.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </Slider>
            </div>
        </div>
    );
};

export default FeaturedBrand;