import Swal from "sweetalert2"


export const formLoginValid = ( form  ) => {
    if( form.usuario.length === 0 ){
        alertSwal("Debe ingresar su usuario")
        return false
    }
    if( form.password.length === 0 ){
        alertSwal("Debe ingresar su contraseña")
        return false
    }
    return true
}

export const formAddUserValid = (form) => {
    if(form.nombreApellido.length === 0){
        alertSwal("Debe ingresar el nombre y apellido")
        return false
    }
    if(form.telefono.length === 0 ){
        alertSwal("Debe ingresar el telefono")
        return false
    }
    if(form.usuario.length === 0 ){
        alertSwal("Debe ingresar el usuario")
        return false
    }
    if(form.contrasenia.length === 0 ){
        alertSwal("Debe ingresar la contraseña")
        return false
    }
    if(form.rol.length === 0 ){
        alertSwal("Debe seleccionar el rol")
        return false
    }
    return true
}
export const formAddCursoValid = ( form ) => {
    if(form.titulo.length === 0){
        alertSwal("Debe ingresar el titulo")
        return false
    }
    if(form.parrafo.length === 0){
        alertSwal("Debe ingresar el parrafo")
        return false
    }
   
    if(form.archivo.length === 0){
        alertSwal("Debe añadir una imagen")
        return false
    }
    return true

}
export const formAddCursoValidEdit = ( form ) => {
    if(form.titulo.length === 0){
        alertSwal("Debe ingresar el titulo")
        return false
    }
    if(form.parrafo.length === 0){
        alertSwal("Debe ingresar el parrafo")
        return false
    }
   
    return true

}
export const formAddEventoValid = ( form ) => {
    if(form.titulo.length === 0){
        alertSwal("Debe ingresar el titulo")
        return false
    }
    if(form.resumen.length === 0){
        alertSwal("Debe ingresar un resumen")
        return false
    }
    if(form.descripcion.length === 0){
        alertSwal("Debe ingresar una descripción")
        return false
    }
    if(form.fecha.length === 0){
        alertSwal("Debe seleccionar la fecha")
        return false
    }
    if(form.archivo.length === 0){
        alertSwal("Debe seleccionar una imagen")
        return false
    }
    return true
}
export const formAddEventoValidEdit = ( form ) => {
    if(form.titulo.length === 0){
        alertSwal("Debe ingresar el titulo")
        return false
    }
    if(form.resumen.length === 0){
        alertSwal("Debe ingresar un resumen")
        return false
    }
    if(form.descripcion.length === 0){
        alertSwal("Debe ingresar una descripción")
        return false
    }
    return true
}
export const formAddGroudNormativaValid = (form) => {
    if(form.titulo.length === 0){
        alertSwal("Ingrese el titúlo del grupo")
        return false
    }
    return true
}

export const formAddItemNormativa = (form) => {
    if(form.subtitle.length === 0){
        alertSwal("Ingrese el titulo")
        return false
    }
    if(form.archivo.length === 0){
        alertSwal("Debe seleccionar documento")
        return false
    }
    return true
}

export const formEditItemNormativa = (form) => {

    if(form.subtitle.length === 0){
        alertSwal("Ingrese el titulo")
        return false
    }
    return true
}

export const formPdfValid = (archivo) => {
    if(archivo === null){
        alertSwal("Agregue un documento")
        return false
    }
    return true
}
export const formAlcaldeValid = (form) => {
    if(form.nombre.length === 0){
        alertSwal("Ingrese el nombre del alcalde")
        return false
    }
    if(form.telefono.length === 0){
        alertSwal("Ingrese el telefono")
        return false
    }
    if(form.correo.length === 0){
        alertSwal("Ingrese el correo")
        return false
    }
    if(form.direccion.length === 0){
        alertSwal("Ingrese la dirección")
        return false
    }
    if(form.sigla.length === 0){
        alertSwal("Ingrese la sigla del partido politico")
        return false
    }
    return true
}

export const mostrarMensajeDeErrorApi = ( msg ) => {
    alertSwal(msg)
}


const alertSwal = ( msg ) => {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title:  msg,
        showConfirmButton: false,
        timer: 2500,
        customClass:{
            container: 'swal-container',
        },
        didOpen: () => {
            const swalContainer = document.querySelector('.swal-container')
            if (swalContainer) {
              swalContainer.style.zIndex = '9999'; // Establece un índice z alto para la alerta
            }
        }      
    })
}