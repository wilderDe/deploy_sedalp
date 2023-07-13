import { Link } from 'react-router-dom'
import { SeccionAnimatrionY } from '../../../helpers/Animaciones/SeccionAnimatrionY'
import '../styles/enlaces.css'

const enlaces = [
    {
        id: 1,
        title: "GADLP",
        parrafo: "Gobierno autónomo de la paz",
        path: "https://lapaz.gob.bo/"
    },
    {
        id: 2,
        title: "SDMMH",
        parrafo: "secretaria Departamental de mineria metalurgica e hidrocarburos",
        path: "https://mineria.lapaz.gob.bo/"
    },
    {
        id: 3,
        title: "IDELP",
        parrafo: "instituto Departamental de estadistica de la paz",
        path: "http://sidelp.lapaz.gob.bo/"
    },
    {
        id: 4,
        title: "SDCLP",
        parrafo: "servicio Departamental de caminos la paz",
        path: "http://sedcamlapaz.gob.bo/"
    },
    {
        id: 5,
        title: "INAMEN",
        parrafo: "instituto nacional de medicina nuclear",
        path: "http://www.inamen.gob.bo/"
    },
    {
        id: 6,
        title: "LIDER 97",
        parrafo: "emisora de libre expresión",
        path: "http://radiolider97.bo/"
    },
    {
        id: 7,
        title: "SDGS",
        parrafo: "servicio Departamental de gestión social",
        path: "https://www.sedegeslapaz.gob.bo/"
    },
    {
        id: 8,
        title: "SEDES",
        parrafo: "servicio Departamental de salud la paz",
        path: "https://www.sedeslapaz.gob.bo/"
    },
    {
        id: 9,
        title: "SDDMT",
        parrafo: "secretaria Departamental de derechos de la madre tierra",
        path: "http://sdia.lapaz.gob.bo/"
    }
]

export const Enlaces = () => {

    return (
        <div className='contenedor enlaces'>
            
            <SeccionAnimatrionY>
                <h2>Enlaces e Unidades desconcentradas</h2>
            </SeccionAnimatrionY>

            <div className="cards">
                {enlaces.map(enlace => (
                    <SeccionAnimatrionY key={enlace.id}>
                        <Link className="card" to={enlace.path} target='_blank'>
                            <p style={{ fontWeight: 900 }} >{ enlace.title } </p>
                            <p> { enlace.parrafo } </p>
                            <div className="card-link">
                                <div className="card-link-cont">
                                    <p>Ver más</p>
                                </div>
                            </div>
                        </Link>
                    </SeccionAnimatrionY>
                ))}
            </div>
        </div>
    )
}
