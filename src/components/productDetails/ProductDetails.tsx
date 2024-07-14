import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../../icons/icons";
import {  TProductItem } from "../featuredProducts/productItems";
import { countStars } from "../featuredProducts/startCount";
import detail from './ProductDetail.module.css';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addProduct, increaseAndDecreaseQuantity,  } from "../redux/features/addProductSlice";
import { useGetProductsQuery } from "../redux/api/api";
const ProductDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate()
    
    const {data: products} = useGetProductsQuery('')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const findProduct = products?.data?.find((_f:any,i:number) => (i+1) === parseInt(id as string) ) as TProductItem
    console.log(findProduct)
    const dispatch = useAppDispatch();
    const {product} = useAppSelector(state => state.product)

    const findCartProduct = product?.find((_f, i) => (i+1) === parseInt(id as string) )

    const addProducts = () => {

        if(findCartProduct){
            dispatch(increaseAndDecreaseQuantity({id: parseInt(id as string), data: product, type: 'addFromCart' }))
        }else{
            dispatch(addProduct(findProduct))
        }
        navigate(`/cart/${id}`)
    }


    return (
        <div className={`${detail.main} w-full h-[500px] bg-purple-50 rounded-lg p-3 flex items-center justify-between`}>
            <section className="w-[50%] h-full bg-yellow-100 rounded-lg ">
                <img style={{width:'100%', height:'100%', borderRadius:'10px'}} src={findProduct?.img} alt="" />
            </section>
            <section style={{position:'relative'}} className="w-[49%] h-full rounded-lg p-3 leading-9 ">
                <p>Title: {findProduct?.title}</p>
                <p>Brand: {findProduct?.brand}</p>
                <p>Available Quantity: {findProduct?.availableQuantity}</p>
                <p>Price: {findProduct?.price}</p>
                <div className="flex items-center">
                    <p>Raiting:</p>
                    {countStars(findProduct?.rating)}
                </div>
                <p>Description:</p>
                <p title={findProduct?.description} className="leading-5">
                    {findProduct?.description && findProduct?.description.length > 100 
                    ? findProduct.description.slice(0, 100) + '...view more'
                    : findProduct?.description
                    }
                </p>
               
                    <button onClick={addProducts} style={{position:'absolute', bottom:'10px'}} className=" w-[96%] flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-3 rounded-lg">
                        <div className="flex items-center">
                        {cart} <span className="ml-2">Add to Cart</span>
                        </div>
                    </button>

            </section>
        </div>
    );
};

export default ProductDetails;