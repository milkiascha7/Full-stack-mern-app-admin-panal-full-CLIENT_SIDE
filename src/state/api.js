import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Products'],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTages: ['User'],
    }),
    getProducts: build.query({
      query: () => 'client/products',
      providesTages: ['Products'],
    }),
    getCustomers: build.query({
      query: () => 'client/customers',
      providesTages: ['Customers'],
    }),
  }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } =
  api;
