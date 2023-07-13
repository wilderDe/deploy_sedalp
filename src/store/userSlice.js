import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        usuarios:[]   
    },
    reducers:{
        setUsers: (state, action) =>{
            state.usuarios = action.payload
        },
        addUsers: (state, action) => {
            state.usuarios = [ ...state.usuarios, action.payload ]
        },
        editUser:(state, action) => {
            state.usuarios = state.usuarios.map( 
                user => user.id === action.payload.id ? action.payload : user )
        },
        deleteUser:(state, action) => {
            state.usuarios = state.usuarios.filter(user => user.id !== action.payload)
        }
    }
})

export const {
   setUsers,
   addUsers,
   editUser,
   deleteUser
} = userSlice.actions