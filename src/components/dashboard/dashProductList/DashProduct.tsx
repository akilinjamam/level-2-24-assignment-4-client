import { productItems } from '../../featuredProducts/productItems';
import productList from './DashProduct.module.css';

const DashProduct = () => {
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
                    productItems.map(item => {
                        return (
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.brand}</td>
                                <td >
                                    <button className='py-1 px-3 rounded-lg bg-green-400 text-white font-bold '>Edit</button>
                                    <button className='py-1 px-3 rounded-lg bg-red-400 text-white font-bold ml-10'>Delete</button>    
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