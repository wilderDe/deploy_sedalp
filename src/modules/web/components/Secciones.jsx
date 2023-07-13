import { SeccionesTextos } from '../../../helpers/Animaciones/SeccionesTextos'
import '../styles/secciones.css'

const secciones = [
    {
        id: 1,
        title: "Normativas",
        parrafo: "Accede a las últimas normativas gubernamentales vigentes y mantente informado.",
        path: "/normativa",
        urlFondo: './fondos/normativa_home.jpg'
    },
    {
        id: 2,
        title: "Cursos",
        parrafo: "Explora nuestros cursos y adquiere nuevos conocimientos.",
        path: "/cursos",
        urlFondo: './fondos/cursos_home.jpg'
    },
    {
        id: 3,
        title: "Eventos",
        parrafo: "Descubre nuestras noticias, que pasan a día a día, informate sobre nuestros servicios como eventos, etc.",
        path: "/eventos",
        urlFondo: './fondos/eventos_home.jpg'
    }
]

export const Secciones = () => {


    return (
        <>
            {secciones.map(seccion => (
                <section className='normativa_secc'
                    key={seccion.id} 
                    style={{
                        backgroundImage: `url(${ seccion.urlFondo })`
                    }}
                >
                    <SeccionesTextos
                        title={seccion.title} 
                        parrafo={seccion.parrafo} 
                        path={seccion.path} 
                    ></SeccionesTextos>         
                </section>
            ))}
        </>
    )
}
