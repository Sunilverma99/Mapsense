import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                pincode: action.payload.pincode,
                email: action.payload.email
            };
            state.users.push(user);
        },
        removeUser: (state, action) => {
            state.users = [ ];
        }
    }
})

export const { addUser,removeUser } = userSlice.actions;

export default userSlice.reducer;
