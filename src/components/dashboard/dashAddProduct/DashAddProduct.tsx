import Button from "../../button/Button";
import { addProductInput } from "./addProductInput";


const DashAddProduct = () => {
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
                    <label htmlFor="">Description :</label>
                    <br />
                </div>
            <div>
                {
                    addProductInput.map(input => {
                        return (
                            <input className="block mb-2 leading-8 w-[250px]" type={input.type} />
                        )
                    })
                }
                <textarea style={{maxHeight:'150px'}} className="w-[250px]" name="" id=""></textarea>
            </div>
           </div>
            <hr />
            <div className="w-full h-[30px] flex items-center justify-end my-3">
                <Button>Add Product</Button>
            </div>
        </div>
    );
};

export default DashAddProduct;