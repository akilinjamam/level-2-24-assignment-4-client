
import checkout from './Checkout.module.css'
import { inputItems } from './inputItems';

import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { TProductItem } from '../featuredProducts/productItems';
import { TSelectQuantity, updateQuantity } from '../redux/features/addProductSlice';
import { toast } from 'react-toastify';
import { useUpdateProductMutation } from '../redux/api/api';
import { useState } from 'react';


const Checkout = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    type TUser = {
        email: string;
        phone: string;
        name: string;
        address: string;
    }
    const initialInfo:TUser = {
        email: '',
        phone: '',
        name:'',
        address:''
    }
    const [user, setUser] = useState(initialInfo);
    const {product} = useAppSelector(state => state.product);
    const dispath = useAppDispatch()



    const findProduct = product?.find((_f,i) => (i+1) === parseInt(id as string)) as TProductItem & TSelectQuantity

    const [updateData, {status}] = useUpdateProductMutation()
        console.log(status)
    const placeOrder = async (value:string) => {
       

        if(value === 'cod'){
            console.log(user)
            if(user.address && user.phone && user.email && user.name){
                const remainingQuantity = findProduct?.availableQuantity - findProduct?.selectQuantity
                const id = findProduct?._id 

                const updatedProductData = {
                    _id: id,
                    availableQuantity: remainingQuantity
                }
               await updateData(updatedProductData)

               // eslint-disable-next-line @typescript-eslint/no-unused-vars
               const {availableQuantity, ...remaining} = findProduct

               const updateCartData = {
                ...remaining,
                availableQuantity: remainingQuantity
                
               }

               dispath(updateQuantity(updateCartData))
               navigate('/success')
            
            }else{
                toast.error('please fill all input fields')
            }
        }
    }



    return (
        <div className={`${checkout.main} w-full lg:h-[350px]  bg-purple-50 rounded-log p-3 text-gray-600 rounded-lg`}>
           <p className="my-3 text-gray-600 text-2xl font-bold">Give us Delivery Info:</p>
           <hr />
            <div className='lg:flex lg:items-center lg:justify-between w-full lg:h-[200px] sm:h-full xsm:h=full'>
                <div className='w-[50%] h-full'>
                    <div className='flex items-center justify-between w-[250px] my-3'>
                        <div className='leading-9'>
                                <label htmlFor="">Name :</label>
                                <br />
                                <label htmlFor="">Email :</label>
                                <br />
                                <label htmlFor="">Phone :</label>
                                <br />
                                <label htmlFor="">Address :</label>
                        </div>
                        <div>
                            {
                                inputItems.map((input, index) => {
                                    return (
                                        <div className='my-3'><input key={index+1} type={input.type} 
                                        onChange={(e) => setUser({...user, [input?.name] : e.target.value})}
                                        /></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='w-[50%] h-[100%]  lg:p-3 sm:p-0 xsm:p-0'>
                    <p className='my-3 font-bold '>Product: {findProduct?.title}</p>
                    <div className='flex items-center justify-between'>
                        <div className='w-[90%] h-full'>
                            <p className='my-3'>Price: </p>
                            <p className='my-3'>Quantity: </p>
                        </div>
                        <div className='w-[10%] h-full'>
                            <p className='my-3 text-right'>{findProduct?.price} </p>
                            <p className='my-3 text-right'>{findProduct?.selectQuantity}</p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between'>
                        <p className='my-3'>Total: </p>
                        <p className='my-3'>{findProduct?.price * findProduct?.selectQuantity}</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[80px] flex items-center justify-end'>
                            <select name="" id=""   onChange={(e) => placeOrder((e.target as HTMLSelectElement).value)}>
                                <option value="">Payment Method</option>
                                <option value="cod">Place Order (Cash on Delivery)</option>
                                <option value="online">Place Order (stripe)</option>
                            </select>
            </div>
        </div>
    );
};

export default Checkout;