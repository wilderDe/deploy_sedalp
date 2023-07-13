import { useDispatch, useSelector } from "react-redux"
import apiSedalp from "../api/config"
import { addCurso, deleteCurso, editCurso, setCursos } from "../store/cursoSlice"


export const useCurso = () => {

    const { cursos } = useSelector( state => state.curso )
    const dispatch = useDispatch()
    
    const obtenerCursos = async() => {
        const { data } = await apiSedalp.get('/cursos')
        console.log(data)
        dispatch( setCursos( data.cursos))
    }

    const agregarCurso = async(form) => {
        const formData = new FormData();
        formData.append("archivo", form.archivo)
        const {data} = await apiSedalp.post('/cursos', form)
        
        await apiSedalp.put(`/uploads/cursos/${data.id}`, formData,{
            headers: {"Content-Type": "multipart/form-data"}
        })
        dispatch( addCurso(data))
        return true
    }

    const editarCurso = async(form) => {
        const { archivo, ...resto } = form
        await apiSedalp.put(`/cursos/${form.id}`, resto)

        if(form.archivo.length !== 0){
            console.log("curso con imagen")
            const formData = new FormData();
            formData.append("archivo", archivo)
            await apiSedalp.put(`/uploads/cursos/${form.id}`, formData,{
                headers: {"Content-Type": "multipart/form-data"}
            })
        }

        dispatch( editCurso(resto))
        return true
    }
    
    const eliminarCurso = async(id) => {
        await apiSedalp.delete(`/cursos/${id}`)
        dispatch(deleteCurso(id))
    } 
    return {
        cursos,

        obtenerCursos,
        agregarCurso,
        editarCurso,
        eliminarCurso
    }

}   
