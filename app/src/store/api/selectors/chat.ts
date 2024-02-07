import { createSelector } from "@reduxjs/toolkit";

import chatApi from "../chat";

const chatSelector = chatApi.endpoints.getChat.select();

export const selectChat = createSelector(chatSelector, (data) => data?.data);
