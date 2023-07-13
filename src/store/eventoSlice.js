import { createSlice } from "@reduxjs/toolkit";

export const eventoSlice = createSlice({
    name: 'evento',
    initialState: {
        eventos:[]
    },
    reducers:{
        setEvento: (state, action) =>{
            state.eventos = action.payload
        },
        addEvento: (state, action) => {
            state.eventos = [ ...state.eventos, action.payload ]
        },
        editEvento:(state, action) => {
            state.eventos = state.eventos.map( 
                item => item.id === action.payload.id ? action.payload : item )
        },
        deleteEvento:(state, action) => {
            state.eventos = state.eventos.filter(item => item.id !== action.payload)
        }
    }
})

export const {
    setEvento,
    addEvento,
    editEvento,
    deleteEvento
} = eventoSlice.actions