import {  TProductItem } from '../../featuredProducts/productItems';
import { useGetProductsQuery } from '../../redux/api/api';
import { openModal } from '../../redux/features/modalSlice';
import { useAppDispatch } from '../../redux/hooks';
import productList from './DashProduct.module.css';

const DashProduct = () => {
    const {data: products} = useGetProductsQuery('');
    const dispatch = useAppDispatch()
   
    return (
        <div className={`${productList.main} w-full h-[400px] mb-3 overflow-x-hidden overflow-y-scroll`}>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Brand</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.data?.map((item:TProductItem) => {
                        return (
                            <tr>
                                <td>{item?.title}</td>
                                <td>{item?.price}</td>
                                <td>{item?.brand}</td>
                                <td >
                                    <button onClick={() => dispatch(openModal({type: 'editModal', open: true, data: item}))} className='py-1 px-3 rounded-lg bg-green-400 text-white font-bold '>Edit</button>
                                    <button onClick={() => dispatch(openModal({type: 'deleteModal', open: true, value: item?.title, id: item?._id}))}  className='py-1 px-3 rounded-lg bg-red-400 text-white font-bold ml-10'>Delete</button>    
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    );
};

export default DashProduct;