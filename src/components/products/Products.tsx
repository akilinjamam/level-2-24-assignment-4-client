import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { countStars } from "../featuredProducts/startCount";
import product from './Product.module.css';
import { useGetProductsQuery } from "../redux/api/api";
import { TProductItem } from "../featuredProducts/productItems";
import notFound from '../../images/not-found.png'
import { useState } from "react";
import { deleted } from "../../icons/icons";

const Products = () => {
    const [search, setSearch] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [sort, setSort] = useState('')

    const {data: products} = useGetProductsQuery({search, minPrice, maxPrice, sort})

   

    return (
        <div className={`${product.main}`}>
            <div className={`${product.partOne} lg:w-full xsm:w-full sm:w-full md:full  lg:h-[50px] xsm:h-auto sm:h-auto  bg-purple-50 rounded-lg flex items-center justify-between p-2`}>
            <p  onClick={() => {
                    setMaxPrice('')
                    setMinPrice('')
                    setSearch('')
                    setSort('')
                   }} className="mb-3 cursor-pointer xsm:block sm:block lg:hidden md:hidden">{deleted}</p>
                <div className="sm:w-full lg:w-auto xsm:w-full xsm:mb-2 sm:mb-2 lg:mb-0">
                    <p>Total Products: {products?.data?.length > 0 ? products?.data?.length : 'Loading...'}</p>
                </div>
                <div className="sm:w-full lg:w-auto xsm:w-full xsm:mb-2 sm:mb-2 lg:mb-0">
                    <label htmlFor="search">Search:</label>
                    <input value={search} className="ml-2" type="text" onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div className={`${product.partOne} flex sm:w-full lg:w-auto xsm:w-full xsm:mb-2 sm:mb-2 lg:mb-0`}>
                   <div className="sm:w-full lg:w-auto xsm:w-full xsm:mb-2 sm:mb-2 lg:mb-0">
                        <label htmlFor="search">Minimum Price:</label>
                        <input value={minPrice} className="ml-2" type="number" onChange={(e) => setMinPrice(e.target.value)}/>
                   </div>
                   <div className="lg:ml-2 xsm:ml-0 sm:ml-0 sm:w-full lg:w-auto xsm:w-full xsm:mb-2 sm:mb-2 lg:mb-0">
                        <label htmlFor="search">Maximum Price:</label>
                        <input value={maxPrice} className="ml-2" type="number" onChange={(e) => setMaxPrice(e.target.value)}/>
                   </div>
                </div>
                <div className={`${product.partOne} flex sm:w-full lg:w-auto xsm:w-full xsm:mb-2 sm:mb-2 lg:mb-0`}>
                   <div className="lg:w-auto sm:w-full xsm:w-full">
                        <label htmlFor="search">sort:</label>
                        <select value={sort} className="ml-2"  onChange={(e) => setSort(e.target.value)}>
                            <option value="">select sort</option>
                            <option value="asc">asc</option>
                            <option value="dsc">dsc</option>
                        </select>
                   </div>

                   <p  onClick={() => {
                    setMaxPrice('')
                    setMinPrice('')
                    setSearch('')
                    setSort('')
                   }} className="ml-5 cursor-pointer xsm:hidden sm:hidden lg:block md:block">{deleted}</p>
                   
                </div>
            </div>
            { search
                ?
                <div>
                    {
                    products?.data?.length > 0
                    ?
                    products?.data?.map((item:TProductItem, index:number) => {
                        return (
                            <div key={index+1} className={`${product.partOne} w-full lg:h-[330px] xsm:h-auto sm:h-auto bg-purple-50 rounded-lg my-6 p-3 flex items-center justify-between`}>
                                <section className="lg:w-[30%] sm:w-full xsm:w-full lg:h-full sm:h-auto xsm:h-auto  rounded-lg">
                                    <img className="xsm:block sm:block xsm:mx-auto sm:mx-auto" style={{width:'400px', height:'300px', borderRadius:'10px'}} src={item?.img} alt="" />
                                </section>
                                <section className="lg:w-[69%] xsm:w-full sm:w-full lg:h-full sm:h-auto xsm:h-auto  rounded-lg leading-8 p-3 text-gray-700">
                                    <p>Title: {item.title}</p>
                                    <p>Brand: {item.brand}</p>
                                    <p>Available Quantity: {item.brand}</p>
                                    <p>Available Quantity: {item.availableQuantity}</p>
                                    <p>Price: {item.price}</p>
                                    <div className="flex items-center">
                                        <p>Raiting:</p>
                                        {countStars(item.rating as number)}
                                    </div>
                                    <NavLink to={`/productDetail/${index+1}`}><Button>Details</Button></NavLink>
                                    
                                </section>
                            </div>
                        )
                    })
                    :
                    <div className="w-full h-[330px] bg-purple-50 my-6 rounded-lg flex items-center justify-center">
                        <img width={400} src={notFound} alt="" />
                    </div>
                }
                </div>
                :
               products?.data?.length > 0 
               ?
               products?.data?.map((item:TProductItem, index:number) => {
                    return (
                        <div key={index+1} className={`${product.partOne} lg:w-full xsm:w-full sm:w-full lg:h-[330px] xsm:h-auto sm:h-auto bg-purple-50 rounded-lg my-6 p-3 flex items-center justify-between`}>
                            <section className="lg:w-[30%] xsm:w-full sm:w-full  h-full  rounded-lg ">
                                <img className="xsm:block sm:block xsm:mx-auto sm:mx-auto" style={{width:'400px', height:'300px', borderRadius:'10px',}} src={item?.img} alt="" />
                            </section>
                            <section className="w-[69%] h-full  rounded-lg leading-8 p-3 text-gray-700">
                                <p>Title: {item.title}</p>
                                <p>Brand: {item.brand}</p>
                                <p>Available Quantity: {item.brand}</p>
                                <p>Available Quantity: {item.availableQuantity}</p>
                                <p>Price: {item.price}</p>
                                <div className="flex items-center">
                                    <p>Raiting:</p>
                                    {countStars(item.rating as number)}
                                </div>
                                <NavLink to={`/productDetail/${index+1}`}><Button>Details</Button></NavLink>
                                
                            </section>
                        </div>
                    )
                })
                :
                <div className="w-full h-[330px] bg-purple-50 my-6 rounded-lg flex items-center justify-center">
                        <img width={400} src={notFound} alt="" />
                    </div>

            }
        </div>
    );
};

export default Products;