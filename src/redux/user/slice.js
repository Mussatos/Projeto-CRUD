import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            return { ...state } 
        },
        loginUserSuccess: (state, action) => {
            console.log(action.payload)
        },
        loginUserFailure: (state, action) =>{
            console.log(action.payload)
        },
        registerUser: (state, action) => {
            return { ...state }
        }
    }
});

export const { loginUser, registerUser, loginUserSuccess, loginUserFailure } = userSlice.actions;

export default userSlice.reducer;