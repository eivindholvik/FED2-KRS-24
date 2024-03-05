import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const placeholderApi = createApi({
  reducerPath: "placeholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "posts",
      }),

    })
  })

});

export const { useGetPostsQuery } = placeholderApi;