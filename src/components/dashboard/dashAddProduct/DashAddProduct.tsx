import { FormEvent, useState } from "react";
import Button from "../../button/Button";
import { addProductInput } from "./addProductInput";
import { TProductItem } from "../../featuredProducts/productItems";
import { useAddProductMutation } from "../../redux/api/api";


const DashAddProduct = () => {
    const initialProducts:TProductItem = {
        img: "",
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

        const {rating, price, availableQuantity, ...remaining} = product;

        const allData = {
            ...remaining,
            rating: parseInt(rating),
            price: parseInt(price),
            availableQuantity: parseInt(availableQuantity),
        }

        addProduct(allData)

    }
   

    return (
        <div className="w-full h-[400px] mb-3 ">
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
                    <label htmlFor="">Image Link :</label>
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
            <hr />
            <div className="w-full h-[30px] flex items-center justify-end my-3">
                <p onClick={handleSubmit}><Button >Add Product</Button></p>
            </div>
        </div>
    );
};

export default DashAddProduct;