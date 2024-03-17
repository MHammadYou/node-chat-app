import { createSelector } from "@reduxjs/toolkit";

import accountsApi from "../accounts";

const accountDetailsSelector = accountsApi.endpoints.getUserDetails.select();

export const selectUserDetails = createSelector(
  accountDetailsSelector,
  (data) => {
    const { username = "", email = "" } = data.data || {};
    return { username, email };
  }
);
