import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "TODO: BaseUrl here" }),
  endpoints: () => ({}),
});

export default apiSlice;
