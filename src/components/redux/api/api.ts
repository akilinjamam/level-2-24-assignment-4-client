import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://level-2-24-assignment-4-server.vercel.app/api/",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, minPrice, maxPrice, sort }) => {
        const params = new URLSearchParams();
        if (search) {
          params.append("search", search);
        }

        if (minPrice !== undefined) {
          params.append("min", minPrice);
        }
        if (maxPrice !== undefined) {
          params.append("max", maxPrice);
        }
        if (maxPrice !== undefined) {
          params.append("sort", sort);
        }

        return { url: `/products?${params.toString()}`, method: "GET" };
      },
      providesTags: ["products"],
    }),
    getProductsForDashboard: builder.query({
      query: () => {
        return { url: `/products`, method: "GET" };
      },
      providesTags: ["products"],
    }),
    getMinPriceProducts: builder.query({
      query: () => {
        return { url: "/products/minPrice", method: "GET" };
      },
      providesTags: ["products"],
    }),
    getMaxPriceProducts: builder.query({
      query: () => {
        return { url: "/products/maxPrice", method: "GET" };
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
  useGetProductsForDashboardQuery,
  useGetMinPriceProductsQuery,
  useGetMaxPriceProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
