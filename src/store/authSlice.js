import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: 'no-authenticated',
        user:{}   
    },
    reducers:{
        setLogin: (state, action) =>{
            state.login = 'authenticated'
            state.user = action.payload
        },
        setLogout: (state) => {
            state.login = 'no-authenticated'
            state.user={}
        
        },
        updatePasswordUSer:(state,action) =>{
            state.user.contrasenia = action.payload.contrasenia
        }
    }
})

export const {
   setLogin,
   setLogout,
   updatePasswordUSer
} = authSlice.actions