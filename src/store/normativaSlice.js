import { createSlice } from "@reduxjs/toolkit";

export const normativaSlice = createSlice({
    name: 'normativa',
    initialState: {
        normativas:[],
    },
    reducers:{
        setNormativa: (state, action) =>{
            state.normativas = action.payload
        },
        addNormativa: (state, action) => {
            state.normativas = [ ...state.normativas, action.payload ]
        },
        editNormativa:(state, action) => {
            state.normativas = state.normativas.map( 
                item => item.id === action.payload.id ? action.payload : item )
        },
        deleteNormativa:(state, action) => {
            state.normativas = state.normativas.filter(item => item.id !== action.payload)
        }
    }
})

export const {
    setNormativa,
    addNormativa,
    editNormativa,
    deleteNormativa,

} = normativaSlice.actions