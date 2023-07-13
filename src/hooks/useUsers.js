import { useDispatch, useSelector } from 'react-redux'
import apiSedalp from '../api/config'
import { addUsers, deleteUser, editUser, setUsers } from '../store/UserSlice'

export const useUsers = () => {

    const { usuarios } = useSelector( state => state.users )
    const dispatch = useDispatch()

    const obtenerUsuarios = async() => {
        const {data} = await apiSedalp.get('/usuarios')
        //Filtramos los usuarios que estan eliminados
        const filters = data.usuarios.filter( user => user.estado !== false  )
        dispatch( setUsers(filters ) ) 
    }

    const agregarUsuario = async(form) => {
        const {data } = await apiSedalp.post('/usuarios', form )
        dispatch( addUsers(data))
        return true
    }

    const editarUsuario = async(form) => {
        const { data } = await apiSedalp.put(`/usuarios/${form.id}`, form)
        dispatch( editUser(form) )
        return true
    }
    
    const eliminarUsuario = async(id) => {
        await apiSedalp.delete(`/usuarios/${id}`)
        dispatch(deleteUser(id))
    } 

    return {

        usuarios,

        obtenerUsuarios,
        agregarUsuario,
        editarUsuario,
        eliminarUsuario

    }
}