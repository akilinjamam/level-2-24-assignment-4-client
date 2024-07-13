import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { countStars } from "../featuredProducts/startCount";
import product from './Product.module.css';
import { useGetProductsQuery } from "../redux/api/api";
import { TProductItem } from "../featuredProducts/productItems";

const Products = () => {
    const {data: products} = useGetProductsQuery('')
    return (
        <div className={`${product.main}`}>
            <div className="w-full h-[50px] bg-purple-50 rounded-lg">

            </div>
            {
                products?.data?.map((item:TProductItem, index:number) => {
                    return (
                        <div key={index+1} className="w-full h-[330px] bg-purple-50 rounded-lg my-6 p-3 flex items-center justify-between">
                            <section className="w-[30%] h-full  rounded-lg">
                                <img style={{width:'400px', height:'300px', borderRadius:'10px'}} src={item?.img} alt="" />
                            </section>
                            <section className="w-[69%] h-full  rounded-lg leading-8 p-3 text-gray-700">
                                <p>Title: {item.title}</p>
                                <p>Brand: {item.brand}</p>
                                <p>Available Quantity: {item.brand}</p>
                                <p>Available Quantity: {item.availableQuantity}</p>
                                <p>Price: {item.price}</p>
                                <div className="flex items-center">
                                    <p>Raiting:</p>
                                    {countStars(item.rating)}
                                </div>
                                <NavLink to={`/productDetail/${index+1}`}><Button>Details</Button></NavLink>
                                
                            </section>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Products;