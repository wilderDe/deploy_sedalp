
import React from 'react'
import { SeccionAnimatrionY } from '../../../helpers/Animaciones/SeccionAnimatrionY'
import pdf_icons from '../../../assets/icons/pdf.svg'
import { Link } from 'react-router-dom'
import { getEnvironments } from '../../../helpers/getEnviroments'


const { VITE_API_URL } = getEnvironments();

const urlImage = `${VITE_API_URL}/uploads/alcalde`
const urlPdf = `${VITE_API_URL}/uploads/pdfs`


export const Alcalde = ( {alcalde = {}, idMunicipio, ine,poa,presupuestaria,ptdi} ) => {
   

    if(Object.keys(alcalde).length === 0) {
        return <></>
    }

    return (
        <SeccionAnimatrionY>
            <div className="alcalde">
                <div className="alcalde-img">
                    <img src={`${urlImage}/${idMunicipio}` } alt="" />
                </div>
                <div className="alcalde-datos">
                    <div className="alcalde-text">
                        <p>Nombre del alcalde:</p>
                        <p>{alcalde.nombre} </p>
                    </div>
                    <div className="alcalde-text">
                        <p>Telefono institucional:</p>
                        <p>{alcalde.telefono} </p>
                    </div>
                    <div className="alcalde-text">
                        <p>Correo institucional:</p>
                        <p>{alcalde.correo} </p>
                    </div>
                    <div className="alcalde-text">
                        <p>Dirección institucional:</p>
                        <p>{alcalde.direccion} </p>
                    </div>
                    <div className="alcalde-text">
                        <p>Sigla del partido:</p>
                        <p>{alcalde.sigla} </p>
                    </div>
                </div>
                <div className="alcalde-documentos">
                    {poa&&
                    <Link 
                        to={`${urlPdf}/poa/${idMunicipio}`}
                        className="cont-docu"
                        target='_blank'    
                    > 
                        <img src={pdf_icons} alt="" />
                        <p><span style={{fontWeight: 500}} > POA</span>  fuente: Ministerio de Economia y Finanzas </p>
                    </Link>
                    }
                    {ine&&
                    <Link 
                        to={`${urlPdf}/ine/${idMunicipio}`}
                        className="cont-docu"
                        target='_blank' 
                    >
                        <img src={pdf_icons} alt="" />
                        <p><span style={{fontWeight: 500}} >DATOS ESTADISTICOS</span> Fuente: Instituto Nacional de estadistica, correspondiente al censo 2012 </p>
                    </Link>
                    }
                     {ptdi&&
                    <Link
                        to={`${urlPdf}/ptdi/${idMunicipio}`}
                        className="cont-docu"
                        target='_blank' 
                    >
                        <img src={pdf_icons} alt="" />
                        <p><span style={{fontWeight: 500}} > PTDI PEI</span> Fuente: Ministerio de Planificacion </p>

                    </Link>
                    }
                    {presupuestaria&&
                    <Link 
                        to={`${urlPdf}/presupuestaria/${idMunicipio}`}
                        className="cont-docu"
                        target='_blank' 
                    >
                        <img src={pdf_icons} alt="" />
                        <p><span style={{fontWeight: 500}} >EJECUCIÓN PRESUPUESTARIA</span>  Fuente: Ministerio de Economia y finanzas </p>

                    </Link>
                    }
                </div>
            </div>
        </SeccionAnimatrionY>
    )
}
