import { FormEvent, useState } from "react";
import Button from "../../button/Button";
import { addProductInput } from "./addProductInput";
import { TProductItem } from "../../featuredProducts/productItems";
import { useAddProductMutation } from "../../redux/api/api";
import { updloadCloudinaryImage } from "../../cloudinary/uploadImgToCloudinary";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const DashAddProduct = () => {
    const navigate = useNavigate();
    const [imgHolder, setImgHolder] = useState('');
    console.log(imgHolder)
    const initialProducts:TProductItem = {
        title: "",
        brand: "",
        price: "",
        availableQuantity: "",
        rating: "",
        description: "",
      }
    const [product, setProduct] = useState(initialProducts);

    const [addProduct] = useAddProductMutation();

   
    

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        console.log(product)

        const {rating, price, availableQuantity,img, ...remaining} = product;

        const allData = {
            ...remaining,
            rating: parseInt(rating),
            price: parseInt(price),
            availableQuantity: parseInt(availableQuantity),
            img: imgHolder
        }

       if(imgHolder ){
            if(allData){
                console.log(allData)
                addProduct(allData)
                toast.success('data added successfully')
                navigate('/dashboard')
            }else{
                toast.error('please fill up all input fields')
            }
       }else{
        toast.error('image not added. please add images')
       }

    }
   

    return (
        <div className="w-full h-[400px] mb-3 ">
            <div className="flex items-baseline justify-between">
                <div className="w-[400px] flex items-baseline justify-between">
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
                        
                        <label htmlFor="">Description :</label>
                        <br />
                    </div>
                    <div>
                        {
                            addProductInput.map(input => {
                                return (
                                    <input className="block mb-2 leading-8 w-[250px]" type={input.type} 
                                    onChange={(e) => setProduct({...product, [input.name] : e.target.value})}
                                    required
                                    />
                                )
                            })
                        }
                        <textarea style={{maxHeight:'150px'}} className="w-[250px]" name="" id="" 
                        onChange={(e) => setProduct({...product, description: e.target.value})}
                        required
                        ></textarea>
                    </div>
                </div>
                <div className="w-[300px] h-[30px]">
                    <input type="file" name="" id="" onChange={(e) => {
                        const file = e.target.files[0];
                         updloadCloudinaryImage(file, setImgHolder)
                    }}/>
                </div>
            </div>
            <hr />
            <div className="w-full h-[30px] flex items-center justify-end my-3">
                <p onClick={handleSubmit}><Button >Add Product</Button></p>
            </div>
        </div>
    );
};

export default DashAddProduct;