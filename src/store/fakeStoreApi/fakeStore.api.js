import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStore/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: 'products/categories',
      }),
    }),
    getProduct: build.query({
      query: (id) => ({
        url: `products/${id}`,
      }),
    }),
    getProductsByLimit: build.query({
      query: (limit) => ({
        url: `products?limit=${limit}`,
      }),
    }),
    getAllProducts: build.query({
      query: (id) => ({
        url: `products`,
      }),
    }),
    getProductInCategory: build.query({
      query: (category) => ({
        url: `products/category/${category}`,
      }),
    }),
    registerUser: build.mutation({
      query: (query) => ({
        url: `users`,
        method: 'POST',
        body: query,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    loginUser: build.mutation({
      query: (query) => ({
        url: `auth/login`,
        method: 'POST',
        body: query,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductQuery,
  useGetProductsByLimitQuery,
  useGetProductInCategoryQuery,
  useGetAllProductsQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
} = fakeStoreApi;
