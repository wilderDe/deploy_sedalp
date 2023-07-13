import { useEffect, useState } from 'react'
import { SeccionAnimatrionY } from '../../../helpers/Animaciones/SeccionAnimatrionY'
import { construirFecha } from '../../../helpers/fechas'
import { ImagenView } from './ImagenView'
import apiSedalp from '../../../api/config'
import calendar_icon from '../../../assets/icons/calendar.svg'
import '../styles/listacursos.css'
import { getEnvironments } from '../../../helpers/getEnviroments'

const { VITE_API_URL } = getEnvironments();
const urlImage = `${VITE_API_URL}/uploads/cursos`


export const ListCursos = () => {
    const [cursos, setCursos] = useState([])
    const [modalImage, setModalImage] = useState({ active: false })

    const obtenerCursos = async () => {
        try {
            const { data } = await apiSedalp.get('/cursos');
            console.log(data)
            setCursos(data.cursos);
        } catch (error) {
            console.log(error)
        }
      
    }
    const handleModalImage = (urlImage) => {
        setModalImage({
            active: true,
            urlImage,
            setModalImage
        })
    }

    useEffect(() => {
        obtenerCursos()
    }, [])

    if (cursos.length === 0) {
        return (
            <div>No hay cursos</div>
        )
    }

    return (
        <div className='contenedor'>
            <div className="cursos">
                {cursos.map(curso => (
                    <SeccionAnimatrionY key={curso.id}>
                        <div className="curso-content">
                            <div className="curso-left">
                                <img src={`${urlImage}/${curso.id}`} onClick={() => handleModalImage(`${urlImage}/${curso.id}`)} />
                            </div>
                            <div className="curso-right">
                                <h2> {curso.titulo} </h2>
                                <p> {curso.parrafo}  </p>
                                <div className="publicado">
                                    <img src={calendar_icon} alt="" />
                                    <p> publicado {construirFecha(curso.createdAt)} </p>

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
