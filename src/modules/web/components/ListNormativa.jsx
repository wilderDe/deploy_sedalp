import { useEffect, useState } from 'react'
import { SeccionAnimatrionY } from '../../../helpers/Animaciones/SeccionAnimatrionY'
import { Link } from 'react-router-dom'
import pdf_icons from '../../../assets/icons/pdf.svg'
import { getEnvironments } from '../../../helpers/getEnviroments'
import apiSedalp from '../../../api/config'
import '../styles/listnormativa.css'


const { VITE_API_URL } = getEnvironments();
const urlPDF = `${VITE_API_URL}/uploads/normativa`

export const ListNormativa = () => {

    const [normativas, setNormativas] = useState([])

    const obtenerNormativa = async () => {
        const { data } = await apiSedalp.get('/normativa');
        setNormativas(data.normativas) 
    }

    useEffect(() => {
        obtenerNormativa()

    }, [])

    return (
        <div className='contenedor'>
            <div className="normativas">

                {normativas.map(normativa => (
                    <div className="content-norma" key={normativa.id}>
                        <h2 > {normativa.titulo} </h2>
                        <div className="normativas-items">

                            {normativa.archivos.map(item => (
                                <Link
                                    key={item._id}
                                    to={`${urlPDF}/${normativa.id}/${item._id}`}
                                    className='normativa-link'
                                    target='_blank' >
                                    <SeccionAnimatrionY>
                                        <img src={pdf_icons} />
                                        <h4> {item.subtitle} </h4>
                                    </SeccionAnimatrionY>
                                </Link>
                            ))}

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
