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
    console.log(imgHolder);

    const initialProducts: TProductItem = {
        title: "",
        brand: "",
        price: 0,
        availableQuantity: 0,
        rating: 0,
        description: "",
    };
    
    const [product, setProduct] = useState(initialProducts);
    const [addProduct] = useAddProductMutation();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(product);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { rating, price, availableQuantity, img, ...remaining } = product;

        const allData = {
            ...remaining,
            rating: rating,
            price: price,
            availableQuantity: availableQuantity,
            img: imgHolder
        };

        if (imgHolder) {
            if (allData) {
                console.log(allData);
                addProduct(allData);
                toast.success('Data added successfully');
                navigate('/dashboard');
            } else {
                toast.error('Please fill up all input fields');
            }
        } else {
            toast.error('Image not added. Please add images');
        }
    };

    return (
        <div className="w-full h-[400px] mb-3">
            <div className="lg:flex lg:items-baseline lg:justify-between sm:flex-wrap xsm:flex-wrap">
                <div className="lg:w-[400px] sm:w-full xsm:w-full flex items-baseline justify-between ">
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
                        {addProductInput.map(input => (
                            <input
                                key={input.name}
                                className="block mb-2 leading-8 w-[250px]"
                                type={input.type}
                                onChange={(e) => setProduct({ ...product, [input.name]: e.target.value })}
                                required
                            />
                        ))}
                        <textarea
                            style={{ maxHeight: '150px' }}
                            className="w-[250px]"
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="lgw-[300px] sm:w-full xsm:w-full h-[30px] ">
                    <input
                        type="file"
                        onChange={(e) => {
                            const files = e.target.files;
                            if (files && files.length > 0) {
                                const file = files[0];
                                updloadCloudinaryImage(file, setImgHolder);
                            }
                        }}
                    />
                </div>
            </div>
            <hr className="mt-4" />
            <div className="w-full h-[30px] flex items-center justify-end my-3">
                <p onClick={handleSubmit}><Button>Add Product</Button></p>
            </div>
        </div>
    );
};

export default DashAddProduct;
