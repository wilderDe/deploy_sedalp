import { createSlice } from "@reduxjs/toolkit";

export const cursoSlice = createSlice({
    name: 'curso',
    initialState: {
        cursos:[]
    },
    reducers:{
        setCursos: (state, action) =>{
            state.cursos = action.payload
        },
        addCurso: (state, action) => {
            state.cursos = [ ...state.cursos, action.payload ]
        },
        editCurso:(state, action) => {
            state.cursos = state.cursos.map( 
                item => item.id === action.payload.id ? action.payload : item )
        },
        deleteCurso:(state, action) => {
            state.cursos = state.cursos.filter(item => item.id !== action.payload)
        }
    }
})

export const {
    setCursos,
    addCurso,
    editCurso,
    deleteCurso
} = cursoSlice.actions