import { useDispatch } from "react-redux";
import { deleted } from "../../icons/icons";
import { useAppSelector } from "../redux/hooks";
import { openModal } from "../redux/features/modalSlice";
import { useDeleteProductMutation, useUpdateProductMutation } from "../redux/api/api";
import { addProductInput } from "../dashboard/dashAddProduct/addProductInput";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import { updateQuantity } from "../redux/features/addProductSlice";
import { addProductInputForEdit } from "./inputFieldsForEdit";


const Modal = () => {
    const {open, value, id, type, data} = useAppSelector(state => state.modal)
    const [product,setProduct] = useState({});
    const dispatch = useDispatch()
    const [deleteProduct] = useDeleteProductMutation()
    const [updateData, {status}] = useUpdateProductMutation()

    const handleDelete = () => {
        const deletedId = {id}
        deleteProduct(deletedId)
        dispatch(openModal({type: 'openModal', open: false}))
    }

    useEffect(() => {
        setProduct({...data})
    },[data])

    const handleEdit = () => {
        const {price, availableQuantity, rating, ...remaining} = product;

        const newData = {
            ...remaining,
            price: parseInt(price),
            rating: parseInt(rating),
            availableQuantity: parseInt(availableQuantity),
        }

        updateData(newData)
        console.log(status)
        dispatch(openModal({type: 'editModal', open: false}))

       const {description, ...restData} = newData;
       
       const newDataForUpdateCart = {
        ...restData
       }

       dispatch(updateQuantity(newDataForUpdateCart))

    }
    
    return (
        <div className={`${open ? 'flex' : 'hidden'} absolute top-0 w-[100%] h-[100%] justify-center items-center`}>
            <div className={`${type === 'deleteModal' ? 'block' :'hidden'} w-[50%] h-[400px] bg-purple-200 p-3`}>
                <div className="w-full h-[30px] flex items-center justify-end">
                    <p className="cursor-pointer" onClick={()  => dispatch(openModal({type: 'openModal', open: false}))}>{deleted}</p>
                </div>
                <hr />
                    <div className="w-full h-[340px]  flex items-center justify-center">
                        <div className="w-[80%] h-[100px] ">
                            <p className="text-center text-red-500">Are You sure to delete <span className="font-bold">{value}</span></p>
                            <div className="w-full h-[80px] flex items-center justify-center" ><button onClick={handleDelete} className="py-1 px-3 bg-red-500 rounded-lg font-bold text-white"> Delete </button></div>
                        </div>
                    </div>
            </div>
            {/* edit modal */}
            <div className={`${type === 'editModal' ? 'block' :'hidden'} w-[50%] h-[400px] bg-purple-200 p-3 `}>
                    <div className="w-full h-[30px] flex items-center justify-end">
                        <p className="cursor-pointer" onClick={()  => dispatch(openModal({type: 'editModal', open: false}))}>{deleted}</p>
                    </div>
                    <hr />
                    <div className="w-[100%] flex items-baseline justify-around my-2">
                    <div className="leading-10">
                        <label htmlFor="">Title :</label>
                        <br />
                        <label htmlFor="">Brand :</label>
                        <br />
                        <label htmlFor="">Price :</label>
                        <br />
                        <label htmlFor="">Ratings :</label>
                        <br />
                        <label htmlFor="">Available Quantity :</label>
                        <br />
                        <label htmlFor="">Image Link :</label>
                        <br />
                        <label htmlFor="">Description :</label>
                        <br />
                    </div>
                    <div>
                        {
                            addProductInputForEdit.map(input => {
                                return (
                                    <input className="block mb-2 leading-8 w-[250px] px-2" type={input.type} value={product[input.name]}
                                    onChange={(e) => setProduct({...product, [input.name] : e.target.value})}
                                    required
                                    />
                                )
                            })
                        }
                        <textarea style={{maxHeight:'50px'}} className="w-[250px] px-2" value={product?.description} name="" id="" 
                        onChange={(e) => setProduct({...product, description: e.target.value})}
                        required
                        ></textarea>
                    </div>
            </div>
            <div className="w-full h-[30px] flex items-center justify-end">
                <button onClick={handleEdit}><Button>Edit Post</Button></button>
            </div>
            </div>
        </div>
    );
};

export default Modal;