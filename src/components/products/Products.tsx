import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { productItems } from "../featuredProducts/productItems";
import { countStars } from "../featuredProducts/startCount";
import product from './Product.module.css';

const Products = () => {
    return (
        <div className={`${product.main}`}>
            <div className="w-full h-[50px] bg-purple-50 rounded-lg">

            </div>
            {
                productItems.map((item, index) => {
                    return (
                        <div key={index+1} className="w-full h-[300px] bg-purple-50 rounded-lg my-6 p-3 flex items-center justify-between">
                            <section className="w-[30%] h-full bg-yellow-100 rounded-lg">

                            </section>
                            <section className="w-[69%] h-full bg-yellow-100 rounded-lg leading-8 p-3 text-gray-700">
                                <p>Title: {item.title}</p>
                                <p>Brand: {item.brand}</p>
                                <p>Available Quantity: {item.brand}</p>
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