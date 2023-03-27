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
      query: (id ) => ({
        url: `products/${id}`,
      }),
    }),
    searchProduct: build.mutation({
      query: (query) => ({
        url: `api/products/search/`,
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
  useSearchProductMutation,
} = fakeStoreApi;
