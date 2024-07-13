import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductItem } from "../../featuredProducts/productItems";

export type TSelectQuantity = {
  selectQuantity: number;
};

type TInitialState = {
  product: (TProductItem & TSelectQuantity)[];
};

const initialState: TInitialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProductItem>) => {
      state.product.push({ ...action.payload, selectQuantity: 1 });
    },
    increaseAndDecreaseQuantity: (
      state,
      action: PayloadAction<{ id: number; data?: TProductItem[]; type: string }>
    ) => {
      const cartData = action.payload.data;
      const increaseQuantity = cartData?.find(
        (f, i) => i + 1 === action.payload.id
      );

      const { selectQuantity, ...remaining } = increaseQuantity;

      let updatedQuantity;
      if (
        action.payload.type === "increaseBtn" ||
        action.payload.type === "addFromCart"
      ) {
        if (selectQuantity <= increaseQuantity.availableQuantity) {
          updatedQuantity = selectQuantity + 1;
        } else {
          return;
        }
      }
      if (action.payload.type === "decreaseBtn") {
        if (selectQuantity < 2) {
          return;
        }

        updatedQuantity = selectQuantity - 1;
      }

      const updatedData = {
        ...remaining,
        selectQuantity: updatedQuantity,
      };

      if (
        action.payload.type === "addFromCart" ||
        action.payload.type === "increaseBtn"
      ) {
        state.product = cartData?.map((item, index) => {
          return index + 1 === action.payload.id ? updatedData : item;
        });
      }
      if (action.payload.type === "decreaseBtn") {
        state.product = cartData?.map((item, index) => {
          return index + 1 === action.payload.id ? updatedData : item;
        });
      }
    },
    deleteProduct: (
      state,
      action: PayloadAction<{ id: number; data: TProductItem[] }>
    ) => {
      const findProduct = action.payload.data.filter(
        (f, i) => i + 1 !== action.payload.id
      );

      state.product = findProduct;
    },
    updateQuantity: (
      state,
      action: PayloadAction<TProductItem & TSelectQuantity>
    ) => {
      const findFromState = state.product.find(
        (f) => f?._id === action.payload._id
      ) as TProductItem & TSelectQuantity;

      const newUpdatedData = {
        ...action.payload,
        selectQuantity: findFromState.selectQuantity,
      };

      console.log(newUpdatedData);

      const findData = state.product.map((item) => {
        return item?._id === action.payload._id ? newUpdatedData : item;
      });

      console.log(findData);

      state.product = findData;
    },
  },
});

export const {
  addProduct,
  increaseAndDecreaseQuantity,
  deleteProduct,
  updateQuantity,
} = productSlice.actions;
export default productSlice.reducer;
