
const meses =['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre' ]

export const formatoFecha = () => {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()] ;      
    return `${dia} de ${mes} `
}

export const devuelveAnio = () =>{
    const fecha = new Date();
    const anio = fecha.getFullYear();
    return anio
}

export const construirFecha = ( date ) => {
    const fecha = new Date(date)
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()] ;  
    const anio = fecha.getFullYear();  
    return `${dia} de ${mes} del ${anio}`
}