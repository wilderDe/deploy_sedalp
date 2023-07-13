import { createSlice } from "@reduxjs/toolkit";

export const simredSlice = createSlice({
    name: 'simred',
    initialState: {
        regiones: [],
    },
    reducers:{
        setRegiones: (state, action) =>{
            state.regiones = action.payload
        },
    
    }
})

export const {
    setNormativa,
   


} = simredSlice.actions