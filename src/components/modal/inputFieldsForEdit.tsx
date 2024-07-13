type TAddProductInputForEdit = {
  type: string;
  name: string;
  placeholder: string;
}


export const addProductInputForEdit:TAddProductInputForEdit[] = [
    {
      type: "text",
      name: "title",
      placeholder: "Title",
    },
    {
      type: "text",
      name: "brand",
      placeholder: "Brand",
    },
    {
      type: "number",
      name: "price",
      placeholder: "Price",
    },
    {
      type: "number",
      name: "rating",
      placeholder: "Rating",
    },
    {
      type: "number",
      name: "availableQuantity",
      placeholder: "Available Quantity",
    },
    {
      type: "text",
      name: "img",
      placeholder: "Image",
    },
  ];
  