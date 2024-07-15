import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import notFound from '../../images/not-found.png'
import Slider from "react-slick";
import { countStars } from "./startCount";
import Button from "../button/Button";
import { NavLink} from "react-router-dom";
import { useGetProductsForDashboardQuery} from "../redux/api/api";
import { TProductItem } from "./productItems";

const Featured = () => {
    
   const {data: allProducts} = useGetProductsForDashboardQuery('')


console.log(allProducts?.data)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      };
    const settingsTwo = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      };

    return (
        <div className="w-full h-[700px] bg-purple-50 rounded-lg my-6 p-3">
            <div className="my-8">
                <p className="text-3xl font-bold text-gray-700 sm:text-center xsm:text-center lg:text-left">FEATURED PRODUCTS:</p>
            </div>
           {
                allProducts?.data?.length > 0
                ?
                <div className="my-6 xsm:hidden sm:hidden lg:block">
                <Slider {...settings}>
                    {
                    
                        allProducts?.data?.map((items:TProductItem, index:number) => {
                        return (
                            <div key={index+1}>
                                <div  className="w-[350px] h-[485px] bg-blue-50 p-3 rounded-md">
                                <div className="w-full h-[250px] bg-blue-100 rounded-md mb-3 text-gray-700">
                                        <img style={{width:'400px', height:'250px', borderRadius:'10px'}} src={items.img} alt="" />      
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
                :
                <div className="w-full h-[330px] bg-purple-50 my-6 rounded-lg flex items-center justify-center">
                    <img width={400} src={notFound} alt="" />
                 </div>
           }
            <div className="my-6 xsm:block sm:block lg:hidden mx-auto xsm:w-[100%]">
              <Slider {...settingsTwo}>
                    { 
                    
                         allProducts?.data?.map((items:TProductItem, index:number) => {
                         return (
                             <div key={index+1}>
                                 <div  className="w-[350px] xsm:w-full sm:w-full h-[485px] bg-blue-50 p-3 rounded-md">
                                 <div className="w-full h-[250px] bg-blue-100 rounded-md mb-3 text-gray-700">
                                        <img className="xsm:w-full sm:w-full lg:w-[400px]" style={{ height:'250px', borderRadius:'10px'}} src={items.img} alt="" />      
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
               <NavLink to='/products'><Button>All Products</Button></NavLink>
            </div>
        </div>
    );
};

export default Featured;