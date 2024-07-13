/* eslint-disable @typescript-eslint/no-unused-vars */
import cart from './Cart.module.css';
// import { NavLink } from "react-router-dom";
import { countStars } from "../featuredProducts/startCount";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { deleted, leftArrow , rightArrow } from "../../icons/icons";
import { deleteProduct, increaseAndDecreaseQuantity, TSelectQuantity } from "../redux/features/addProductSlice";
import { TProductItem } from '../featuredProducts/productItems';
import { useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { calculatePrice } from '../calculation/calculation';




const Cart = () => {
  
   const dispatch = useAppDispatch()
    const {product} = useAppSelector((state)=> state.product)
    

    const navigate = useNavigate()
    
    const check = (value:number) => {
        const findProduct = product?.find((f,i) => (i+1) === value ) as TProductItem & TSelectQuantity;

        if(findProduct.availableQuantity < findProduct.selectQuantity){
             return 'cursor-not-allowed bg-gray-500'
        }else{
            return 'cursor-pointer bg-purple-500 '
        }

    }

    const handleNavigate = (value: number) => {

        const findProduct = product?.find((f,i) => (i+1) === value ) as TProductItem & TSelectQuantity;

        if(findProduct.availableQuantity < findProduct.selectQuantity){
            toast.error('out of stock')
        }else{
            navigate(`/checkout/${value}`)
        }
    }

    const price =  calculatePrice(product?.map(item => (item.price * item.selectQuantity)));

    return (
        <div className={`${cart.main}`}>
            
            {
                product.map((item, index) => {
                    return (
                        <div key={index+1} className="w-full h-[350px] bg-purple-50 rounded-lg my-6 p-3 flex items-center justify-between">
                            <section className="w-[30%] h-full bg-yellow-100 rounded-lg">
                                <img style={{height:'100%', borderRadius:'10px'}} src={item.img} alt="" />
                            </section>
                            <section className="w-[69%] h-full rounded-lg leading-8 p-3 text-gray-700">
                                <div className="w-full flex items-center justify-between">
                                <p>Title: {item?.title}</p>
                                <button onClick={() => dispatch(deleteProduct({id: (index+1), data: product}))}>{deleted}</button>
                                </div>
                                <p>Brand:{item?.brand}</p>
                                <p>Available Quantity: {item?.availableQuantity}</p>
                                <p>Price: {item.price}</p>
                                <div className="flex items-center">
                                    <p>Raiting:</p>
                                    {countStars(item?.rating)}
                                </div>
                                <div className="w-full flex justify-between">
                                    <p>Selected Qunatity:</p>
                                    <div className="w-[80px] flex items-center justify-between">
                                        <p className="cursor-pointer" onClick={() => dispatch(increaseAndDecreaseQuantity({id: (index+1), data: product, type: 'decreaseBtn'}))}>{leftArrow}</p>
                                        <p>{item.selectQuantity}</p>
                                        <p className="cursor-pointer" onClick={() => dispatch(increaseAndDecreaseQuantity({id: (index+1), data: product, type: 'increaseBtn'}))}>{rightArrow}</p>
                                    </div>
                                </div>
                            
                                <p>Total Price: {item.price * item.selectQuantity}</p>
                                
                            
                                
                                <button onClick={() => handleNavigate(index+1)} className={`${check(index+1)} my-3 px-3 py-1 rounded-lg text-white font-bold`}>Procced to Checkout</button>
                                
                            </section>
                        </div>
                    )
                })
            }

            <div className="w-full h-[50px] bg-purple-50 rounded-lg my-6 flex items-center justify-end font-bold text-gray-600 px-2">
                <p>Total Price: {price}</p>
               
           </div>
        </div>
    );
};

export default Cart;