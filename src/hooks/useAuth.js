
import { useDispatch, useSelector } from 'react-redux'
import apiSedalp from '../api/config'
import { mostrarMensajeDeErrorApi } from '../modules/admin/helpers/validaciones'
import { setLogin, setLogout } from '../store/AuthSlice'

export const useAuth = () => {
  
    const { login, user } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    const validarLogin = async( { usuario, password } ) => {
        const { data } = await apiSedalp.post('/usuarios/auth', {usuario, contrasenia: password} )
        if(!Boolean(data.ok)){
            mostrarMensajeDeErrorApi(data.msg)
            return false
        }

        if(!Boolean(data.user.estado) ){
            mostrarMensajeDeErrorApi("Ups!")
            return
        }

        dispatch(setLogin(data.user))
        const user={
            usuario: data.user.usuario,
            rol: data.user.rol,
            uid: data.user.id
        }
        localStorage.setItem("user",  JSON.stringify(user))
        return true
    }
    const logoutUser = () => {
        dispatch( setLogout() )
        localStorage.removeItem("user")
    }
    const verificarLocalStorage = () =>{
        const user = localStorage.getItem("user")
        if(user){
            dispatch( setLogin(JSON.parse(user)))
        }
    }

    return{

        login,
        user,

        validarLogin,
        logoutUser,
        verificarLocalStorage

    }

}   
