import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:{
        name:'',
        age:'',
        number:'',
    }
}

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        login:(state,action) => {
            state.value = action.payload
        },
        logout:(state) => {
            state.value = initialState.value
        },
        admin:(state,action) => {
            state.value = action.payload
        }
    }
});


export const {login,logout,admin} = userSlice.actions;

export const store = configureStore({
    reducer:{
        user:userSlice.reducer,
    }
});