import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export default createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "TODO: BaseUrl here" }),
  endpoints: () => ({}),
});
