import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserInfo/userSlice";
export const store = configureStore(
    {
         reducer: userSlice
    }
);