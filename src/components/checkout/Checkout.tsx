import { useState } from 'react';
import checkout from './Checkout.module.css'
import { inputItems } from './inputItems';
import Button from '../button/Button';
import { NavLink } from 'react-router-dom';


const Checkout = () => {
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



    return (
        <div className={`${checkout.main} w-full h-[350px] bg-purple-50 rounded-log p-3`}>
           <p className="my-3 text-gray-700 text-2xl font-bold">Give us Delivery Info:</p>
           <hr />
            <div className='flex items-center justify-between w-full h-[200px]'>
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
                                        <div className='my-3'><input key={index+1} type={input.type} /></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='w-[50%] h-[100%]  p-3'>
                    <p className='my-3'>Product: </p>
                    <div className='flex items-center justify-between'>
                        <div className='w-[90%] h-full'>
                            <p className='my-3'>Price: </p>
                            <p className='my-3'>Quantity: </p>
                        </div>
                        <div className='w-[10%] h-full'>
                            <p className='my-3 text-right'>340 </p>
                            <p className='my-3 text-right'>20 </p>
                        </div>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between'>
                        <p className='my-3'>Total: </p>
                        <p className='my-3'>6800 </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[80px] flex items-center justify-end'>
                <NavLink to='/'><Button>Cash On Delivery</Button></NavLink>
            </div>
        </div>
    );
};

export default Checkout;