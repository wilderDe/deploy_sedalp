import { useEffect, useState } from 'react'
import { SeccionAnimatrionY } from '../../../helpers/Animaciones/SeccionAnimatrionY'
import { construirFecha } from '../../../helpers/fechas'
import { ImagenView } from './ImagenView'
import { getEnvironments } from '../../../helpers/getEnviroments'
import calendar_icon from '../../../assets/icons/calendar.svg'
import apiSedalp from '../../../api/config'
import '../styles/listeventos.css'

const { VITE_API_URL } = getEnvironments();
const urlImage = `${VITE_API_URL}/uploads/evento`

export const ListEventos = () => {

    const [eventos, setEventos] = useState([])
    const [modalImage, setModalImage] = useState({ active: false })

    const obtenerEventos = async() => {
        const {data} = await apiSedalp.get('/eventos');
        setEventos(data.eventos)
    }
    const handleModalImage = ( urlImage ) => {
        setModalImage({
            active: true,
            urlImage,
            setModalImage
        })
    }

    useEffect(() => {
        obtenerEventos()
    }, [])

    if(eventos.length === 0){
        return(
            <div>cargando</div>
        )
    }

    return (
        <div className="contenedor-eventos">
            <div className="eventos">
            {eventos.map(evento => (
            <SeccionAnimatrionY key={evento.id}>
                <div className="evento-content">
                    <div className="evento-left">
                        <img src={`${urlImage}/${evento.id}`} onClick={()=> handleModalImage(`${urlImage}/${evento.id}`)} />
                    </div>
                    <div className="evento-right">
                        <h2> {evento.titulo}</h2>
                        <p> {evento.resumen} </p>
                        <p> {evento.descripcion} </p>
                        <div className="publicado">
                            <img src={calendar_icon} />
                            <p>publicado {construirFecha(evento.fecha) } </p> 
                        </div>
                    </div>
                </div>
            </SeccionAnimatrionY>
            ))} 
            </div>
            <ImagenView modalData={modalImage} />
        </div>
    )
}
