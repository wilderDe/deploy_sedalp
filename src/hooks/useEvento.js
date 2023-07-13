import { useDispatch, useSelector } from "react-redux"
import apiSedalp from "../api/config"
import { addEvento, deleteEvento, editEvento, setEvento } from "../store/eventoSlice"

export const useEvento = () => {
    
    const { eventos } = useSelector( state => state.evento )
    const dispatch = useDispatch()
    

    const obtenerEventos= async() => {
        const { data } = await apiSedalp.get('/eventos')
        dispatch( setEvento( data.eventos))
    }

    const agregarEvento = async(form) => {
        const formData = new FormData();
        formData.append("archivo", form.archivo)

        const {data} = await apiSedalp.post('/eventos', form)
        await apiSedalp.put(`/uploads/evento/${data.id}`, formData,{
            headers: {"Content-Type": "multipart/form-data"}
        })

        dispatch( addEvento(data))
        return true
    }

    const editarEvento = async(form) => {
        console.log(form)
        const { archivo, ...resto } = form
        await apiSedalp.put(`/eventos/${form.id}`, resto)

        if(form.archivo.length !== 0){
            console.log("evento con imagen")
            const formData = new FormData();
            formData.append("archivo", archivo)
            await apiSedalp.put(`/uploads/evento/${form.id}`, formData,{
                headers: {"Content-Type": "multipart/form-data"}
            })
        }

        dispatch( editEvento(resto))
        return true
    }
    
    const eliminarEvento = async(id) => {
        await apiSedalp.delete(`/eventos/${id}`)
        dispatch(deleteEvento(id))
    } 
    
    
    return {
        eventos,

        obtenerEventos,
        agregarEvento,
        editarEvento,
        eliminarEvento

    }
}
