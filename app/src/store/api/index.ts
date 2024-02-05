import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

import { API_URL } from "constants/settings.ts";

type BaseError<T> = {
  status:
    | number
    | "FETCH_ERROR"
    | "PARSING_ERROR"
    | "TIMEOUT_ERROR"
    | "CUSTOM_ERROR";
  data: T;
};

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const getSerializedError = <T>(error: any) => error as BaseError<T>;

export default apiSlice;
