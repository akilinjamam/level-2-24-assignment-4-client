import {  TProductItem } from '../../featuredProducts/productItems';
import { useGetProductsForDashboardQuery } from '../../redux/api/api';
import { openModal } from '../../redux/features/modalSlice';
import { useAppDispatch } from '../../redux/hooks';
import productList from './DashProduct.module.css';
import notFound from '../../../images/not-found.png';

const DashProduct = () => {
    const {data: products} = useGetProductsForDashboardQuery('');
    const dispatch = useAppDispatch()
   
    return (
        <div className={`${productList.main} w-full h-[400px] mb-3 overflow-x-hidden overflow-y-scroll`}>
            {
                products?.data?.length > 0
                ?
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
            :
            <div className="w-full h-[330px] bg-purple-50 my-6 rounded-lg flex items-center justify-center">
                        <img width={400} src={notFound} alt="" />
                    </div>
            }
        </div>
    );
};

export default DashProduct;