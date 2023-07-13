import { useDispatch, useSelector } from "react-redux"
import apiSedalp from "../api/config"
import { addNormativa, deleteNormativa, editNormativa, setNormativa } from "../store/normativaSlice"



export const useNormativa = () => {

    const { normativas } = useSelector( state => state.normativa )
    const dispatch = useDispatch()

    const obtenerNormativas = async() => {
        const { data } = await apiSedalp.get('/normativa');
        dispatch( setNormativa(data.normativas))
    }

    const agregarNuevoGrupo = async(form) => {
        const {data} = await apiSedalp.post('/normativa', form);
        dispatch(addNormativa(data))
        return true;
    }

    const editarGrupo = async(form) => {
        const resp = await apiSedalp.put(`/normativa/${form.id}`, { titulo: form.titulo })
        dispatch(editNormativa(form))
        return true
    }

    const eliminarGrupo = async(groupID ) => {

        await apiSedalp.delete(`/normativa/${groupID}`)
        dispatch(deleteNormativa(groupID))
    }


    const agregarNuevoItem = ( groupID, form ) => {
        console.log(groupID)
        console.log(form)
    }


    return{
        normativas,

        obtenerNormativas,
        agregarNuevoGrupo,
        editarGrupo,
        eliminarGrupo,


        agregarNuevoItem
    }
}
