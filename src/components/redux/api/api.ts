import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://level-2-24-assignment-4-server.vercel.app/api/",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (title) => {
        const params = new URLSearchParams();

        if (title) {
          params.append("title", title);
        }

        return { url: "/products", method: "GET", params: params };
      },
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        return { url: "/products/create-product", method: "POST", body: data };
      },
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: (data) => {
        const { _id, ...bodyData } = data;

        return { url: `/products/${_id}`, method: "PATCH", body: bodyData };
      },
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation({
      query: (data) => {
        return { url: `/products/${data.id}`, method: "DELETE" };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
