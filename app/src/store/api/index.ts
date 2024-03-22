import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

import { ApiEndpoints } from "@lib/constants";
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

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    const token = Cookies.get("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      { url: ApiEndpoints.refreshToken(), method: "POST" },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // TODO
      console.log("Storing refreshed token");
    } else {
      window.location.href = "/logout";
    }
  }

  return result;
};

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

export const getSerializedError = <T>(error: any) => error as BaseError<T>;

export default apiSlice;
