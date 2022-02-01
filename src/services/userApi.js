import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://61f9935069307000176f7334.mockapi.io/api/v1/";

// Define a service using a base URL and expected endpoints
const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});
// TODO: (optional)
// https://redux-toolkit.js.org/rtk-query/api/createApi#providestags

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
export { userApi, useGetUsersQuery, useGetUserByIdQuery };
