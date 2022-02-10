import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_URL = "https://61f9935069307000176f7334.mockapi.io/api/v1/";
const API_URL = "http://localhost:3100/api/v1/";

// Define a service using a base URL and expected endpoints
const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Users", "Contacts"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
      providesTags: ["Users"],
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
      providesTags: ["Users"],
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: `users`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `users/login`,
        method: "POST",
        body,
      }),
      transformResponse: ({ userId }) => {
        return userId;
      },
      invalidatesTags: ["Users"],
    }),
    logoutUser: builder.mutation({
      query: (body) => ({
        url: `users/logout`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    getContactsByUserId: builder.query({
      query: (userId) => `users/${userId}/contacts`,
      providesTags: ["Contacts"],
    }),
  }),
});
// TODO: (optional)
// https://redux-toolkit.js.org/rtk-query/api/createApi#providestags

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetContactsByUserIdQuery,
} = userApi;
export {
  userApi,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetContactsByUserIdQuery,
};
