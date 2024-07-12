import { useState } from "react";

const useAddProducts = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return { setCart, cart };
};

export default useAddProducts;
