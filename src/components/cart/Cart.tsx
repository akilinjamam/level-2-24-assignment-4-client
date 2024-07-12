import cart from './Cart.module.css';
// import { NavLink } from "react-router-dom";
import { countStars } from "../featuredProducts/startCount";
import Button from "../button/Button";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addQuantity } from "../redux/features/quantitySlice";
import { deleted, leftArrow , rightArrow } from "../../icons/icons";
import { deleteProduct, increaseAndDecreaseQuantity } from "../redux/features/addProductSlice";


const Cart = () => {
   
    const {product} = useAppSelector((state)=> state.product)
    const {qunatity} = useAppSelector((state) => state.quantity)
    const dispatch = useAppDispatch()

   

    return (
        <div className={`${cart.main}`}>
            <div className="w-full h-[50px] bg-purple-50 rounded-lg">
            <p>quantity: {qunatity}</p>
            </div>
            {
                product.map((item, index) => {
                    return (
                        <div key={index+1} className="w-full h-[350px] bg-purple-50 rounded-lg my-6 p-3 flex items-center justify-between">
                            <section className="w-[30%] h-full bg-yellow-100 rounded-lg">

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
                            
                                <p>Total Price: {parseInt(item.price) * item.selectQuantity}</p>
                                
                            
                                <p onClick={() => dispatch(addQuantity(1))}><Button>Details</Button></p>
                                
                            </section>
                        </div>
                    )
                })
            }
    </div>
    );
};

export default Cart;