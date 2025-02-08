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
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    uid: action.payload.uid,
                }
            }
        },
        loginUserFailure: (state, action) => {
            console.log(action.payload)
        },
        registerUser: (state, action) => {
            return { ...state }
        },
        registerUserSuccess: (state, action) => {
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    uid: action.payload.uid,
                }
            }
        },
        registerUserFailure: (state, action) => {
            console.log(action.payload)
        },
        signOutUser: (state) => {
            return {
                ...state,
                user: null,
            }
        },
        storageUser: (state, action) => {
            localStorage.setItem('@ticketsPRO', JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload,
            }
        },
        checkLoginUser: (state, action) => {
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    uid: action.payload.uid,
                }
            }
        }
    }
});

export const { loginUser, registerUser, loginUserSuccess, loginUserFailure,
    registerUserSuccess, registerUserFailure, signOutUser, storageUser, checkLoginUser } = userSlice.actions;

export default userSlice.reducer;